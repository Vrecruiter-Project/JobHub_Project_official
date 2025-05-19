import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const DifferentJobCard = ({ jobTypes, title, onClick, image, backgroundColor = '#f0f0f0', boxShadow, border = '1px dashed green' }) => {
  return (
    <>
      <Card
        sx={{
          cursor: 'pointer',
          // width:{ xs: '100%', sm: '100%', md: '120px', lg: '180px' },
          width: { xs: '120px', sm: '170px', md: '155px', lg: '180px' },
          height: { xs: '120px', sm: '170px', md: '155px', lg: '180px' },
          borderRadius: '0px 20px',
          backgroundColor,
          boxShadow: boxShadow || `rgba(0, 128, 0, 0.15) 0px 30px 30px, rgba(0, 128, 0, 0.08) 0px -8px 20px, rgba(0, 128, 0, 0.08) 0px 2px 4px, rgba(0, 128, 0, 0.12) 0px 8px 10px, rgba(0, 128, 0, 0.05) 0px -2px 3px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border,
        }}
        onClick={onClick}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={jobTypes.image} width="55px" height="55px" alt={title} />
          <Typography variant='body1' sx={{
            fontSize: { lg: '17px', md: '15px', sm: '16px', xs: '12px' },
            fontWeight: 'bold',
            textAlign: "center",
            pt: 1,
          }}>{jobTypes.title}</Typography>
          <Button size='small' sx={{backgroundColor: '#008000', color:'white', fontSize:'8px'}}>Apply now</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default DifferentJobCard;
