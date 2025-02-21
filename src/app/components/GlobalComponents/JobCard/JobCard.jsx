
import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

const JobCard = ({ Icon, title }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'rgba(0, 128, 0, 0.6)',
          width: { xs: '250px', md: '250px' },
          height: { xs: '200px', md: '200px' },
          borderRadius: '20px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* White Card on Top */}
        <Card data-aos="zoom-in-right"
          data-aos-duration="1000"
          sx={{
            width: '80%',
            height: '70%',
            borderRadius: '20px 0px',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50px',
            left: '-20px',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton>
              {Icon}
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default JobCard;
