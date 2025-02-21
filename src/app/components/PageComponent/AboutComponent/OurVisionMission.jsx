import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid2 } from '@mui/material';
import Our_Vission_Mission_Image from '../../../assets/Images/AboutPage/Our_Vission_Mission_Image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionVisionSection = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',

    });
  }, []);

  return (
    <Box sx={{ paddingTop: '30px', backgroundColor: '#d3f1ec' }}>
      <Grid2 container alignItems="center" justifyContent={'center'}>
        {/* Left Image */}
        <Grid2 xs={12} md={12}>
          <Box
            component="img"
            src={Our_Vission_Mission_Image}
            alt="Person pointing"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              objectFit: 'cover',
              display: {
                xs: 'none', // Hide on small screens
                lg: 'block', // Show on medium and larger screens
              },
            }}
          />
        </Grid2>


        {/* Right Content */}
        <Grid2
          xs={12}
          md={6}
          sx={{
            width: { xs: '100%', md: '50%' }, // Full width on small devices, 50% on medium and larger
            padding: { xs: 2, md: 3 }, // Add padding for spacing
          }}
        >
          {/* Mission Card */}
          <Card  data-aos="zoom-in"
            sx={{
              marginBottom: { xs: 2, md: 3 }, // Adjust margin for spacing
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "green",
                  fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
                  textAlign: { xs: 'center', md: 'left' }, // Center align text on small devices
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' }, // Adjust body text size
                  textAlign: { xs: 'justify', md: 'left' },
                }}
              >
                To empower job seekers and employers by providing a comprehensive platform that simplifies the job search and hiring process. We are committed to connecting talented professionals with top companies through innovative tools, real-time job listings, and personalized
                career resources. Our mission is to create a seamless experience
                that enhances career growth, bridges the gap between talent and opportunity, and helps businesses thrive with the best candidates.
              </Typography>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card  data-aos="zoom-in"
            sx={{
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "green",
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: { xs: 'justify', md: 'left' },
                }}
              >
                To revolutionize the way people connect with opportunities by creating a dynamic and inclusive platform where talent meets
                the right opportunities. We envision a world where job seekers
                seamlessly discover meaningful careers, and employers find the
                best-fit candidates to drive their success, fostering professional growth, innovation, and diversity in every industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

      </Grid2>
    </Box>
  );
};

export default MissionVisionSection;
