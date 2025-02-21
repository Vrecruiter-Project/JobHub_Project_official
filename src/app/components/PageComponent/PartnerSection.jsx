import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';

import PartnersBg from '../../assets/Images/bgImages/PartnersBg.png';
import aeroPlazaLogo from '../../assets/Images/companies-list/aeroPlazaLogo.png';
import floranceLogo from '../../assets/Images/companies-list/floranceEstateLogo.png';
import rajputLogo from '../../assets/Images/companies-list/rajputGroupLogo.png';
import westHighLogo from '../../assets/Images/companies-list/westHighlanderLogo.png';
import whiteRayLogo from '../../assets/Images/companies-list/whiterayLogo.png';
import aadiSoftLogo from '../../assets/Images/companies-list/AadiSoftLogo.jpg';
import aboardLogo from '../../assets/Images/companies-list/AbroadFliersLogo.png';
import aeboLogo from '../../assets/Images/companies-list/AebocodeLogo.png';
import AmCareLogo from '../../assets/Images/companies-list/AmCareLogo.jpeg';
import farlexLogo from '../../assets/Images/companies-list/FarlexLogo.jpg';
import IvsLogo from '../../assets/Images/companies-list/IvsLogo.jpg';
import JDevelopersLogo from '../../assets/Images/companies-list/JDevelopers.png';
import eventLogo from '../../assets/Images/companies-list/eventHolidaysLogo.png';
import futureITLogo from '../../assets/Images/companies-list/FutureITLogo.png';
import jungleWorksLogo from '../../assets/Images/companies-list/JungleworksLogo.png';
import RBLLogo from '../../assets/Images/companies-list/RBLLogo.png';
import RGLogo from '../../assets/Images/companies-list/RGGroupsLogo.png';
import CompanySwiper from '../GlobalComponents/GlobalSwiper/CompanySwiper';

const PartnerSection = () => {
  const companyItems = [
    { image: aeroPlazaLogo },
    { image: floranceLogo },
    { image: rajputLogo },
    { image: westHighLogo },
    { image: whiteRayLogo },
    { image: aadiSoftLogo },
    { image: aboardLogo },
    { image: aeboLogo },
    { image: AmCareLogo },
    { image: farlexLogo },
    { image: IvsLogo },
    { image: JDevelopersLogo },
    { image: eventLogo },
    { image: jungleWorksLogo },
    { image: RBLLogo },
  ];

  return (
    <>
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Grid2
          container
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: { xs: 8, md: 3 },
            pb: { xs: 5, md: 3 },
            backgroundImage: { xs: 'none', md: `url(${PartnersBg})` },
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        >
          <Grid2 item xs={12}>
            <Typography
              data-aos='fade-up'
              variant='h3'
              component='h2'
              sx={{
                textAlign: 'center',
                pt: { xs: 0, md: 8 },
                fontSize: { xs: '35px', md: '45px' },
              }}
            >
              Our{' '}
              <span
                style={{
                  color: 'green',
                }}
              >
                Partners
              </span>
            </Typography>
          </Grid2>
        </Grid2>
        <CompanySwiper companyItems={companyItems} />
      </Box>
    </>
  );
};

export default PartnerSection;
