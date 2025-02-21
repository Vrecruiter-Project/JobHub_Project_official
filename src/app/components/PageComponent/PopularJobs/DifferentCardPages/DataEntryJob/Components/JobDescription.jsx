import React, { useEffect } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import GlobalGrid2Section from '../../../../../GlobalComponents/GlobalGrid2Section/GlobalGrid2Section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobDescription = () => {
  const items = [
    {
      icon: tickImg,
      description:
        "Data entry is a process that extracts information from sources, be it in written forms, scanned images, or audio records, and transfers them to digital format. Usually, the work involves writing or utilizing software tools in helping to capture data accurately.",
    },
    {
      icon: tickImg,
      description:
        "It is a process that usually carries data validation and cleaning with data entry to ensure that the data is correct and consistent. It may include removal of duplicates, corrections of errors, or standardization of data.",
    },
    {
      icon: tickImg,
      description:
        "Data storage and organization: Once the data is input, it must be stored within a system or database so that it can be accessed speedily and utilized. Professionals in data entry or systems file and categorize the data to make retrieval easier and to report on the data.",
    },
    {
      icon: tickImg,
      description:
        "Data professionals do archiving and classification of the stored data in a way that enables one to retrieve and analyze them for the purposes of the report and such others.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    
    
    });
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        my: 4,
        display: 'grid',
        placeItems: 'center',
        backgroundImage: { xs: "none", sm: "none", md: `url(${DataBg})` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 170px",
        backgroundSize: "cover",
      }}
    >
      <Grid2 container justifyContent="center" alignItems="center" sx={{ pt: { xs: 6 }, pb: 4 }}>
        <Grid2 item xs={12} sx={{ position: 'relative', textAlign: 'center' }} >
          <Typography
            variant="h3"
            component="h2"
            data-aos="fade-up"
            sx={{
              fontSize: { xs: '35px', md: '45px' },
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
                bottom: '-30px',
                left: 0,
              
              },  
            }}
          >
            Data Entry <span style={{ color: 'green' }}>Job Description</span>
          </Typography>
        </Grid2>
      </Grid2>

      <GlobalGrid2Section content={items} Img1={true} />
    </Box>
  );
};

export default JobDescription;
