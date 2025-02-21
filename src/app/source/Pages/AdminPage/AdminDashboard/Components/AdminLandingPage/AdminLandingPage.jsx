import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import InsightsIcon from "@mui/icons-material/Insights";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useNavigate } from "react-router-dom";

const AdminLandingPage = () => {
  const navigate = useNavigate();
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const cardStyle = {
    background: "#ffffff",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    minHeight: "150px",
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #4caf50, #a5d6a7)",
        p: 4,
        color: "white",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Manage your system, view analytics, and perform administrative tasks.
        </Typography>
      </Box>

      {/* Content Grid */}
      <Grid container spacing={4}>
        {/* Employer Insights */}
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Card sx={cardStyle}>
              <InsightsIcon sx={{ fontSize: 50, color: "#4caf50" }} />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Employer Insights
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Analyze trends and performance metrics for registered
                  employers.
                </Typography>
                <Button variant="contained" size="small" color="success" onClick={() => navigate("/admin/employer-insights")}>
                  View Insights
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Job Listings */}
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Card sx={cardStyle}>
              <WorkIcon sx={{ fontSize: 50, color: "#4caf50" }} />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Job Listings
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Manage and analyze job opportunities posted on the platform.
                </Typography>
                <Button variant="contained" size="small" color="success" onClick={() => navigate("/admin/job-listings")}>
                  View Listings
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Shortlisted Candidates */}
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Card sx={cardStyle}>
              <PeopleAltIcon sx={{ fontSize: 50, color: "#4caf50" }} />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Shortlisted Candidates
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Review candidates shortlisted by employers for job roles.
                </Typography>
                <Button variant="contained" size="small" color="success" onClick={() => navigate("/admin/shortlisted-talent")}>
                  View Candidates
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Welcome Section */}
        <Grid item size={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <Card
              sx={{
                background: "#ffffff",
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "15px",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Welcome to the Admin Dashboard
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Here you can access all administrative features to manage the
                system effectively. Use the cards above to explore specific
                sections.
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                For support or assistance, contact the technical team at
                <strong> support@jobhub.in</strong>.
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminLandingPage;
