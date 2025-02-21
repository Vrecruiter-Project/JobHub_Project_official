import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Checkbox,
  Button,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Grid from "@mui/material/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useNavigate } from "react-router-dom";
import Gif2 from "../../../../../../assets/Images/Gif2.gif";
import { myJobs } from "../../../../../../service/operations/employeeApi";

const MyJobs = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const employee = JSON.parse(localStorage.getItem("employee"));
  const [jobPosts, setJobPosts] = useState([]);
  const navigate = useNavigate();
  const [toggleMode, setToggleMode] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);

  // TODO: style the data in your frontend
  const fetchData = async () => {
    const response = await myJobs(token);
    console.log(response);
    setJobPosts(response || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contentItems = [
    { Icon: <ShareOutlinedIcon />, title: "Share" },
    { Icon: <SaveOutlinedIcon />, title: "Save" },
    { Icon: <DeleteOutlineOutlinedIcon />, title: "Delete" },
  ];

  // const handleSelectPost = (index) => {
  //   setSelectedPosts((prevSelected) =>
  //     prevSelected.includes(index)
  //       ? prevSelected.filter((i) => i !== index)
  //       : [...prevSelected, index]
  //   );
  // };

  const handleDeletePosts = () => {
    const updatedPosts = jobPosts.filter(
      (_, index) => !selectedPosts.includes(index)
    );
    setJobPosts(updatedPosts);
    setSelectedPosts([]);
    setToggleMode(false);
    localStorage.setItem("formData", JSON.stringify(updatedPosts)); // Update local storage
  };

  return (
    <>
      <Box sx={{ p: 3, minHeight: "auto" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Job Listings
        </Typography>
        {jobPosts.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p={3}
          >
            {/* Adding an animated GIF */}
            <img
              src={Gif2}
              alt="Waving Girl"
              style={{ width: '150px', marginBottom: '1rem', borderRadius: '10px' }}
            />
            <Typography variant="h6" color="textSecondary" mb={3}>
              Hello, {employee.fullName}! There are currently no job available. <br />
            </Typography>
          </Box>
        ) : (
          <>
          <Grid container spacing={2}>
            {
              jobPosts.map((data, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card
                      sx={{
                        borderRadius: 2,
                        boxShadow: 2,
                        p: 3,
                        position: "relative",
                        backgroundColor: "#fff",
                      }}
                    >
                      {toggleMode && (
                        <Checkbox
                          checked={selectedPosts.includes(index)}
                          onChange={() => handleSelectPost(index)}
                          sx={{ position: "absolute", top: 8, left: 8 }}
                        />
                      )}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography variant="h6">{data.jobTitle}</Typography>
                        <Dropdown>
                          <MenuButton sx={{ border: "none" }}>
                            <MoreVertOutlinedIcon />
                          </MenuButton>
                          <Menu>
                            {contentItems.map((item, index) => (
                              <MenuItem key={index}>
                                <ListItemIcon>{item.Icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                              </MenuItem>
                            ))}
                          </Menu>
                        </Dropdown>
                      </Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        {data.company} - {data.jobLocation}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        <strong>Number of Positions:</strong> {data.positions}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {data.jobType} • ₹{data.salary}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                        <strong>Benefits:</strong>{" "}
                        {data.benefits.length > 0
                          ? data.benefits.join(", ")
                          : "None"}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        <Typography variant="caption" color="textSecondary">
                          Posted on: {data.postDate || "N/A"}
                        </Typography>
                        <IconButton>
                          <FavoriteBorderOutlinedIcon />
                        </IconButton>
                      </Box>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, background: "green" }}
                        onClick={() =>{ navigate("/employerdashboard/jobpostdetails");
                        console.log(`${data._id}`)}
                        }
                      >
                        View Details
                      </Button>
                    </Card>
                  </Grid>             
              ))
            }
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default MyJobs;



