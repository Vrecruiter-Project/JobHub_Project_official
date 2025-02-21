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
import PostCard from "./PostCard";
import Gif2 from "../../../../../../assets/Images/Gif2.gif"

const JobPostCard = () => {
  const employee = JSON.parse(localStorage.getItem("employee"))
  const [jobPosts, setJobPosts] = useState([]);
  const navigate = useNavigate();
  const [toggleMode, setToggleMode] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      try {
        setJobPosts(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing job posts from localStorage:", error);
      }
    }
  }, []);

  const contentItems = [
    { Icon: <ShareOutlinedIcon />, title: "Share" },
    { Icon: <SaveOutlinedIcon />, title: "Save" },
    { Icon: <DeleteOutlineOutlinedIcon />, title: "Delete" },
  ];

  const handleToggleDeleteMode = () => {
    setToggleMode((prev) => !prev);
    if (toggleMode) {
      // Clear selections if exiting delete mode
      setSelectedPosts([]);
    }
  };

  const handleSelectPost = (index) => {
    setSelectedPosts((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

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
      <PostCard onClick={handleToggleDeleteMode} />
      <Box sx={{ p: 3, minHeight: "auto" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Job Postings
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
              Hello, {employee.fullName}! There are currently no job postings available. <br />
              Don’t worry! You can add new job opportunities with just a click.
            </Typography>
          </Box>
        ) : (
          <>
            {toggleMode && (
              <Button
                variant="contained"
                color="error"
                sx={{ mb: 2 }}
                onClick={handleDeletePosts}
              >
                Confirm Delete
              </Button>
            )}
            <Grid container spacing={2}>
              {jobPosts.map((post, index) => (
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
                      <Typography variant="h6">{post.jobDetails.jobTitle}</Typography>
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
                      {post.jobDetails.company} - {post.jobDetails.jobLocation}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      <strong>Number of Positions:</strong> {post.jobDetails.positions}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {post.jobDetails.jobType} • ₹{post.jobDetails.salary}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                      <strong>Benefits:</strong>{" "}
                      {post.jobDetails.benefits.length > 0
                        ? post.jobDetails.benefits.join(", ")
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
                        Posted on: {post.jobDetails.postDate || "N/A"}
                      </Typography>
                      <IconButton>
                        <FavoriteBorderOutlinedIcon />
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2, background: "green" }}
                      onClick={() => navigate("/employerdashboard/jobpostdetails")}
                    >
                      View Details
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default JobPostCard;



