import React from 'react';
import { Box, CardContent, Typography, Button } from '@mui/material';

const DifferentJobCard = ({ jobTypes, title, backgroundColor, boxShadow, border, onClick }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        cursor: 'pointer',
        width: { xs: '120px', sm: '170px', md: '155px', lg: '180px' },
        height: { xs: '120px', sm: '170px', md: '155px', lg: '180px' },
        borderRadius: '20px',
        backgroundColor,
        boxShadow: boxShadow || `rgba(0, 128, 0, 0.15) 0px 30px 30px, rgba(0, 128, 0, 0.08) 0px -8px 20px, rgba(0, 128, 0, 0.08) 0px 2px 4px, rgba(0, 128, 0, 0.12) 0px 8px 10px, rgba(0, 128, 0, 0.05) 0px -2px 3px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',

        // Hover effect to expand background and change text/button color
        '&:hover .hover-bg': {
          width: '100%',
          height: '100%',
          borderRadius: 0,
        },
        '&:hover .hover-text': {
          color: 'white',
        },
        '&:hover .hover-btn': {
          backgroundColor: 'white',
          color: '#008000',
        },
      }}
      onClick={onClick}
    >
      {/* Green expanding background */}
      <Box
        className="hover-bg"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '48px',
          height: '48px',
          backgroundColor: '#22c55e', // Tailwind green-500
          borderBottomLeftRadius: '999px',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1,
        }}
      />

      {/* Card Content */}
      <CardContent
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <img src={jobTypes.image} width="55px" height="55px" alt={title} />

        <Typography
          className="hover-text"
          variant="body1"
          sx={{
            fontSize: { lg: '17px', md: '15px', sm: '16px', xs: '9px' },
            fontWeight: 'bold',
            pt: 1,
            color: 'black',
            transition: 'color 0.3s ease-in-out',
          }}
        >
          {jobTypes.title}
        </Typography>

        <Button
          className="hover-btn"
          size="small"
          sx={{
            backgroundColor: '#008000',
            color: 'white',
            fontSize: '8px',
            marginTop: '10px',
            zIndex: 2,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Apply now
        </Button>
      </CardContent>
    </Box>
  );
};

export default DifferentJobCard;
