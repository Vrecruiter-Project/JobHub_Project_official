import React, { useEffect } from 'react';
import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// Importing images
import WebDesignImg from '../../../../../../assets/Images/WebDesignImgs/frontendImg.png';
import BrandContentImg from '../../../../../../assets/Images/WebDesignImgs/BrandContent.png';
import UiUxDesignImg from '../../../../../../assets/Images/WebDesignImgs/UxDesign.png';
import webImg1 from '../../../../../../assets/Images/WebDesignImgs/webImg1.png';
import webImg2 from '../../../../../../assets/Images/WebDesignImgs/webImg2.png';
import webImg3 from '../../../../../../assets/Images/WebDesignImgs/webImg3.png';

const WebDesignCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      offset: 200, // Offset to trigger animation
    });
  }, []);

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    mb: 10,
    px: 5,
  };

  return (
    <Box sx={{ py: 10, width: '100%', display: 'grid', placeItems: 'center' }}>
      <Grid2 container sx={containerStyles}>
        <Grid2 item xs={12} md={12}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '35px', md: '45px' },
            }}
          >
            Key Roles in Modern <span style={{ color: 'green' }}>Web Design</span>
          </Typography>
          <Typography
            variant="body2"
            component="h6"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '15px', md: '17px' },
              px: { md: '10%' },
              pt: 2,
            }}
          >
            A creative, detail-oriented Web designer working with HTML, CSS, JavaScript
            languages and thinking in UI/UX perspective. Both a Figma and Adobe XD user, I
            create and optimize interfaces for a responsive, mobile-first design so that
            websites are aesthetically pleasing, intuitive, and have no issues with
            compatibility across all devices.
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={5} sx={{ width: '80%', mb: 9 }}>
        <Grid2
          item
          xs={12}
          sm={8}
          md={4}
          sx={{
            width: { sm: '100%', md: '30%' },
            borderRadius: '5px',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            border: '8px solid green',
            position: 'relative',
            '&:hover .hiddenImg': {
              transform: { md: 'translateX(-100px)' },
            },
          }}
          data-aos="fade-up" // AOS Animation
          data-aos-delay="100" // Delay for animation
        >
          <Card sx={{ width: '100%', height: '450px' }}>
            <img
              src={WebDesignImg}
              style={{ width: '100%', height: '50%' }}
              alt="illustration"
            />
            <CardContent sx={{ height: '100%' }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontSize: { xs: '22px', md: '30px' },
                  textAlign: 'center',
                }}
              >
                Front-End Designer
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                sx={{
                  textAlign: 'justify',
                  fontSize: { xs: '13px', md: '17px' },
                  pt: 2,
                  pb: 3,
                }}
              >
                A Front-End Designer combines design and coding skills to create visually
                appealing, responsive websites using HTML, CSS, and JavaScript.
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              position: 'absolute',
              top: '66%',
              left: '2%',
              transform: 'translateX(-100%, -100%)',
              width: '150px',
              height: '150px',
              transition: 'transform 0.5s ease',
              zIndex: -1,
            }}
            className="hiddenImg"
          >
            <img
              src={webImg1}
              style={{ height: '100%', width: '100%' }}
              alt="cartoon"
            />
          </Box>
        </Grid2>

        <Grid2
          item
          xs={12}
          sm={8}
          md={4}
          sx={{
            width: { sm: '100%', md: '30%' },
            top: { md: '2rem' },
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            borderRadius: '5px',
            border: '8px solid green',
            position: 'relative',
            '&:hover .hiddenImg': {
              transform: { md: 'translate(-45px, -40px)' },
            },
          }}
          data-aos="fade-up" // AOS Animation
          data-aos-delay="200" // Delay for animation
        >
          <Card sx={{ width: '100%', height: '450px' }}>
            <img
              src={BrandContentImg}
              style={{ width: '100%', height: '50%' }}
              alt="illustration"
            />
            <CardContent sx={{ height: '100%' }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontSize: { xs: '22px', md: '30px' },
                  textAlign: 'center',
                }}
              >
                Brand and Content Designer
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                sx={{
                  textAlign: 'justify',
                  fontSize: { xs: '13px', md: '17px' },
                  pt: 2,
                  pb: 3,
                }}
              >
                Creates cohesive visual identities, engaging content, and compelling brand
                stories that resonate and connect with people.
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              position: 'absolute',
              top: '90%',
              left: '-10px',
              transform: 'translate(50%, -80%)',
              width: '150px',
              height: '150px',
              transition: 'transform 0.5s ease',
              zIndex: -1,
            }}
            className="hiddenImg"
          >
            <img
              src={webImg2}
              style={{ height: '100%', width: '100%' }}
              alt="cartoon"
            />
          </Box>
        </Grid2>

        <Grid2
          item
          xs={12}
          sm={8}
          md={4}
          sx={{
            width: { sm: '100%', md: '30%' },
            top: { md: '4rem' },
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            borderRadius: '5px',
            border: '8px solid green',
            position: 'relative',
            '&:hover .hiddenImg': {
              transform: { md: 'translateY(-155px)' },
            },
          }}
          data-aos="fade-up" // AOS Animation
          data-aos-delay="300" // Delay for animation
        >
          <Card sx={{ width: '100%', height: '450px' }}>
            <img
              src={UiUxDesignImg}
              style={{ width: '100%', height: '50%' }}
              alt="illustration"
            />
            <CardContent sx={{ height: '100%' }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontSize: { xs: '22px', md: '30px' },
                  textAlign: 'center',
                }}
              >
                UI/UX Designer
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                sx={{
                  textAlign: 'justify',
                  fontSize: { xs: '13px', md: '17px' },
                  pt: 2,
                  pb: 3,
                }}
              >
                Creates user-friendly, people-centered designs that simplify interactions
                and elevate the digital experience.
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              position: 'absolute',
              top: '0%',
              left: { md: '55%' },
              transform: 'translateY(50%)',
              width: '150px',
              height: '150px',
              transition: 'transform 0.5s ease',
              zIndex: -1,
            }}
            className="hiddenImg"
          >
            <img
              src={webImg3}
              style={{ height: '100%', width: '100%' }}
              alt="cartoon"
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default WebDesignCard;
