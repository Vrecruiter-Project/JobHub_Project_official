import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation, useNavigate } from "react-router-dom";
import CandidateFullJobDetails from "./CandidateFullJobDetails";
import { allJobs } from "../../../../../service/operations/studentApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import jobimg from "../../../../../assets/Images/job-.png";


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CandidateJobPostCard = () => {

  const query = useQuery();
  const searchParam = query.get("search") || ""; // Get the search parameter from the URL
  const applyNowParam = query.get("apllyingto") || ""; // Get the apply now parameter from the URL
  const experienceParam = query.get("experience") || ""; // Get the experience parameter from the URL
  const cityParam = query.get("city") || ""; // Get the city parameter from the URL
  const navigate = useNavigate();
  const [jobsData, setJobsData] = useState([]);
  const [isViewJobDetails, setIsViewJobDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(applyNowParam || searchParam);
  const [workModeFilter, setWorkModeFilter] = useState(""); // New state for work mode filter
  const [locationFilter, setLocationFilter] = useState(cityParam); // New state for location filter
  const [salaryFilter, setSalaryFilter] = useState(""); // New state for salary filter
  const [experienceFilter, setExperienceFilter] = useState(experienceParam); // New state for experience filter
  
  
  

  const fetchAllJobs = async () => {
    setIsLoading(true);
    const response = await allJobs();
   
      setJobsData(response.reverse());
      setIsLoading(false);
    
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleViewDetails = (id) => {
    setIsViewJobDetails(id);
  };

  const handleApplyNow = (id) => {
    JSON.stringify(localStorage.setItem("jobId", id));
    navigate("/candidatedashboard/registration");
  };

  const filteredJobs = jobsData.filter((job) => {
    // Search by text query (job title or company name)
    const matchesSearchQuery = 
      searchQuery === "" ||
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by work mode
    const matchesWorkMode = 
      workModeFilter === "" || 
      job.workType.toLowerCase() === workModeFilter.toLowerCase();
    
    // Filter by location
    const matchesLocation = 
      locationFilter === "" ||
      job.jobLocation.toLowerCase().includes(locationFilter.toLowerCase());
    
    // Filter by salary (you'll need to implement proper salary range comparison)
    const matchesSalary = 
      salaryFilter === "" ||
      (() => {
        // Implement your salary range comparison logic here
        // This is just a placeholder - adjust based on your salary data structure
        if (salaryFilter === "0-10k") return job.salary <= 10000;
        if (salaryFilter === "30k-70k") return job.salary >= 30000 && job.salary <= 70000;
        // Add other salary ranges as needed
        return true;
      })();
    
    // Filter by experience
    const matchesExperience = 
      experienceFilter === "" ||
      job.experience.toLowerCase().includes(experienceFilter.toLowerCase());
    
    return matchesSearchQuery && matchesWorkMode && matchesLocation && matchesSalary && matchesExperience;
  });

  return (
    <Box
      sx={{
        py: 1,
      }}
    >

      <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-around',
    alignItems: { xs: 'stretch', md: 'center' },
    gap: 2,
    p: 2,
  }}
>
  <TextField
    size="small"
    label="Search Jobs"
    sx={{
      mx: { xs: 0, md: 2 },
      width: { xs: '100%', md: '47%' },
    }}
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      mt: { xs: 1, md: 0 },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      <TextField
        select
        label="Work Mode"
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '48%', md: '26%' },
          backgroundColor: "#f1f1f1",
        }}
        value={workModeFilter}
        onChange={(e) => setWorkModeFilter(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="On-site">On Site</MenuItem>
        <MenuItem value="Hybrid">Hybrid</MenuItem>
      </TextField>

      <TextField
        select
        label="Location"
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '48%', md: '23%' },
          backgroundColor: "#f1f1f1",
        }}
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Chandigarh">Chandigarh</MenuItem>
        <MenuItem value="Zirkpur">Zirkpur</MenuItem>
        <MenuItem value="Mohali">Mohali</MenuItem>
        <MenuItem value="Panchkula">Panchkula</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
      </TextField>

      <TextField
        select
        label="Salary"
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '48%', md: '19%' },
          backgroundColor: "#f1f1f1",
        }}
        value={salaryFilter}
        onChange={(e) => setSalaryFilter(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="0-10k">0-10k</MenuItem>
        <MenuItem value="30k-70k">30k-70k</MenuItem>
        <MenuItem value="70k-100k">70k-100K</MenuItem>
        <MenuItem value="100k+">100K+</MenuItem>
      </TextField>

      <TextField
        select
        label="Experience"
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '48%', md: '26%' },
          backgroundColor: "#f1f1f1",
        }}
        value={experienceFilter}
        onChange={(e) => setExperienceFilter(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Fresher">Fresher</MenuItem>
        <MenuItem value="1-2 years">1-2 years</MenuItem>
        <MenuItem value="3-5 years">3-5 years</MenuItem>
        <MenuItem value="5+ years">5+ years</MenuItem>
      </TextField>
    </Box>
  </Box>
</Box>


      
      <Grid container spacing={2} sx={{ mx: 2 }}>
        {/* Left Grid: Job Listings */}
        <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Card
            sx={{
              background: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              px: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                my: 3,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Available Jobs
            </Typography>
            <Grid
              container
              sx={{
                height: "calc(100vh - 64px)",
                overflowY: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                mb: 2,
              }}
            >
              {isLoading ? (
                Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Grid key={index} item size={12}>
                      <Card
                        sx={{
                          padding: 3,
                          borderRadius: 2,
                          boxShadow: 3,
                          backgroundColor: "#fff",
                          mt: 2,
                          mb: 2,
                          border: "0.1px solid gray",
                        }}
                      >
                        <Skeleton height={30} width="60%" />
                        <Skeleton
                          height={20}
                          width="40%"
                          style={{ margin: "10px 0" }}
                        />
                        <Skeleton height={20} width="80%" />
                        <Skeleton
                          height={20}
                          width="50%"
                          style={{ marginTop: 10 }}
                        />
                        <Skeleton
                          height={40}
                          width="100%"
                          style={{ marginTop: 20 }}
                        />
                      </Card>
                    </Grid>
                  ))
              ) : filteredJobs.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                  }}
                >
                  <div
                    style={{
                      fontSize: "34px",
                      fontFamily: "arial",
                      height: "20vh",
                      display: "flex",
                      flexDirection: "column-reverse",
                    }}
                  >
                    Search Not Found
                  </div>
                </div>
              ) : (
                filteredJobs.map((data) => (
                  <Grid key={data.id} item size={12}>
                    <Card
                      sx={{
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "#fff",
                        mt: 2,
                        mb: 2,
                        border: "0.1px solid gray",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          {data.jobTitle} - {data.jobLocation}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1,
                            color: "#666",
                          }}
                        >
                          {data.companyName}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            mb: 2,
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {data.salary} a month | {data.jobType} |{" "}
                          {data.workType}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          borderRadius: 1,
                          display: "flex",
                          gap: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        {data.benefits.map((benefit, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            sx={{
                              color: "#555",
                              padding: "4px ",
                              backgroundColor: "#f1f1f1",
                              borderRadius: 1,
                            }}
                          >
                            {benefit}
                          </Typography>
                        ))}
                      </Box>
                      <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: {xs: "10px", md: "12px"},
                            backgroundColor: "green",
                            color: "white",
                            mr: 2,
                            "&:hover": {
                              backgroundColor: "#004d40",
                            },
                          }}
                          onClick={() => handleViewDetails(data._id)}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: {xs: "10px", md: "12px"},
                            backgroundColor: "green",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "greenYellow",
                            },
                          }}
                          onClick={() => handleApplyNow(data._id)}
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>
          </Card>
        </Grid>
        {/* Right Grid: Dynamic Content */}

        <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} >
          <Card
            sx={{
              background: "white",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  my: 3,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Job Details
              </Typography>
            </Box>
            {!isViewJobDetails ? (
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  height: "calc(100vh - 64px)",

                  mb: 2,
                }}
              >
                <img
                  src={jobimg}
                  alt="job"
                  style={{ width: "70%", objectFit: "contain" }}
                />
              </Box>
            ) : (
                <CandidateFullJobDetails
                jobId={isViewJobDetails}
                jobsData={jobsData}
              />
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateJobPostCard;
