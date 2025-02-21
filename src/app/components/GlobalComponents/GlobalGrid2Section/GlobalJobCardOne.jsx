import { Box, Grid2, Typography } from '@mui/material';
import DataBg from '../../../assets/Images/bgImages/TeleBg.png';
import DescriptionBg from '../../../assets/Images/bgImages/PartnersBg.png';
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalJobCardOne = ({ content, title, subtitle, mainImage, mainImageStyle }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <>
      <Box
        sx={{
          my: { xs: 4, md: 10 },
          width: '100%',
        }}
        data-aos="fade-up"
      >

        {/* Title Section */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            width: '80%',
            mx: 'auto',
          }}
          data-aos="fade-down"
        >
          <Typography
            variant="h5"
            color="initial"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              mb: 5,
              fontSize: { xs: '25px', md: '45px' },
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
                bottom: '-20px',
                left: 0,
              },
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${DataBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Grid2
            container
            sx={{
              width: '80%',
              mx: 'auto',
            }}
          >
            {/* Subtitle Section */}
            <Typography
              variant="h6"
              color="initial"
              sx={{
                textAlign: 'center',
                marginTop: 1,
                fontSize: { xs: '13px', sm: '16px', md: '20px' },
              }}
              data-aos="zoom-in"
            >
              {subtitle}
            </Typography>

            {/* Main Image Section */}
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
              data-aos="fade-right"
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

            {/* Key Responsibility Section */}
            <Grid2
              item
              xs={12}
              md={6}
              sx={{
                pt: 10,
                width: { xs: '100%', sm: '100%', md: '50%' },
              }}
              data-aos="fade-left"
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
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      textAlign: 'center',
                      pl: { md: '44px' },
                      fontWeight: 600,
                      fontSize: { xs: '20px', md: '24px' },
                    }}
                  >
                    Key Responsibility:
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
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default GlobalJobCardOne;

