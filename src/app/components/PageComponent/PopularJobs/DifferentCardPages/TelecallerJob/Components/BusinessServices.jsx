import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import Tele2 from '../../../../../../assets/Images/bgImages/Tele2.png';
import Tele3 from '../../../../../../assets/Images/bgImages/Tele3.png';

const BusinessServices = () => {
  return (
    <>
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '80vh',
      overflow: 'hidden',
    }}>
    
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${Tele2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
        backgroundAttachment: {xs:"none", sm: "none", md: "fixed", lg: "fixed"},
        zIndex: -1,
        filter: "blur(4px)", 
      }} />

      <Box sx={{
        backgroundImage: `url(${Tele3})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
        height: "100%",
        py: { xs: 14, md: 20},
      }}>
      <Grid2 container sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid2 item xs={12} md={12} sx={{
          my : {md: 6},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: {xs: "80%", sm: "80%", md: "100%"},
          background: {md:"rgba(255, 255, 255, 0.3)"},
        }}>
          <Typography variant='h3' component='h1' sx={{
            fontSize: { xs: "27px", md: "45px" },
            textAlign: "center",
            lineHeight: {md: "60px"},
            fontWeight: "bold",
            fontStyle: "italic",
            color: {xs: "white", sm: "white", md: "black"},
          }}>
            "Take the First Step Towards Achieving <br /> Your Goals with Our Telecaller Service –<span style={{ color: "green" }}>We're Here to Help!</span>"
          </Typography>
        </Grid2>
      </Grid2>
      </Box>
    </Box>
    </>
  )
}

export default BusinessServices

