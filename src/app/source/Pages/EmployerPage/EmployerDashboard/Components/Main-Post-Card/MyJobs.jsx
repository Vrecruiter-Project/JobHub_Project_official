// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Card,
//   Typography,
//   IconButton,
//   Checkbox,
//   Button,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import Dropdown from '@mui/joy/Dropdown';
// import Menu from '@mui/joy/Menu';
// import MenuButton from '@mui/joy/MenuButton';
// import MenuItem from '@mui/joy/MenuItem';
// import Grid from "@mui/material/Grid2";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
// import { useNavigate } from "react-router-dom";
// import Gif2 from "../../../../../../assets/Images/Gif2.gif";
// import { myJobs } from "../../../../../../service/operations/employeeApi";

// const MyJobs = () => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const employee = JSON.parse(localStorage.getItem("employee"));
//   const [jobPosts, setJobPosts] = useState([]);
//   const navigate = useNavigate();
//   const [toggleMode, setToggleMode] = useState(false);
//   const [selectedPosts, setSelectedPosts] = useState([]);

//   // TODO: style the data in your frontend
//   const fetchData = async () => {
//     const response = await myJobs(token);
//     console.log(response);
//     setJobPosts(response || []);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const contentItems = [
//     { Icon: <ShareOutlinedIcon />, title: "Share" },
//     { Icon: <SaveOutlinedIcon />, title: "Save" },
//     { Icon: <DeleteOutlineOutlinedIcon />, title: "Delete" },
//   ];

//   // const handleSelectPost = (index) => {
//   //   setSelectedPosts((prevSelected) =>
//   //     prevSelected.includes(index)
//   //       ? prevSelected.filter((i) => i !== index)
//   //       : [...prevSelected, index]
//   //   );
//   // };

//   const handleDeletePosts = () => {
//     const updatedPosts = jobPosts.filter(
//       (_, index) => !selectedPosts.includes(index)
//     );
//     setJobPosts(updatedPosts);
//     setSelectedPosts([]);
//     setToggleMode(false);
//     localStorage.setItem("formData", JSON.stringify(updatedPosts)); // Update local storage
//   };

//   return (
//     <>
//       <Box sx={{ p: 3, minHeight: "auto" }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Job Listings
//         </Typography>
//         {jobPosts.length === 0 ? (
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             textAlign="center"
//             p={3}
//           >
//             {/* Adding an animated GIF */}
//             <img
//               src={Gif2}
//               alt="Waving Girl"
//               style={{ width: '150px', marginBottom: '1rem', borderRadius: '10px' }}
//             />
//             <Typography variant="h6" color="textSecondary" mb={3}>
//               Hello, {employee.fullName}! There are currently no job available. <br />
//             </Typography>
//           </Box>
//         ) : (
//           <>
//           <Grid container spacing={2}>
//             {
//               jobPosts.map((data, index) => (
//                   <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
//                     <Card
//                       sx={{
//                         borderRadius: 2,
//                         boxShadow: 2,
//                         p: 3,
//                         position: "relative",
//                         backgroundColor: "#fff",
//                       }}
//                     >
//                       {toggleMode && (
//                         <Checkbox
//                           checked={selectedPosts.includes(index)}
//                           onChange={() => handleSelectPost(index)}
//                           sx={{ position: "absolute", top: 8, left: 8 }}
//                         />
//                       )}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           mb: 2,
//                         }}
//                       >
//                         <Typography variant="h6">{data.jobTitle}</Typography>
//                         <Dropdown>
//                           <MenuButton sx={{ border: "none" }}>
//                             <MoreVertOutlinedIcon />
//                           </MenuButton>
//                           <Menu>
//                             {contentItems.map((item, index) => (
//                               <MenuItem key={index}>
//                                 <ListItemIcon>{item.Icon}</ListItemIcon>
//                                 <ListItemText primary={item.title} />
//                               </MenuItem>
//                             ))}
//                           </Menu>
//                         </Dropdown>
//                       </Box>
//                       <Typography variant="subtitle2" color="textSecondary">
//                         {data.company} - {data.jobLocation}
//                       </Typography>
//                       <Typography variant="subtitle2" color="textSecondary">
//                         <strong>Number of Positions:</strong> {data.positions}
//                       </Typography>
//                       <Typography variant="subtitle2" color="textSecondary">
//                         {data.jobType} • ₹{data.salary}
//                       </Typography>
//                       <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
//                         <strong>Benefits:</strong>{" "}
//                         {data.benefits.length > 0
//                           ? data.benefits.join(", ")
//                           : "None"}
//                       </Typography>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           mt: 2,
//                         }}
//                       >
//                         <Typography variant="caption" color="textSecondary">
//                           Posted on: {data.postDate || "N/A"}
//                         </Typography>
//                         <IconButton>
//                           <FavoriteBorderOutlinedIcon />
//                         </IconButton>
//                       </Box>
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         sx={{ mt: 2, background: "green" }}
//                         onClick={() =>{ navigate("/employerdashboard/jobpostdetails");
//                         console.log(`${data._id}`)}
//                         }
//                       >
//                         View Details
//                       </Button>
//                     </Card>
//                   </Grid>             
//               ))
//             }
//             </Grid>
//           </>
//         )}
//       </Box>
//     </>
//   );
// };

// export default MyJobs;
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
// import EditIcon from "@mui/icons-material/Edit";
// import PeopleIcon from "@mui/icons-material/People";
// import { FastRewind } from "@mui/icons-material";

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
        setLoading(true);
        const response = await fetch("https://jobhub-project-official-1.onrender.com/api/v1/admins/alljobs");
        
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
        <Grid sx={{ display: 'flex', gap: "10px", alignItems: "center"}}>
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
                      : "You haven't applied to any jobs yet"}
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