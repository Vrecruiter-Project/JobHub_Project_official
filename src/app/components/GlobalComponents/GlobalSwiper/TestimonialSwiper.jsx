import { Box, Rating, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import React from 'react';
import TestimonialImg from '../../../assets/Images/testimonials/TestimonialImage.png';
import CommaImg from '../../../assets/Images/testimonials/comma.png';

const TestimonialSwiper = () => {
  return (
    <Box sx={{ maxWidth: 900, margin: 'auto', padding: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Grid2 container spacing={5}>       
        {/* Image Section */}
        <Grid2 item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={TestimonialImg}
            alt="Testimonial"
            sx={{
              height: { xs: '240px', sm: '450px', md: '500px' },
              width: { xs: '300px', sm: '350px', md: '400px' },
              borderRadius: 2,
            }}
          />
        </Grid2>
        
        {/* Review Section */}
        <Grid2 item xs={12} md={7}>
          
          {/* Rating and Review Count */}
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 item xs={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                        sx={{
                          pt: 3,
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: 2,
                            border: '2px solid lightgray',
                            position: 'absolute',
                            top: 0,
                            left: 10,
                            backgroundColor: 'white',
                            zIndex: 0,
                          }}
                        />
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: 2,
                            border: '2px solid lightgray',
                            backgroundColor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                          }}
                        >
                          <Typography variant="h5" color="green">
                            4.5
                          </Typography>
                        </Box>
                      </Box>
            </Grid2>
            <Grid2 item xs={8} md={9}>
              <Rating name="half-rating" defaultValue={5} precision={0.5} />
              <Typography variant="h6" sx={{ pt: 1, fontWeight: 'bold' }}>3285 Reviews</Typography>
            </Grid2>
          </Grid2>
          
          {/* Comment Section */}
          <Grid2 container spacing={2} sx={{ mt: 2 }} alignItems="center">
            <Grid2 item xs={3} sx={{ textAlign: 'center' }}>
              <img src={CommaImg} height="55px" width="55px" alt="Comma" />
              <Typography variant="subtitle1" sx={{ pt: 1 }}>Bridget</Typography>
            </Grid2>
            <Grid2 item xs={9}>
              <Typography variant="body2" sx={{ fontSize: '10px' }}>
                Thanks to this Job hub. The process was smooth and user-friendly.
              </Typography>
            </Grid2>
          </Grid2>
          
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TestimonialSwiper;
