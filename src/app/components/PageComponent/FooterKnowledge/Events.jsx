import React, { useRef } from "react";
import PageComponent from "../PageComponent";
// import HeaderPage from "../../GlobalComponents/HeaderPage/HeaderPage";
// import EventBannerImage from "../../../assets/Images/bgImages/bgImage.png";
// import EventsHeaderImage from "../../../assets/Images/eventsImages/eventsHeaderImage.svg";
import EventImage1 from "../../../assets/Images/eventsImages/eventImage1.png";
import EventImage2 from "../../../assets/Images/eventsImages/eventImage2.png";
import EventImage3 from "../../../assets/Images/eventsImages/eventImage3.png";
// import Grid2 from "@mui/material/Unstable_Grid2"; // Import Grid2
import { Box, Typography, Grid2 } from "@mui/material";
import { Grid } from "@mui/joy";

const Event = () => {

  const targetSectionRef = useRef(null);

  const scrollToSection = () => {
    targetSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageComponent>
      {/* <HeaderPage
        backgroundImage={EventBannerImage}
        headerText={
          <>
            <span style={{ fontSize: "50px" }}>
              Discover Career-Building{" "}
              <span style={{ color: "green" }}>Events</span>
            </span>
          </>
        }
        subText="Find job fairs, webinars, and networking opportunities tailored for you"
        buttonTitle1="Scroll Down"
        onButtonClick1={scrollToSection}
        imgSrc={EventsHeaderImage}
      /> */}
      <Box py={{ xs: 4, sm: 6, md: 8 }} px={{ xs: 2, sm: 4 }}>
        <Grid container spacing={6} justifyContent="center">
          {/* Event 1 */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                mb: 2,
              }}
            >
              CORPORATE <span style={{ color: "green" }}>EVENT</span>
            </Typography>
            <Box
              component="img"
              src={EventImage1}
              alt="Corporate Event"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: "100%",
              }}
            />
          </Grid>

          {/* Event 2 */}
          <Grid item xs={12} md={8}>
            <Box
              ref={targetSectionRef}
              component="img"
              src={EventImage2}
              alt="Workshop"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: "100%",
              }}
            />
          </Grid>

          {/* Event 3 */}
          <Grid item xs={12} md={8}>
            <Box
              component="img"
              src={EventImage3}
              alt="Group Workshop"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: "100%",
              }}
            />
            <Typography
              variant="h4"
              textAlign="center"
              mt={3}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
              }}
            >
              GROUP <span style={{ color: "green" }}>WORKSHOPS</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </PageComponent>
  );
};

export default Event;