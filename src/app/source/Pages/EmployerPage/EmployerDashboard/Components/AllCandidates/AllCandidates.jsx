import  { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { Typography, IconButton,  } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {
  myStudents,
  // selectingStudents,
} from "../../../../../../service/operations/employeeApi";
import { useNavigate, useParams } from "react-router-dom";

export default function AllCandidates() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudentsId, setSelectedStudentsId] = useState([]);
  const navigate = useNavigate();
  const { jobId } = useParams(); // Get jobId from URL params

  // Get job IDs from localStorage
  const employeeData = JSON.parse(localStorage.getItem('employee'));
  const employeeJobIds = employeeData?.jobs || [];

  // Fetch data from MongoDB
  const fetchStudents = async () => {
    try {
      const response = await myStudents(token);
      if (response.students && response.students.length > 0) {
        // Filter students who have applied for any of the employee's jobs or the specific job from URL
        const targetJobIds = jobId ? [jobId] : employeeJobIds;
        
        const filteredStudents = response.students.flatMap(studentGroup => 
          studentGroup.filter(student => 
            student.jobs && student.jobs.some(job => targetJobIds.includes(job))
          )
        );

        const formattedData = filteredStudents.map((item) => ({
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

        setGridData(formattedData);
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
  }, [jobId, employeeJobIds]); // Add jobId and employeeJobIds to dependency array

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
    // { 
    //   field: "file", 
    //   headerName: "Resume", 
    //   flex: 1, 
    //   width: "250px",
    //   renderCell: (params) => (
    //     <a 
    //       href={`https://jobhub-project-official-1.onrender.com/uploads/${params.value}`} 
    //       target="_blank" 
    //       rel="noopener noreferrer"
    //     >
    //       View Resume
    //     </a>
    //   ),
    // },
  ];

  // const selectedStudentsHandler = async () => {
  //   if (selectedStudentsId.length === 0) {
  //     toast.error("Please select at least one student");
  //   } else {
  //     const selected = gridData
  //       .filter((student) => selectedStudentsId.includes(student.id))
  //       .map((student) => ({ 
  //         studentId: student.id, 
  //         jobId: jobId || employeeJobIds[0] // Use the jobId from URL or first job from employee's jobs
  //       }));
  //     await selectingStudents(token, selected, navigate);
  //   }
  // };

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
      <IconButton sx={{ mb: 1 }} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <GridToolbar />
      <div>
        {/* <Button
          variant="text"
          color="success"
          onClick={selectedStudentsHandler}
        >
          Select Students
        </Button> */}
        <IconButton onClick={handleFullScreenToggle}>
          <FullscreenIcon />
        </IconButton>
      </div>
    </GridToolbarContainer>
  );

  
  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <DataGrid
        slots={{ toolbar: CustomToolbar }}
        rowHeight={40}
        checkboxSelection
        onRowSelectionModelChange={(e) => setSelectedStudentsId(e)}
        rows={gridData}
        columns={columns}
        pageSize={5}
        loading={loading}
      />
    </Box>
  );
}