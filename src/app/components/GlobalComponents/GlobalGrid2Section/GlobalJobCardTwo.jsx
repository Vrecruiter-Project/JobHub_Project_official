

import { Box, Grid2, Typography } from '@mui/material';
import DataBg from '../../../assets/Images/bgImages/TeleBg.png';
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalJobCardTwo = ({ content, title, subtitle, mainImage, mainImageStyle }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <Box
        sx={{
          my: { xs: 4, md: 10 },
          width: '100%',
          backgroundImage: `url(${DataBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        data-aos="fade-up" 
      >
        <Grid2
          container
          sx={{
            width: '80%',
            mx: 'auto',
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          {/* Content Section */}
          <Grid2
            item
            xs={12}
            md={6}
            sx={{
              mt: 2,
              width: { xs: '100%', sm: '100%', md: '50%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            data-aos="fade-right" 
          >
            <Grid2 container>
              <Grid2
                item
                xs={12}
                md={12}
                sx={{
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                }}
              >
                <Typography variant="h4" component="h2">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  component="h5"
                  sx={{
                    pt: 1,
                  }}
                >
                  {subtitle}
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container>
              {content.map((item, index) => (
                <Grid2
                  item
                  key={index}
                  data-aos="fade-up" 
                >
                  <Box
                    sx={{
                      display: 'flex',
                      pt: 2,
                      width: '100%',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={`Icon ${index}`}
                      sx={{ height: '30px', width: '30px', mr: 2 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                      }}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>

          {/* Image Section */}
          <Grid2
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: '100%', sm: '100%', md: '50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { xs: 4, md: 6 },
            }}
            data-aos="fade-left"
          >
            <img
              src={mainImage}
              style={{
                maxWidth: '100%',
                height: 'auto',
                ...mainImageStyle, 
              }}
              alt="Main"
            />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default GlobalJobCardTwo;

