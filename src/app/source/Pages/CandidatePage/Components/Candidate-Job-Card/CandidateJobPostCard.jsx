
import React, { useEffect, useState } from "react";
import { Box, Container, Card, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import CandidateFullJobDetails from "./CandidateFullJobDetails";
import { allJobs } from "../../../../../service/operations/studentApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import jobimg from '../../../../../assets/Images/job-.png';

const CandidateJobPostCard = () => {
  const navigate = useNavigate();
  const [jobsData, setJobsData] = useState([]);
  const [isViewJobDetails, setIsViewJobDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllJobs = async () => {
    setIsLoading(true);
    const response = await allJobs();
    setTimeout(() => {
      setJobsData(response);
      setIsLoading(false);
    }, 3000);
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

  return (
    <Box
      sx={{
        py: 4,
      }}
    >
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
              {isLoading
                ? Array(5)
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
                        <Skeleton height={20} width="40%" style={{ margin: "10px 0" }} />
                        <Skeleton height={20} width="80%" />
                        <Skeleton height={20} width="50%" style={{ marginTop: 10 }} />
                        <Skeleton height={40} width="100%" style={{ marginTop: 20 }} />
                      </Card>
                    </Grid>
                  ))
                : jobsData.map((data) => (
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
                          {data.salary} a month | {data.jobType} | {data.workType}
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
                ))}
            </Grid>
          </Card>
        </Grid>
        {/* Right Grid: Dynamic Content */}


        <Grid
          item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Card
            sx={{
              background: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
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
              <CandidateFullJobDetails jobId={isViewJobDetails} />
            )}

          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateJobPostCard;

