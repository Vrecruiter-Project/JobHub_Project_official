import React, { useState, useEffect } from 'react';
import { Box, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import html from '../../../../../../assets/Images/WebDeveloper/html.png';
import css from '../../../../../../assets/Images/WebDeveloper/css.png';
import js from '../../../../../../assets/Images/WebDeveloper/js.png';
import rec from '../../../../../../assets/Images/WebDeveloper/rec.png';
import node from '../../../../../../assets/Images/WebDeveloper/node.png';

const AutoTypingCode = ({ code }) => {
  const [currentCode, setCurrentCode] = useState('');
  useEffect(() => {
    let index = 0;
    let isTyping = true;
    const typingSpeed = 100;
    const pauseDuration = 4000;

    const interval = setInterval(() => {
      if (isTyping) {
        if (index < code.length) {
          setCurrentCode((prev) => prev + code[index]);
          index++;
        } else {
          isTyping = false;
          setTimeout(() => {
            setCurrentCode('');
            index = 0;
            isTyping = true;
          }, pauseDuration);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [code]);

  return (
    <Box
      sx={{
        color: '#61dafb',
        p: 2,
        borderRadius: 2,
        fontFamily: 'monospace',
        fontSize: '12px',
      }}
    >
      <Typography component='pre'>{currentCode}</Typography>
    </Box>
  );
};

export default function WebDevCrousal() {
  const codeSnippets = [
    {
      language: 'HTML',
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
    },
    {
      language: 'CSS',
      code: ` <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    </style>`,
    },
    {
      language: 'JS',
      code: `  for (c = 3; c < 5; c++) {
        for (r = 0; r < bricksRowCount; r++) {
            setRowsCol();
            document.getElementById("demo")
            .innerHTML = "Hello Dolly."
        }
    }`,
    },
    {
      language: 'React',
      code: `import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;`,
    },
    {
      language: 'Node',
      code: `require('express');
 require('path');
 express();
 PORT = 3000;

app.listen(PORT, () => {
  console.log(\Server );
});`,
    },
  ];

  return (
    <Box
      sx={{
        margin: '1% 3%',
      }}
    >
      <Box
        sx={{
          border: '5px solid black',
          borderRadius: '7px',
          borderBottom: '20px solid black',
          height: "60vh",
          width: { xs: '100%', sm: '690px' }, // Responsive width
          minWidth: '300px',
          margin: 'auto',
          background: 'linear-gradient(to bottom, #7bff7b, #7d0404)',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 16000 }}
            modules={[Navigation, Pagination, Autoplay]}
            className='mySwiper'
            style={{ width: '100%', height: '100%' }}
          >
            {codeSnippets.map((snippet, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: 'center', width: '100%' }}
                  >
                    {/* Code Section */}
                    <Grid item>
                      <Card
                        sx={{
                          maxWidth: { xs: '200px', sm: '250px', md: '450px' },
                          height: 'auto',
                          background: 'black',
                          padding: 2,
                        }}
                      >
                        <AutoTypingCode code={snippet.code} />
                      </Card>
                    </Grid>
                    
                    {/* Image Section */}
                    <Box
                      sx={{
                        display: { xs: 'none', sm: 'flex' }, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: { sm: '200px', md: '200px' }, 
                        height: 'auto',
                      }}
                    >
                      <img
                        src={
                          snippet.language === 'HTML'
                            ? html
                            : snippet.language === 'CSS'
                            ? css
                            : snippet.language === 'JS'
                            ? js
                            : snippet.language === 'React'
                            ? rec
                            : node
                        }
                        alt={snippet.language}
                        style={{
                          width: '100%', 
                          height: 'auto', 
                        }}
                      />
                    </Box>
                  </Grid>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Typography
          variant='h6'
          sx={{
            fontSize: '14px',
            position: 'absolute',
            bottom: '-22px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            padding: '0 10px',
          }}
        >
          MANGO
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: 'black',
          height: '2vh',
          borderTop: '1px solid purple',
          width: { xs: ' 200px', sm: '490px', md: '56%'}, // Responsive width for footer
          margin: '0 auto',
          mb: 10,
        }}
      ></Box>
    </Box>
  );
}
