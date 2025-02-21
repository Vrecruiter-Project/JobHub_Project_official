import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const DifferentJobCard = ({ jobTypes, title, onClick, image, width = '180px', height = '180px', backgroundColor = '#f0f0f0', boxShadow, border = '1px dashed green' }) => {
  return (
    <>
      <Card
        sx={{
          width,
          height,
          borderRadius: '0px 20px',
          backgroundColor,
          boxShadow: boxShadow || `rgba(0, 128, 0, 0.15) 0px 30px 30px, rgba(0, 128, 0, 0.08) 0px -8px 20px, rgba(0, 128, 0, 0.08) 0px 2px 4px, rgba(0, 128, 0, 0.12) 0px 8px 10px, rgba(0, 128, 0, 0.05) 0px -2px 3px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border,
        }}
        onClick = {onClick}
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
            fontSize: '17px',
            fontWeight: 'bold',
            textAlign: "center",
            pt: 1,
          }}>{jobTypes.title}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DifferentJobCard;
