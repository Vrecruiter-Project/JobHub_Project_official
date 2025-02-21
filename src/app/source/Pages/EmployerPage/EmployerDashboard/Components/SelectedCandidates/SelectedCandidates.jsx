import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {
  deSelectingStudents,
  fetchSelectingStudentsData,
  myStudents,
} from "../../../../../../service/operations/employeeApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SelectedCandidates() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [gridData, setGridData] = useState([]); // State for rows
  const [loading, setLoading] = useState(true);
  const [selectedStudentsId, setSelectedStudentsId] = useState([]);
  const navigate = useNavigate();

  // Fetch data from MongoDB
  const fetchStudents = async () => {
    try {
      const response = await fetchSelectingStudentsData(token);
      if (response.students && response.students.length > 0) {
        response.students.map((data, index) => {
          const formattedData = data.map((item) => ({
            id: item._id,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            mobileNumber: item.mobileNumber,
            dob: item.dob,
            gender: item.gender,
            qualification: item.qualification,
            role: item.role,
            address: item.address,
            file: item.file,
            jobs: item.jobs,
          }));
          setGridData((data) => {
            const uniqueData = formattedData.filter(
              (newItem) => !data.some((prevItem) => prevItem.id === newItem.id)
            );
            return [...data, ...uniqueData];
          });
        });
      } else {
        return (
          <div>
            <p>No Data is here</p>
          </div>
        );
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Define columns
  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1, width: "250px" },
    { field: "lastName", headerName: "Last Name", flex: 1, width: "250px" },
    { field: "email", headerName: "Email Address", flex: 1, width: "250px" },
    { field: "mobileNumber", headerName: "Mobile", flex: 1, width: "250px" },
    { field: "dob", headerName: "D.O.B", flex: 1, width: "250px" },
    { field: "gender", headerName: "Gender", flex: 1, width: "250px" },
    {
      field: "qualification",
      headerName: "Qualification",
      flex: 1,
      width: "250px",
    },
    { field: "role", headerName: "Role", flex: 1, width: "250px" },
    { field: "address", headerName: "Address", flex: 1, width: "250px" },
    { field: "file", headerName: "File", flex: 1, width: "250px" },
    { field: "jobs", headerName: "Jobs", flex: 1, width: "250px" },
  ];

  const deSelectedStudentsHandler = async () => {
    if (selectedStudentsId.length === 0) {
      toast.error("Please select at least one student");
    } else {
      const selected = gridData
        .filter((student) => selectedStudentsId.includes(student.id))
        .map((student) => ({ studentId: student.id, jobId: student.jobs[0] }));
      await deSelectingStudents(token, selected, navigate);
    }
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation
          .lock("landscape")
          .catch((err) => console.error("Orientation lock failed:", err));
      }
    } else {
      document.exitFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation.unlock();
      }
    }
  };

  const CustomToolbar = () => (
    <GridToolbarContainer className="flex justify-between">
      <IconButton sx={{ mb: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <GridToolbar />
      <div>
        <Button
          variant="text"
          color="success"
          onClick={deSelectedStudentsHandler}
        >
          Un-Select Students
        </Button>
        <IconButton onClick={handleFullScreenToggle}>
          <FullscreenIcon />
        </IconButton>
      </div>
    </GridToolbarContainer>
  );
  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: "center",
          mt: 3,
          mb: 3,
        }}
      >
        Selected Candidates
      </Typography>
      <DataGrid
        slots={{ toolbar: CustomToolbar }}
        rowHeight={40}
        checkboxSelection
        RowSelectionOnClick
        onRowSelectionModelChange={(e) => setSelectedStudentsId(e)}
        rows={gridData} // Pass fetched rows
        columns={columns} // Pass defined columns
        pageSize={5}
        loading={loading} // Show loading spinner
      />
    </Box>
  );
}
