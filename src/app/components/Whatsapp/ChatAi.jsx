import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardContent,
  Button,
  keyframes,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsappIcon from './WhatsappIcon';

// Keyframe for the popup/landing effect
const popupAnimation = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const ChatAi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('Hi there! How can I help you?');
  const [stickyBottom, setStickyBottom] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('#footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Adjust position to stay above footer if it's visible
        setStickyBottom(
          footerTop < viewportHeight ? viewportHeight - footerTop + 30 : 30
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: stickyBottom,
        right: '40px', 
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Chat Popup Card */}
      {isOpen && (
        <Card
          sx={{
            position: 'absolute',
            bottom: 80,
            marginRight:'30px',
            right: 0,
            width: 300,
            boxShadow: 3,
            borderRadius: '8px',
            animation: `${popupAnimation} 0.3s ease-out`,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 2,
              }}
            >
              <Typography variant='h6' fontWeight='bold'>
                Find a Right Job
              </Typography>
              <IconButton onClick={handleCloseChat}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant='body1' sx={{ marginBottom: 2 }}>
              {content}
            </Typography>
            <Button
              href='https://wa.me/+919518035030?text=Hello%20Jobhub.world%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Jobs.'
              target='_blank'
              rel='noopener noreferrer'
              variant='contained'
              color='success'
              fullWidth
              sx={{
                textTransform: 'none',
                fontSize: '14px',
                padding: '10px',
                borderRadius: '4px',
              }}
            >
              Start Chat
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Floating WhatsApp Icon Button */}
      <IconButton
        onClick={handleOpenChat}
        sx={{
          borderRadius: '50%',
          padding: 0,
          animation: `${popupAnimation} 0.8s ease-out`,
          transition: 'transform 0.5s ease',
          marginRight: '25px', 
          marginBottom: '15px', 
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <WhatsappIcon />
      </IconButton>
    </Box>
  );
};

export default ChatAi;
