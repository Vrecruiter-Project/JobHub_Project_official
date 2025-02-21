
import { Box, Grid2, Typography } from '@mui/material';
import React , {useEffect} from 'react';
import TeleBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import CategoriesCard from '../../../../../GlobalComponents/JobCard/CategoriesCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HotelCat = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',

    });
  }, []);

  const category = [
    { title: 'Hotel manager' },
    { title: 'Room attendant' },
    { title: 'Chef' },
    { title: 'General manager' },
    { title: 'Waiter' },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${TeleBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100%',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            py: 12,
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            width: '100%',
          }}
        >
          <Grid2
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
              mb: 10,
              px: 5,
            }}
          >
            <Grid2 item xs={12} md={12}>
              <Typography
                variant='h3'
                component='h2'
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '35px', md: '45px' },
                }}
              >
                Explore By More Specific{' '}
                <span style={{ color: 'green' }}> Categories</span>
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2
            container
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center',
                md: 'space-between',
                lg: 'space-between',
              },
              alignItems: 'center',
              mb: 10,
              mx: 'auto',
              px: 5,
              width: '80%',
            }}
          >
            {category.map((item, index) => (
              <Grid2
                item
                key={index}
                xs={12}
                sm={2}
                md={4}
                lg={2.4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: { xs: 5, sm: 5, md: 'index >= 5 ? 5 : 0' },
                }}

                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <CategoriesCard category={item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default HotelCat;
