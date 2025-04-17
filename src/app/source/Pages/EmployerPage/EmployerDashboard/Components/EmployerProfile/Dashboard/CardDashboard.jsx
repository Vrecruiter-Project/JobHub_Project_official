import { BusinessCenter, Delete, Group, InfoOutlined, Task } from "@mui/icons-material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { myStudents } from "../../../../../../../service/operations/employeeApi";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, useTheme, Button, Dialog, DialogContent, TextField, Checkbox, DialogTitle, Select, FormControl, InputLabel, MenuItem, ListItemText, } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Logo from "/log.svg";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmImage from "../../../../../../../assets/Images/EmployerDashboardAsset/employer.png";
import { BASE_URL } from "../../../../../../../service/apis";
import { styled } from '@mui/material/styles'; // theme.background.paper
// Create custom dark theme
import renderCategories from './CustomCategoary'
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));



const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Pink
    },
    background: {
      default: "#121212", // Dark background
      paper: "#fbecec", // Slightly lighter for cards
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#b3b3b3", // Light gray
    },
    divider: "#333333", // Dark divider
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // TODO: Add any specific styles for the Card component here
        },
      },
    },
  },
});


const Cards = () => {
  const theme = useTheme();
  const token = JSON.parse(localStorage.getItem("token"));
  const [jobsCount, setJobsCount] = useState([]);
  const employeeData = JSON.parse(localStorage.getItem("employee"));
  const employeeJobIds = useMemo(
    () => employeeData?.jobs || [],
    [employeeData]
  );
  const NumberOfJobs = JSON.parse(localStorage.getItem("employee"));
  const [getsjobs, setGetsJobs] = useState([]);
  const { jobId } = useParams();
  const jobsLength = NumberOfJobs.jobs;

  // select
  const [selectedGamers, setSelectedGamers] = useState([]);

  // code to add task by employor
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('employerTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('employerTasks', JSON.stringify(tasks));
  }, [tasks]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    category: [],
    highPriority: false
  });
  // function to open dialog box
  const openDialog = () => {
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  const handleTitleChange = (e) => {
    setNewTask({ ...newTask, title: e.target.value })
  };

  // handling the employer task operation
  const handleDescriptionChange = (e) => {
    setNewTask({ ...newTask, description: e.target.value })
  };


  const handleDateChange = (e) => {
    setNewTask({ ...newTask, date: e.target.value })
  };

  const handleTimeChange = (e) => {
    setNewTask({ ...newTask, time: e.target.value })
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setNewTask({ ...newTask, category: typeof value === 'string' ? value.split(',') : value });
  };

  const handlePriorityChange = (e) => {
    setNewTask({ ...newTask, highPriority: e.target.checked })
  };

  const handleSaveTask = () => {
    if (newTask.title.trim() === '') return;
    if (newTask.description.trim() === '') return;
    if (newTask.date.trim() === '') return
    if (newTask.time.trim() === '') return
    if (newTask.category === '') return
    const updatedTasks = [...tasks, {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      date: newTask.date,
      time: newTask.time,
      category: newTask.category,
      highPriority: newTask.highPriority

    }];

    setTasks(updatedTasks);
    // localStorage will be updated automatically by the useEffect
    setNewTask({ title: '', description: '', date: '', time: '', category: '', highPriority: false });
    closeDialog();
  };

  // const getCandidateNumber = useCallback(async () => {
  //   const response = await myStudents(token);
  //   if (response.students && response.students.length > 0) {
  //     const targetJobIds = jobId ? [jobId] : employeeJobIds;
  //     const filteredStudents = response.students.flatMap((studentGroup) =>
  //       studentGroup.filter(
  //         (student) =>
  //           student.jobs &&
  //           student.jobs.some((job) => targetJobIds.includes(job))
  //       )
  //     );
  //     setJobsCount(filteredStudents);

  //   }
  // }, [token, jobId, employeeJobIds]);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const response = await fetch(
  //       `${BASE_URL}/admins/alljobs `,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": import.meta.env.VITE_API_SECRET_KEY,
  //         },
  //       }
  //     )
  //     const data = await response.json();
  //     const extracted = data.jobs;
  //     const filteredJobs = extracted.filter(
  //       (job) => job.employeeId === employeeData._id
  //     );
  //     setGetsJobs(filteredJobs);
  //   };

  //   getCandidateNumber();
  //   getJobs();
  // }, [employeeData._id, jobId, employeeJobIds, token, getCandidateNumber]);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const jobs = await allJobs(token);
  //     const filteredJobs = jobs.filter(
  //       (job) => job.employeeId === employeeData._id
  //     );
  //     setGetsJobs(filteredJobs);
  //   };

  //   getCandidateNumber(); // assuming this is defined elsewhere
  //   if (employeeData._id) getJobs();
  // }, [employeeData._id, jobId, employeeJobIds, token, getCandidateNumber]);



  const getCandidateNumber = useCallback(async () => {
    try {
      const response = await myStudents(token);
      if (response?.students?.length > 0) {
        const targetJobIds = jobId ? [jobId] : employeeJobIds;

        const filteredStudents = response.students.flatMap((studentGroup) =>
          studentGroup.filter(
            (student) =>
              student.jobs &&
              student.jobs.some((job) => targetJobIds.includes(job))
          )
        );

        setJobsCount(filteredStudents);
      }
    } catch (error) {
      console.error("Error fetching candidate numbers:", error);
    }
  }, [token, jobId, employeeJobIds]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/admins/alljobs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_API_SECRET_KEY,
          },
        });

        const data = await response.json();
        const filteredJobs = data.jobs?.filter(
          (job) => job.employeeId === employeeData._id
        );

        setGetsJobs(filteredJobs || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    getCandidateNumber();
    getJobs();
  }, [employeeData._id, jobId, employeeJobIds, token, getCandidateNumber]);


  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ height: '100vh', overflowY: 'auto' }}>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 4,
            backgroundColor: theme.palette.background.default,
          }}
        >

          {/* Jobs Card */}
          <Card
            sx={{
              flex: "1 1 300px",
              p: 3,
              borderRadius: 4,
              boxShadow: theme.shadows[4],
              background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows[8],
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.getContrastText(
                    theme.palette.primary.main
                  ),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BusinessCenter fontSize="medium" />
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Jobs
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  {jobsLength.length}
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* Candidates Card */}
          <Card
            sx={{
              flex: "1 1 300px",
              p: 3,
              borderRadius: 4,
              boxShadow: theme.shadows[4],
              background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.light} 100%)`,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows[8],
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.getContrastText(
                    theme.palette.secondary.main
                  ),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Group fontSize="medium" />
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Candidates
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  {jobsCount.length}
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>

        <Card
          sx={{
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 3,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              width: { xs: "100%", md: "40%" },
              height: "60vh",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                padding: "10px 20px",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              {/* Welcome {employeeData.firstName} {employeeData.lastName} */}
              WELCOME{" "}
              <span
                style={{ borderBottom: `1px solid  ${theme.palette.divider}` }}
              >
                {employeeData.fullName}
              </span>
            </Typography>
            {/* <Box sx={{ padding: "10px" }}>
            <LineChart theme={theme} />
          </Box> */}

            <Box
              sx={{
                padding: "20px",
                color: theme.palette.text.primary,
                height: "53vh",
                position: "relative",
                overflow: "hidden", // This will hide any parts of the image that overflow the box
                backgroundColor: theme.palette.background.paper,
              }}
            >

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2%",
                  backgroundColor: "#89c769",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative", // This creates a new stacking context
                  // This ensures content stays above the blue rectangle
                }}
              >
                <img style={{ width: "90px", marginLeft: '-20px' }} src={Logo} alt="job hub image" />
                <Typography sx={{ fontSize: { xs: "10px", sm: "12px", md: "16px" }, fontWeight: "600", color: theme.palette.text.secondary }}>
                  Thanks for using our service{" "}
                </Typography>
                <span
                  style={{
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    width: "11%",
                    marginTop: "20px",
                  }}
                >
                  {/* be more{" "} */}
                </span>
                <Typography
                  sx={{
                    fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
                    lineHeight: "1",
                    width: "25%",
                    fontFamily: "monospace",
                    fontWeight: "900",
                  }}
                >
                  Hire
                  <br />
                  Now!
                </Typography>{" "}
              </div>

              {/* Image positioned behind the blue rectangle */}
              <img
                style={{
                  width: "50%",
                  position: "absolute",
                  right: "30px",
                  bottom: "-20px",
                  zIndex: 0,
                }}
                src={EmImage}
                alt=""
              />
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: "10px",
              width: { xs: "100%", md: "30%" },
              maxHeight: "calc(100vh - 289px)",
              display: "flex",
              flexDirection: "column",
              position: "sticky",
              alignSelf: "flex-start",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                borderBottom: `1px solid ${theme.palette.divider}`,
                padding: "10px 20px",
                position: "sticky",
                top: 0,
                backgroundColor: theme.palette.background.paper,
                zIndex: 1,
                color: theme.palette.text.primary,
              }}
            >
              Posted Jobs
            </Typography>
            <Box
              sx={{
                overflowY: "auto",
                padding: "0 0 10px 0",
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: theme.palette.action.hover,
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: theme.palette.text.secondary,
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: theme.palette.text.primary,
                },
              }}
            >
              {getsjobs.map((job, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",

                    justifyContent: "space-between",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,

                    },
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <img
                      style={{
                        width: "25px",
                        height: "auto",
                        borderRadius: "50px",
                        objectFit: "cover",
                      }}
                      src={employeeData.avatar}
                      alt="Company"
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{ color: theme.palette.text.primary }}
                      >
                        {job.jobTitle}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {`${job.jobType}, ${job.jobLocation}`}
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <MoreHorizIcon sx={{ color: "text.secondary" }} />

                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      {job.students && job.students.length > 0 ? (
                        <>
                          <AvatarGroup
                            max={3}
                            total={job.students.length > 3 ? job.students.length : undefined}
                            renderSurplus={(surplus) => <span style={{ marginLeft: '6px' }}>{surplus.toString()[0]}<span style={{ fontSize: "7px" }}>+</span></span>}
                          >

                            {job.students.slice(0, 3).map((student) => (
                              <Avatar
                                key={student._id}
                                alt={`${student.firstName} ${student.lastName}`}
                                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                sx={{ width: '20px', height: '20px' }}
                              />


                            ))}

                          </AvatarGroup>

                          <Tooltip
                            placement="top"
                            title={
                              <React.Fragment>
                                <Typography color="inherit">Applicants for <u className="text-green-600">{job.jobTitle}</u></Typography>
                                {job.students.slice(0, 3).map((student) => (
                                  <div key={student._id} className="inline-flex mx-0.5 py-1 italic" style={{ fontSize: '12px' }}>
                                    <span>
                                      {student.firstName}
                                    </span>
                                  </div>
                                ))}
                                <span>and more showed interest in this Job</span>
                              </React.Fragment>
                            }
                          >
                            <InfoOutlined
                              sx={{ color: "text.secondary", width: '15px', cursor: 'pointer' }}
                            />
                          </Tooltip>
                        </>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          No applicants
                        </Typography>
                      )}
                    </Box>

                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              width: { xs: "100%", md: "30%" },
              maxHeight: "calc(100vh - 245px)",
              display: "flex",
              flexDirection: "column",
              position: "sticky",
              alignSelf: "flex-start",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                borderBottom: `1px solid ${theme.palette.divider}`,
                padding: "10px 20px",
                position: "sticky",
                top: 0,
                backgroundColor: theme.palette.background.paper,
                zIndex: 1,
                color: theme.palette.text.primary,
              }}
            >
              <div>
                <Task fontSize="small" sx={{ marginRight: 1 }} /> My Task
              </div>

              <Button
                sx={{
                  backgroundColor: "#89c769",
                  color: theme.palette.text.primary,
                }}
                onClick={openDialog}
              >
                Add Task
              </Button>
            </Typography>
            <Dialog open={dialogOpen} onClose={closeDialog}>
              <DialogContent sx={{ backgroundColor: theme.palette.background.paper, width: '500px', }}>
                <DialogTitle sx={{ color: theme.palette.text.primary, padding: "0 0 15px 0" }}>Create Task</DialogTitle>
                <Typography sx={{ color: theme.palette.text.primary }}>Title</Typography>
                <TextField
                  placeholder="Add title"
                  fullWidth
                  multiline
                  rows={1}
                  value={newTask.title}
                  onChange={handleTitleChange}
                  sx={{
                    marginBottom: 2,
                    '& .MuiInputBase-root': {
                      color: theme.palette.text.primary,
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.text.primary,
                      },
                    }
                  }}
                />
                <Typography sx={{ color: theme.palette.text.primary }}>Description</Typography>
                <TextField
                  placeholder="Add breif summary"
                  fullWidth
                  multiline
                  rows={4}
                  value={newTask.description}
                  onChange={handleDescriptionChange}
                  sx={{
                    marginBottom: 2,
                    '& .MuiInputBase-root': {
                      color: theme.palette.text.primary,
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.text.primary,
                      },
                    }
                  }}
                />
                <Box sx={{ display: 'flex', gap: "5px" }}>
                  <Box>
                    <TextField placeholder="Date" type="date" value={newTask.date} onChange={handleDateChange} sx={{
                      marginBottom: 2,
                      '& .MuiInputBase-root': {
                        color: theme.palette.text.primary,
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.text.secondary,
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.divider,
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.text.primary,
                        },
                      }
                    }} />
                  </Box>
                  <Box>
                    <TextField placeholder="Time" type="time" value={newTask.time} onChange={handleTimeChange} sx={{
                      marginBottom: 2,
                      '& .MuiInputBase-root': {
                        color: theme.palette.text.primary,
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.text.secondary,
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.divider,
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.text.primary,
                        },
                      }
                    }} />
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="Category-label" sx={{ color: theme.palette.text.primary }}>Category</InputLabel>
                      <Select

                        labelId="Category-label"
                        multiple
                        value={newTask.category || []} // this should be an array from your component state
                        onChange={handleCategoryChange}
                        label="Category"
                        sx={{
                          width: "175px",
                          marginBottom: 2,
                          color: "#333"
                        }}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              backgroundColor: theme.palette.background.paper,
                              color: theme.palette.text.primary,
                              boxShadow: theme.shadows[4],
                              borderRadius: 1,
                              borderColor: theme.palette.text.primary,

                            },
                          },
                        }}
                      >
                        {['Meeting', 'Interview', 'Hiring', 'Onboarding', 'Payroll', 'Management'].map((category) => (
                          <MenuItem key={category} value={category} >
                            {/* <Checkbox checked={selectedGamers.indexOf(game) > -1} /> */}
                            <ListItemText primary={category} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Checkbox
                    checked={newTask.highPriority}
                    onChange={handlePriorityChange}
                    sx={{
                      color: theme.palette.text.primary,
                      '&.Mui-checked': {
                        color: '#90c690',
                      },
                    }}
                  />
                  <Typography sx={{ color: theme.palette.text.primary }}>
                    High Priority
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    onClick={handleSaveTask}
                    sx={{
                      backgroundColor: "#89c769",
                      color: theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: "#7cb85c",
                      },
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
            <Box sx={{ padding: "10px", overflowY: "auto" }}>
              {tasks.map(task => (
                <div key={task.id} style={{ marginBottom: '16px', borderBottom: `1px solid ${theme.palette.divider}`, paddingBottom: '3px' }}>
                  <div>
                    <p className="capitalize" style={{ fontSize: "16px", color: theme.palette.text.primary }}>{task.title}</p>
                  </div>
                  <Typography className="capitalize" style={{ color: theme.palette.text.primary, fontSize: "10px" }}>
                    {task.description}
                  </Typography>
                  <div className="flex justify-between px-3 py-1">
                    <div>
                      <span style={{ fontSize: '10px', color: theme.palette.text.primary }}>{task.date}</span> <span style={{ fontSize: "12px", color: "#333" }}>|</span> <span style={{ fontSize: '10px', color: theme.palette.text.primary }}>{task.time}</span>
                    </div>
                    <div>
                      {renderCategories(task)}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      sx={{
                        backgroundColor: task.highPriority ? "rgb(234, 197, 195)" : "#90c690",
                        padding: "1px 5px 1px 5px ",
                        // fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
                        fontSize: { xs: "9px", sm: "11px", md: '13px' },
                        borderRadius: "5px",
                        marginTop: "5px",
                        color: task.highPriority ? "red" : "green",
                      }}
                    >
                      {task.highPriority ? "High Priority" : "Low Priority"}
                    </Typography>
                    <div>
                      <Delete
                        sx={{ color: theme.palette.text.primary, cursor: 'pointer' }}

                        onClick={() => {
                          setTasks(tasks.filter(t => t.id !== task.id));
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Cards;

