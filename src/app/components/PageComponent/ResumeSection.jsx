
import { Box, Grid2, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import GlobalSwiper from '../GlobalComponents/GlobalSwiper/GlobalSwiper';
import ResumeBg from '../../assets/Images/bgImages/PartnersBg.png';
import Resume1 from "../../assets/Images/ResumeImages/Resume1.png";
import Resume2 from "../../assets/Images/ResumeImages/Resume2.png";
import Resume3 from "../../assets/Images/ResumeImages/Resume3.png";
import Resume4 from "../../assets/Images/ResumeImages/Resume4.png";
import Resume5 from "../../assets/Images/ResumeImages/Resume5.png";
import Resume6 from "../../assets/Images/ResumeImages/Resume6.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ResumeSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const resumeItems = [
    { image: Resume1 },
    { image: Resume2 },
    { image: Resume3 },
    { image: Resume4 },
    { image: Resume5 },
    { image: Resume6 },
  ];

  return (
    <>
      <Box id="resumeSwiper" sx={{ pt: { xs: 14, md: 10 }, width: '80%', mx: 'auto' }}>
        <Grid2
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb: { xs: 4 },
          }}
        >
          <Grid2 item xs={12}>
            <Typography
              data-aos="fade-up"
              variant="h3"
              component="h2"
              align="center"
              sx={{
                fontSize: {
                  xs: "35px",
                  md: "45px",
                },
                backgroundImage: `url(${ResumeBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Build <span style={{ color: "green" }}>Your Resume</span> In Two Minutes
            </Typography>
          </Grid2>
        </Grid2>

        <Box data-aos="zoom-in">
          <GlobalSwiper
            data-aos="fade-up"
            content={resumeItems.map((item, index) => ({
              ...item,

            }))}
            sx={{
              width: { xs: "300px", md: "250px" },
              height: { xs: "380px", md: "360px" },
            }}
            addImg
          />
        </Box>
      </Box>
      
    </>
  );
};

export default ResumeSection;
