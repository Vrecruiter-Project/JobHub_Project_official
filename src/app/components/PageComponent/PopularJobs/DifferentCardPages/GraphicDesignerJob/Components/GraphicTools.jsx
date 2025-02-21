import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Importing icons/images
import CoralDrawIcon from '../../../../../../assets/Images/GraphicImages/Tools/CoralDraw.png';
import ExpressIcon from '../../../../../../assets/Images/GraphicImages/Tools/Express.png';
import GIMPIcon from '../../../../../../assets/Images/GraphicImages/Tools/GIMP.png';
import IllustratorIcon from '../../../../../../assets/Images/GraphicImages/Tools/Illustrator.png';
import InDesignIcon from '../../../../../../assets/Images/GraphicImages/Tools/inDesign.png';
import PhotoShopIcon from '../../../../../../assets/Images/GraphicImages/Tools/PhotoShop.png';

// Tools Data
const tools = [
  { name: 'CoralDraw', icon: CoralDrawIcon },
  { name: 'Adobe Express', icon: ExpressIcon },
  { name: 'GIMP', icon: GIMPIcon },
  { name: 'Adobe Illustrator', icon: IllustratorIcon },
  { name: 'Adobe Indesign', icon: InDesignIcon },
  { name: 'Adobe Photoshop', icon: PhotoShopIcon },
];

const GraphicDesigningTools = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant='h4' gutterBottom>
        Tool For Graphic <span style={{ color: '#4CAF50' }}>Designer</span>
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {tools.map((tool, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={index}
            sx={{
              my: 7,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                width: 150,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                borderRadius: '12px',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  style={{
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'contain', 
                    marginBottom: '10px',
                  }}
                />
                <Typography
                  variant='body2'
                  fontWeight='bold'
                  textAlign='center'
                  sx={{ fontSize: '14px' }}
                >
                  {tool.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GraphicDesigningTools;
