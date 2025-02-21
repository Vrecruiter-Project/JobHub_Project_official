import React, { useState } from 'react';
import { Badge, Box, Card, IconButton, MenuItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import jobhublogo from '../../../../../../assets/Images/logo.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonComponent from '../../../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';

const DashboardNav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDropdown = () => {
    setShow((prev) => !prev);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
      setSearchTerm('');
    }
  };

  // Common styles
  const navStyles = {
    width: '100%',
    border: '2px solid transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background:
      'linear-gradient(90deg, rgba(240, 244, 247, 1) 0%, rgba(144, 238, 144, 1) 100%)',
    //background: "white",
    padding: '1px 9px',
  };

  const iconMenuStyles = {
    maxWidth: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  };

  return (
    <>
      {/* Desktop View */}
      <Box sx={{ ...navStyles, display: { xs: 'none', md: 'flex' } }}>
        {/* Logo */}
        <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 100, height: 'auto', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, margin: '0 20px' }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              flexGrow: 1,
              marginRight: '10px',
              borderRadius: "10%",
              
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#34A853',

                },
                '&:hover fieldset': {
                  borderColor: '#34A853',
                  
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#34A853',
                  boxShadow: 'none',
                },
              },
            }}
          />
          <ButtonComponent
            title="Search"
            onClick={handleSearch}
            search
            sx={{
              my: 3,
              px: { lg: 3 },
              display: 'block',
              border: '1px solid #34A853',
              py: 1,
              background: "green",
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                color: 'white',
                backgroundColor: '#34A853',
                boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          />
        </Box>

        {/* Icons */}
        <Box sx={iconMenuStyles}>

          <MenuItem>
            {/* <IconButton size="large" aria-label="account options" color="inherit" onClick={() => navigate("/employerdashboard/employerprofile")}>
              <AccountCircle />
            </IconButton> */}

            <IconButton
              size="large"
              aria-label="account options"
              color="inherit"
              onClick={() => navigate("/employerdashboard/employerprofile")}
              sx={{
                '&:hover': {
                  color: '#34A853', // Change color on hover
                  transform: 'scale(1.1)', // Slight zoom effect on hover
                },
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}
            >
              <AccountCircle sx={{ fontSize: 50 }} /> {/* Custom icon size */}
            </IconButton>




          </MenuItem>
        </Box>
      </Box>

      {/* Mobile View */}
      <Box sx={{ ...navStyles, display: { xs: 'flex', md: 'none' } }}>
        <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 100, height: 'auto', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        <IconButton size="large" edge="start" color="inherit" onClick={handleDropdown}>
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        {show && (
          <Card
            sx={{
              position: 'absolute',
              top: '15%',
              right: 0,
              width: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 3,
            }}
          >
            <MenuItem>
              <IconButton size="large" aria-label="show notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            <MenuItem>
              <IconButton size="large" aria-label="account options" color="inherit" onClick={() => navigate("/employerdashboard/employerprofile")}>
                <AccountCircle />
              </IconButton>
            </MenuItem>
          </Card>
        )}
      </Box>
      {/* <PostCard/> */}
    </>
  );
};

export default DashboardNav;




