import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';

const WebDevFirstDes = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); 
  }, []);

  return (
    <>
      <Box
        sx={{
          mt: 7,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: { xs: 'none', md: `url(${DataBg})` },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100px',
          backgroundSize: 'cover',
          alignItems: 'center',
          px: { xs: 2, md: 8 },
        }}
      >
        {/* Title Section */}
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ py: 2 }}
            data-aos="fade-up" 
          >
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '35px', md: '45px' },
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '40px',
                    backgroundImage: `url(${DescriptionBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    bottom: '-30px',
                    left: 0,
                    mb: 5,
                  },
                }}
              >
                Web Developer
              </Typography>
            </Grid>
          </Grid>

          {/* Content Section */}
          <Box>
            <Typography
              variant="h5"
              component="h2"
              data-aos="fade-right"
              sx={{
                fontSize: { xs: '14px', md: '20px' },
                textAlign: 'center',
                marginBottom: 1,
                px: 2,
              }}
            >
              A web developer is a professional responsible for building, maintaining, and improving websites and web applications. They use a variety of programming languages, tools, and frameworks to create the front-end (user-facing) and back-end (server-side) parts of a website. Depending on their specialization, a web developer may focus on one or both aspects of web development, or they may work as a full-stack developer, handling both front-end and back-end tasks.
            </Typography>

            <Typography
              variant="h3"
              component="h2"
              data-aos="fade-left" // Add AOS animation
              sx={{
                px: 2,
                fontWeight: '600',
                mt: 5,
                fontSize: { xs: '20px', md: '29px' },
                textAlign: 'center',
              }}
            >
              Key Roles of a Web Developer:
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              data-aos="zoom-in" 
              sx={{
                mt: 3,
                pb: 9,
                fontSize: { xs: '14px', md: '20px' },
                textAlign: 'center',
              }}
            >
              Web developers translate website designs (often provided by UX/UI designers) into code using programming languages like HTML, CSS, and JavaScript.
              <br />
              <br />
              They also ensure the site works across different devices and browsers (responsive design) and meets performance standards.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WebDevFirstDes;
