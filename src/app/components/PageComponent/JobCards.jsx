import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import search from '../../assets/Images/jobCardIcons/Search.png';
import salary from '../../assets/Images/jobCardIcons/salary.png';
import frame from '../../assets/Images/jobCardIcons/Frame.png';
import quickApply from '../../assets/Images/jobCardIcons/quickApply.png';
import { gloabalTheme } from '../../theme/theme';
import HelperImage from '/Helper.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
const cards = [
  {
    imgSrc: search,
    text: 'Find Your Dream Job',
  },
  {
    imgSrc: salary,
    text: 'Compare Salaries',
  },
  {
    imgSrc: frame,
    text: 'Research Companies',
  },
  {
    imgSrc: quickApply,
    text: 'Quick Apply',
  },
];

const JobCards = () => {
  useEffect(() => {
      Aos.init();
    }, []);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py:'100px',
        px: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box sx={{ maxWidth: '1200px', width: '90%' }}>
        {/* Header */}
        <Typography
          data-aos="fade-up"
          variant="h4"
          textAlign="center"
          sx={{ fontSize: { xs: '22px', sm: '38px' }, mb: 6 , fontFamily:"Marcelluse",textShadow: '0 3px 4px #333'}}
        >
          How{' '}
          <Box
            component="span"
            sx={{
              
              color: gloabalTheme.colors.primary,
              fontWeight: 'bold',
              borderRadius: 1,
              px: 1,
              
            }}
          >
            JOBHUB
          </Box>{' '}
          works for you
        </Typography>

        {/* Cards */}
        <Box sx={{marginRight:"20px"}}>
          <img src={HelperImage} alt='helper tips from jobhub' className='mb-[-60px] mr-11 w-full'/>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '160px',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',

                  '&:hover .hover-bg': {
                    width: '100%',
                    height: '100%',
                    borderRadius: 0,
                  },
                  '&:hover .hover-text': {
                    color: '#ffffff',
                  },
                }}
              >
                {/* Expanding Green Background */}
                <Box
                  className="hover-bg"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '48px',
                    height: '48px',
                    backgroundColor: gloabalTheme.colors.primary, // Tailwind green-500
                    borderBottomLeftRadius: '999px',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 1,
                  }}
                />

                {/* Centered Content */}
                <Box
                  sx={{
                    zIndex: 2,
                    position: 'relative',
                    textAlign: 'center',
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={card.imgSrc}
                    alt={card.text}
                    sx={{ width: '40px', height: '40px', mb: 1 }}
                  />
                  <Typography
                    className="hover-text"
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      color: '#111827',
                      fontSize: '16px',
                      transition: 'color 0.3s ease-in-out',
                    }}
                  >
                    {card.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default JobCards;
