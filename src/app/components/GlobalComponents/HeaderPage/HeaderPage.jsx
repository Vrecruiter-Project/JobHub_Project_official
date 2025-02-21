import { Box, Grid2, TextField, Typography } from '@mui/material';
import React from 'react';

import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HeaderPage = ({ backgroundImage, headerText, subText, buttonTitle1, buttonTitle2, onButtonClick1, onButtonClick2, imgSrc, button2, style }) => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Box sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
        width: '100%',
        py: { xs: 5, sm: 3 },
        height: "auto",
      }}>
        <Grid2 container
          sx={{
            width: "80%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >

          {/* Content Section */}


          <Grid2 item xs={12} md={6} sx={{
            width: { xs: "none", sm: "none", md: "50%" },
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}>


            <Typography data-aos="zoom-out"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
              variant="h1"
              sx={{
                width: { sm: "80%", md: "100%" },
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "40px", sm: "50px", md: "55px" },
              }}
            >
              {headerText}
            </Typography>

            <Typography
              sx={{
                width: "100%",
                fontSize: "19px",
                fontFamily: '"Roboto", sans-serif',
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                color: "text.primary",
                pt: { xs: 2 }
              }}
            >
              {subText}
            </Typography>
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "flex-start" }, pt: "14%", }}
            >
              <div data-aos="zoom-in" >
                <ButtonComponent
                  title={buttonTitle1}
                  onClick={onButtonClick1}
                  sx={{
                    background: "green",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    height: "50px",
                    width: { xs: "100%", sm: "auto" },
                    py: 3.5,
                    px: 6,
                    fontSize: "14px",
                  }}
                /></div>
              {button2 && (
                <div data-aos="zoom-in">
                  <ButtonComponent
                    title={buttonTitle2}
                    onClick={onButtonClick2}

                    sx={{
                      background: "green",
                      border: 0,
                      borderRadius: 1,
                      boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                      color: "white",
                      height: "50px",
                      width: { xs: "100%", sm: "auto" },
                      py: 3.5,
                      px: { lg: 6 },
                      mt: { xs: 2, sm: 2, md: 0, lg: 0 },
                      mx: { xs: 0, sm: 0, md: 2, lg: 2 },
                      fontSize: "14px",
                    }}
                  />
                </div>)}
            </Box>

          </Grid2>

          {/* Image Section */}
          <Grid2 data-aos="flip-right" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

            item xs={12} md={6} sx={{
              width: { xs: "none", sm: "none", md: "50%" },
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 4, md: 0 },
            }}>
            <img src={imgSrc} style={style} alt="HeaderImage" />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default HeaderPage;

