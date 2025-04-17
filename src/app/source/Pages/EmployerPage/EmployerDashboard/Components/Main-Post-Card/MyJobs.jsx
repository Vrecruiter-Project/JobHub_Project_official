import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  styled,
  tableCellClasses,
  IconButton,
  Typography,
  CircularProgress,
  Button,
  Dialog,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { Grid } from "@mui/joy";
import { BASE_URL } from "../../../../../../service/apis";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4CAF50",
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "16px",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "12px",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentJobStudents, setCurrentJobStudents] = useState([]);

  const openDialog = (job) => {
    setCurrentJobStudents(job.students || []);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        //setLoading(true);
        const response = await fetch(`${BASE_URL}/admins/alljobs`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": import.meta.env.VITE_API_SECRET_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.jobs || !Array.isArray(data.jobs)) {
          throw new Error("Invalid data format received from API");
        }

        setJobs(data.jobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Get employee's applied jobs from localStorage
  const employee = JSON.parse(localStorage.getItem('employee'));
  const employeeJobs = employee?.jobs || [];

  // Filter jobs based on search term and whether they match employee's applied jobs
  const filteredJobs = jobs
    .filter(job => {
      const matchesSearch =
        job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company?.toLowerCase().includes(searchTerm.toLowerCase());

      // Only show jobs that the employee has applied to
      return employeeJobs.includes(job._id) && matchesSearch;
    })
    .sort((a, b) => {
      // Sort by application status if needed
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  if (error) {
    return (
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }}
      >
        <Grid sx={{ display: 'flex', gap: "10px", alignItems: "center" }}>
          <TextField
            label="Search My Applications"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: "300px" }}
          />
        </Grid>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>S.No</StyledTableCell>
                <StyledTableCell>Job Title</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Experience</StyledTableCell>
                <StyledTableCell>Salary</StyledTableCell>
                <StyledTableCell>Applicants</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell>{job.jobTitle || "N/A"}</StyledTableCell>
                    <StyledTableCell>{job.jobLocation || "N/A"}</StyledTableCell>
                    <StyledTableCell>{job.experience || "N/A"}</StyledTableCell>
                    <StyledTableCell>{job.salary || "N/A"}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => openDialog(job)}
                        disabled={!job.students || job.students.length === 0}
                      >
                        View ({job.students?.length || 0})
                      </Button>
                    </StyledTableCell>
                    {/* <StyledTableCell>
                      <IconButton color="primary" aria-label="Edit application">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary" aria-label="View applicants">
                        <PeopleIcon />
                      </IconButton>
                    </StyledTableCell> */}
                  </StyledTableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                    {searchTerm
                      ? "No matching applications found"
                      : "You haven't posted jobs yet"}
                  </TableCell>
                </TableRow>
              )}
              <Dialog open={dialogOpen} onClose={closeDialog} maxWidth="md" fullWidth>
                <DialogTitle>Applicants</DialogTitle>
                <DialogContent>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Full Name</StyledTableCell>
                          <StyledTableCell>Phone Number</StyledTableCell>
                          <StyledTableCell>Email</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {currentJobStudents.length > 0 ? (
                          currentJobStudents.map((student, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell>
                                {student.firstName} {student.lastName}
                              </StyledTableCell>
                              <StyledTableCell>
                                {student.mobileNumber || "N/A"}
                              </StyledTableCell>
                              <StyledTableCell>
                                {student.email || "N/A"}
                              </StyledTableCell>
                            </StyledTableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={3} align="center" sx={{ py: 2 }}>
                              No applicants found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </DialogContent>
              </Dialog>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default MyJobs;


// import React from 'react'

// export default function MyJobs() {
//   return (
//     <div>MyJobs</div>
//   )
// }
