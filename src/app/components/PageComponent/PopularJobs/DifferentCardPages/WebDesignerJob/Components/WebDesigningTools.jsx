import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing icons/images
import AdobeXdIcon from '../../../../../../assets/Images/WebDesignImgs/Tools/AdobeXd.png';
import FigmaIcon from '../../../../../../assets/Images/WebDesignImgs/Tools/Figma.png';
import WordPressIcon from '../../../../../../assets/Images/WebDesignImgs/Tools/WordPress.png';
import SketchIcon from '../../../../../../assets/Images/WebDesignImgs/Tools/Sketch.png';
import CanvaIcon from '../../../../../../assets/Images/WebDesignImgs/Tools/Canva.png';
import WixIcon from '../../../../../../assets/Images/WebDesignImgs/Tools/Wix.png';

// Tools Data
const tools = [
  { name: 'Adobe XD', icon: AdobeXdIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'WordPress', icon: WordPressIcon },
  { name: 'Sketch', icon: SketchIcon },
  { name: 'Canva', icon: CanvaIcon },
  { name: 'Wix', icon: WixIcon },
];

const WebDesigningTools = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      offset: 200, 
    });
  }, []);

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant='h4' gutterBottom>
        Tool For Web <span style={{ color: '#4CAF50' }}>Designer</span>
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
            data-aos="fade-up"
            data-aos-delay={index * 200}
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
              <CardContent>
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

export default WebDesigningTools;
