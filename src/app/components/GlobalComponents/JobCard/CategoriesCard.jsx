import { Card, CardContent, Typography, Box } from '@mui/material';
import React from 'react';

const CategoriesCard = ({
  category,
  title,
  width = '210px',
  height = '130px',
  backgroundColor = '#f0f0f0',
  boxShadow,
}) => {
  return (
    <Card
      sx={{
        width,
        height,
        borderRadius: '18px',
        padding: '3px', // Space for the border effect
        background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(65,167,72,1) 100%)', // Gradient background
        boxShadow:
          boxShadow ||
          'rgba(128, 128, 128, 0.15) 0px 30px 30px, rgba(0, 128, 0, 0.08) 0px -8px 20px, rgba(128, 128, 128, 0.08) 0px 2px 4px, rgba(0, 128, 0, 0.12) 0px 8px 10px, rgba(128, 128, 128, 0.05) 0px -2px 3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: "transform 0.6s ease-in-out",
        "&:hover": {
          transform: "translateY(-3px)"
        }
      }}
    >
      {/* Inner box for actual card content to create the "border" effect */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor,
          borderRadius: '18px', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              fontSize: '17px',
              fontWeight: 'bold',
              textAlign: 'center',
              pt: 1,
              mx: 2
            }}
          >
            {category.title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CategoriesCard;
