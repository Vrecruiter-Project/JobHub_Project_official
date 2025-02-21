import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GroupIcon from "@mui/icons-material/Group";
import { myJobs } from "../../../../../../service/operations/employeeApi";

const FullJobDetails = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const employee = JSON.parse(localStorage.getItem("employee"));
  const [jobPosts, setJobPosts] = useState(null);

  const fetchData = async () => {
    try {
      const response = await myJobs(token);
      setJobPosts(response);
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!jobPosts) {
    return (
      <Typography
        variant="h6"
        align="center"
        sx={{ marginTop: "20px", color: "gray" }}
      >
        No Job Details Available. Please fill out the form first.
      </Typography>
    );
  }

  const { fullName, email, companyName, gender, jobs, mobileNumber, role } = jobPosts;

  return (
    <Box
      sx={{
        marginTop: "40px",
        paddingBottom: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "95vw",
          boxShadow: "0 4px 10px rgba(53,180,81,0.5)",
          borderRadius: "12px",
          padding: "20px",
          background: "linear-gradient(135deg, rgba(53,180,81,0.1), #ffffff)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#3db435",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            Job Post Details
          </Typography>

          <Box sx={{ marginBottom: "30px" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <WorkOutlineIcon sx={{ color: "#3db435", mr: 1 }} />
              <Typography
                variant="h5"
                sx={{ color: "#3db435", fontWeight: "bold" }}
              >
                Personal Details
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: "10px" }} />
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Full Name:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.fullName || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Email:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.email || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Company Name:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.companyName || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Gender:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.gender || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Mobile Number:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.mobileNumber || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Role:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.role || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <GroupIcon sx={{ color: "#3db435", mr: 1 }} />
              <Typography
                variant="h5"
                sx={{ color: "#3db435", fontWeight: "bold" }}
              >
                Jobs
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: "10px" }} />
            <Box>
              {jobs && jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: "5px" }}
                  >
                    Job ID: {job}
                  </Typography>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No jobs available.
                </Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FullJobDetails;
