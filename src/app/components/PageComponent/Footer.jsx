// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   TextField,
//   Typography,
//   Stack,
//   Snackbar,
//   Link as MuiLink,
// } from "@mui/material";
// import { keyframes } from "@mui/system";
// import Socialmediaicon from "./Socialmediaicon";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link, useNavigate } from 'react-router-dom';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   const fadeIn = keyframes`
//     from { opacity: 0; transform: translateY(20px); }
//     to { opacity: 1; transform: translateY(0); }
//   `;

//   const handleSubscribe = (event) => {
//     event.preventDefault();
//     if (email.includes('@')) {
//       setSnackbarOpen(true);
//       setEmail('');
//     } else {
//       alert('Please enter a valid email address.');
//     }
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#2F3E2F",
//         color: "white",
//         py: 6,
//         px: { xs: 2, md: 6 },
//         animation: `${fadeIn} 1s ease-in-out`,
//       }}
//     >
//       {/* Main Footer Layout */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 6,
//         }}
//       >
//         {/* Grid of Links */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, auto)" },
//             gap: { xs: 4, md: 8 },
//             width: '100%',
//             justifyContent: { xs: "center", md: "space-around" },
//             textAlign: { xs: "center", md: "left" },
//           }}
//         >
//           <Stack spacing={2} >
//             <Typography variant="h6" color={'#97dd9f'} gutterBottom>
//               Home
//             </Typography>
//             <InteractiveLink text="About" to="/about" />
//             <InteractiveLink text="Contact Us" to="/contact" />
//             <InteractiveLink text="Find A Job" to="/#popularSection" />
//             <InteractiveLink text="Hire Now" to="/verification" />
//           </Stack>

//           <Stack spacing={2}>
//             <Typography variant="h6"  color={'#97dd9f'} gutterBottom>
//               Support
//             </Typography>
//             <InteractiveLink text="Privacy Policy" to="/Privacypolicy" />
//             <InteractiveLink text="Terms and Conditions" to="/Termsandconditions" />
//           </Stack>

//           <Stack spacing={2}>
//             <Typography variant="h6"  color={'#97dd9f'} gutterBottom>
//               Explore on
//             </Typography>
//             <InteractiveLink text="DigiBeez" to="https://digibeez.in" />
//             <InteractiveLink text="Vrecruiters" to="https://www.vrecruiters.in" />
//           </Stack>

//           <Stack spacing={2}>
//             <Typography variant="h6"  color={'#97dd9f'} gutterBottom>
//               Knowledge
//             </Typography>
//             <InteractiveLink text="Interview Tips" to="/interviewtips" />
//             <InteractiveLink text="Events" to="/events" />
//           </Stack>
//         </Box>

//         {/* Social Media Section */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//             mt: { xs: 4, md: 0 },
//           }}
//         >
//           <Typography variant="h6">
//             Follow Us
//           </Typography>
//           <Stack direction="row" data-aos="flip-up" data-aos-delay="300">
//             <Socialmediaicon />
//           </Stack>
//         </Box>
//         <Stack direction="row" spacing={1} alignItems="center" mt={4}>
//           <Typography variant="body2" sx={{ fontSize: {xs:'12px', md:'16px'} }}>
//           Privacy Policy © 2025 Jobhub. All rights reserved
//           </Typography>
//           {/* <svg
//             role="img"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 30 14"
//             xmlSpace="preserve"
//             height="16"
//             width="43"
//           >
//             <title>Your Privacy Choices Opt-Out Icon</title>
//             <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#fff' }} />
//             <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#0be01b' }} />
//             <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style={{ fill: '#333' }} />
//             <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style={{ fill: '#333' }} />
//           </svg> */}
//         </Stack>
//       </Box>
//     </Box>
//   );
// }

// // Interactive Link Component
// const InteractiveLink = ({ text, to }) => {
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     if (to && to.includes('#')) {
//       e.preventDefault();
//       const [path, anchor] = to.split('#');
//       if (path) {
//         navigate(path);
//         setTimeout(() => {
//           const target = document.querySelector(`#${anchor}`);
//           if (target) target.scrollIntoView({ behavior: 'smooth' });
//         }, 500);
//       } else {
//         const target = document.querySelector(`#${anchor}`);
//         if (target) target.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <MuiLink
//       data-aos='fade-right'
//       component={Link}
//       to={to}
//       onClick={handleClick}
//       color='inherit'
//       underline='hover'
//       sx={{
//         cursor: 'pointer',
//         color:'#cae4cc',
//         fontSize: { xs: '14px', md: '16px' },
//         transition: 'color 0.3s',
//         '&:hover': { color: '#66bb6a' },
//       }}
//     >
//       {text}
//     </MuiLink>
//   );
// };
// import Logo from '/log.svg'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import jobhublogo from '/Jobhub_logo-transparent.png';
import jobhubFooterLogo from '/JobhubFooterlogo.png'
export default function Footer() {
  const formRef = useRef();

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fxhm458',
        'template_k1zf6ll',
        formRef.current,
        'xGGiT_8LYxsZzpBz4'
      )
      .then(
        (result) => {
          setSnackbarSeverity('success');
          setSnackbarMessage('Email sent successfully!');
          setSnackbarOpen(true);
          formRef.current.reset(); // Reset form after success
        },
        (error) => {
          setSnackbarSeverity('error');
          setSnackbarMessage('Failed to send email.');
          setSnackbarOpen(true);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };
  return (
    <footer className="bg-[#0f1e0f] text-white ">
      <div className="container mx-auto px-4">
        <div className="border-b border-[#008000] py-10">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#008000] text-2xl mt-2"></i>
                <div className="pl-4">
                  <h4 className="text-lg font-semibold mb-1">Find us</h4>
                  <span className="text-sm text-gray-400">25th Unit, 3rd Floor, Zirakpur, Punjab 140603</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6">
              <div className="flex items-start">
                <i className="fas fa-phone text-[#008000] text-2xl mt-2"></i>
                <div className="pl-4">
                  <h4 className="text-lg font-semibold mb-1">Call us</h4>
                  <span className="text-sm text-gray-400">+91 98187 37641 <br /> +91 90564 76584</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6">
              <div className="flex items-start">
                <i className="far fa-envelope-open text-[#008000] text-2xl mt-2"></i>
                <div className="pl-4">
                  <h4 className="text-lg font-semibold mb-1">Mail us</h4>
                  <span className="text-sm text-gray-400">jobhubportal@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-8">
              <div>
                <a href="/"><img src={jobhubFooterLogo} alt="logo" className="max-w-[200px] mb-6" /></a>
                <p className="text-sm text-gray-400 leading-7 mb-4">
                  Find Your Career With JOBHUB <br />
                  <span style={{ fontSize: '12px' }}>Comprehensive job portal designed to streamline the employment <br /> process for both job seekers and employers </span>
                </p>
                <span className="text-lg font-bold block mb-3">Follow us</span>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/people/JobHubworld/61575148695953/" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href='https://www.linkedin.com/in/jobhub-world-5559a7361/' target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] text-white">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href='https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw' target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] text-white">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 md:w-1/2 mb-8">
              <h3 className="text-lg font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-12 before:h-[2px] before:bg-[#008000]">
                Useful Links
              </h3>
              <ul className="flex flex-wrap">
                {/* {[
                  "Home", "About", "Services", "Portfolio", "Contact",
                  "About us", "Our Services", "Expert Team", "Contact us", "Latest News"
                ].map((link, index) => (
                 
                ))} */}
                <li className="w-1/2 mb-3">
                  <a href="/" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Home</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/about" className="text-gray-400 hover:text-[#008000] capitalize text-sm">About</a>
                </li>

                <li className="w-1/2 mb-3">
                  <a href="/contact" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Contact us</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#popularSection" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Fint a job</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/verification" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Hire Now</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/Privacypolicy" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Privacy Policy</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/Termsandconditions" className="text-gray-400 hover:text-[#008000] capitalize text-sm">T<span style={{ fontSize: '10px' }}>&</span>C</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/interviewtips" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Interview Tips</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/events" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Events</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="/candidatedashboard" className="text-gray-400 hover:text-[#008000] capitalize text-sm">Jobs</a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/3 md:w-1/2 mb-8">
              <h3 className="text-lg font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-12 before:h-[2px] before:bg-[#008000]">
                Subscribe
              </h3>
              <p className="text-sm text-gray-400 mb-6">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <form ref={formRef} onSubmit={sendEmail} className="relative">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full py-3 px-6 bg-[#1e2e1e] border border-[#1e2e1e] text-white text-sm outline-none"
                  required
                />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <button
                  type="submit"
                  className="absolute top-0 right-0 bg-[#008000] px-5 py-[3.6px] border border-[#008000]"
                >
                  <i className="fab fa-telegram-plane text-white text-xl -rotate-6 my-1"></i>
                </button>
              </form>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                  {snackbarMessage}
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a2a1a] py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left text-sm text-gray-400 mb-2 lg:mb-0">
            <p>
              Copyright © {new Date().getFullYear()}, All Right Reserved <a href="/" className="text-[#008000]">Jobhub</a>
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <li><a href="/" className="hover:text-[#008000]">Home</a></li>
            {/* <li><a href="#" className="hover:text-[#32CD32]">Terms</a></li> */}
            <li><a href="/Privacypolicy" className="hover:text-[#008000]">Privacy</a></li>
            <li><a href="/Privacypolicy" className="hover:text-[#008000]">Policy</a></li>
            <li><a href="/contact" className="hover:text-[#008000]">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
