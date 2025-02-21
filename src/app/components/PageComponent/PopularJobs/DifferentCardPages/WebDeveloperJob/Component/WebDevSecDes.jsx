import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import html from '../../../../../../assets/Images/WebDeveloper/html.png';
import css from '../../../../../../assets/Images/WebDeveloper/css.png';
import js from '../../../../../../assets/Images/WebDeveloper/js.png';
import node from '../../../../../../assets/Images/WebDeveloper/node.png';
import rec from '../../../../../../assets/Images/WebDeveloper/rec.png';

export default function WebDevSecDes() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); 
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          mb: '30px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            fontSize: { xs: 20, sm: 40, md: 50 },
          }}
        >
          Top Technology For{' '}
          <span style={{ color: 'green' }}> Web Developer</span>
        </Typography>

        <Box>
          <Grid container spacing={9} justifyContent="center">
            <Grid item sm={2} md={2} data-aos="fade-up">
              <Box sx={{ objectFit: 'cover' }}>
                <img style={{ height: '11rem' }} src={html} alt="HTML" />
              </Box>
            </Grid>
            <Grid item sm={2} md={2} data-aos="fade-up">
              <Box sx={{ objectFit: 'contain' }}>
                <img style={{ height: '11rem' }} src={css} alt="CSS" />
              </Box>
            </Grid>
            <Grid item sm={2} md={2} data-aos="fade-up">
              <Box sx={{ objectFit: 'contain' }}>
                <img style={{ height: '11rem' }} src={js} alt="JavaScript" />
              </Box>
            </Grid>
            <Grid item sm={2} md={2} data-aos="fade-up">
              <Box sx={{ objectFit: 'contain' }}>
                <img style={{ height: '11rem' }} src={node} alt="Node.js" />
              </Box>
            </Grid>
            <Grid item sm={2} md={2} data-aos="fade-up">
              <Box sx={{ objectFit: 'contain' }}>
                <img style={{ height: '11rem' }} src={rec} alt="React" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
