import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import JobProcesBackgroundImage from "../../../assets/Images/AboutPage/proceesBackground.png";
import AOS from "aos";
import "aos/dist/aos.css";

const JobProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${JobProcesBackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        paddingTop: "40px",
      }}
    >
      <Timeline position="alternate">
        {/* Timeline Item 1 */}
        <TimelineItem data-aos="zoom-in">
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h5" color="text.secondary">
              Account Manager Assigned
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <LocationOnIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} />
        </TimelineItem>

        {/* Timeline Item 2 */}
        <TimelineItem data-aos="zoom-in">
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h5" color="text.secondary">
              Candidates Lined Up For Interview
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <GroupsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} />
        </TimelineItem>

        {/* Timeline Item 3 */}
        <TimelineItem data-aos="zoom-in">
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h5" color="text.secondary">
              Candidates Selected
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <PersonIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} />
        </TimelineItem>

        {/* Timeline Item 4 */}
        <TimelineItem data-aos="zoom-in">
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h5" color="text.secondary">
              Offer Letter Handed By ConsultaHinos
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <ArticleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} />
        </TimelineItem>

        {/* Timeline Item 5 */}
        <TimelineItem data-aos="zoom-in">
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h5" color="text.secondary">
              Checks On DOJ And Background
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <CheckIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} />
        </TimelineItem>

        {/* Timeline Item 6 */}
        <TimelineItem data-aos="zoom-in">
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h5" color="text.secondary">
              Collaborative Induction & Compliance
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <PersonIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} />
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default JobProcess;
