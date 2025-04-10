import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Stack,
  Snackbar,
  Link as MuiLink,
} from "@mui/material";
import { keyframes } from "@mui/system";
import Socialmediaicon from "./Socialmediaicon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email.includes('@')) {
      setSnackbarOpen(true);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#2F3E2F",
        color: "white",
        py: 6,
        px: { xs: 2, md: 6 },
        animation: `${fadeIn} 1s ease-in-out`,
      }}
    >
      {/* Main Footer Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Grid of Links */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, auto)" },
            gap: { xs: 4, md: 8 },
            width: '100%',
            justifyContent: { xs: "center", md: "space-around" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Stack spacing={2} >
            <Typography variant="h6" color={'#97dd9f'} gutterBottom>
              Home
            </Typography>
            <InteractiveLink text="About" to="/about" />
            <InteractiveLink text="Contact Us" to="/contact" />
            <InteractiveLink text="Find A Job" to="/#popularSection" />
            <InteractiveLink text="Hire Now" to="/verification" />
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h6"  color={'#97dd9f'} gutterBottom>
              Support
            </Typography>
            <InteractiveLink text="Privacy Policy" to="/Privacypolicy" />
            <InteractiveLink text="Terms and Conditions" to="/Termsandconditions" />
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h6"  color={'#97dd9f'} gutterBottom>
              Explore on
            </Typography>
            <InteractiveLink text="DigiBeez" to="https://digibeez.in" />
            <InteractiveLink text="Vrecruiters" to="https://www.vrecruiters.in" />
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h6"  color={'#97dd9f'} gutterBottom>
              Knowledge
            </Typography>
            <InteractiveLink text="Interview Tips" to="/interviewtips" />
            <InteractiveLink text="Events" to="/events" />
          </Stack>
        </Box>

        {/* Social Media Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mt: { xs: 4, md: 0 },
          }}
        >
          <Typography variant="h6">
            Follow Us
          </Typography>
          <Stack direction="row" data-aos="flip-up" data-aos-delay="300">
            <Socialmediaicon />
          </Stack>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center" mt={4}>
          <Typography variant="body2" sx={{ fontSize: {xs:'12px', md:'16px'} }}>
          Privacy Policy © 2025 Jobhub. All rights reserved
          </Typography>
          {/* <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 14"
            xmlSpace="preserve"
            height="16"
            width="43"
          >
            <title>Your Privacy Choices Opt-Out Icon</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#fff' }} />
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#0be01b' }} />
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style={{ fill: '#333' }} />
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style={{ fill: '#333' }} />
          </svg> */}
        </Stack>
      </Box>
    </Box>
  );
}

// Interactive Link Component
const InteractiveLink = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to && to.includes('#')) {
      e.preventDefault();
      const [path, anchor] = to.split('#');
      if (path) {
        navigate(path);
        setTimeout(() => {
          const target = document.querySelector(`#${anchor}`);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        const target = document.querySelector(`#${anchor}`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <MuiLink
      data-aos='fade-right'
      component={Link}
      to={to}
      onClick={handleClick}
      color='inherit'
      underline='hover'
      sx={{
        cursor: 'pointer',
        color:'#cae4cc',
        fontSize: { xs: '14px', md: '16px' },
        transition: 'color 0.3s',
        '&:hover': { color: '#66bb6a' },
      }}
    >
      {text}
    </MuiLink>
  );
};
