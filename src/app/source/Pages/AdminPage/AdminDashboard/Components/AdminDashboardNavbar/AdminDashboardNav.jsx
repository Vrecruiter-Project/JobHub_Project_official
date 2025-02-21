
import React, { useState } from 'react';
import {
  Badge,
  Box,
  Card,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import jobhublogo from '../../../../../../assets/Images/logo.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonComponent from '../../../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const AdminDashboardNav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // Dummy Data for Search Example
  const dummyData = [
    'Dashboard',
    'User Management',
    'Settings',
    'Notifications',
    'Reports',
    'Profile',
    'Logout',
  ];

  const handleDropdown = () => {
    setShow((prev) => !prev);
  };

  // Search Logic
  const handleSearch = () => {
    if (searchTerm.trim()) {
      const results = dummyData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Search Results:', results);
      alert(`Search Results: ${results.join(', ') || 'No results found'}`);
      setSearchTerm('');
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navStyles = {
    width: '100%',
    border: '2px solid transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background:
      'linear-gradient(90deg, rgba(240, 244, 247, 1) 0%, rgba(144, 238, 144, 1) 100%)',
    padding: '1px 9px',
  };

  const iconMenuStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  };

  return (
    <>
      {/* Desktop View */}
      <Box sx={{ ...navStyles, display: { xs: 'none', md: 'flex' } }}>
        <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 120, height: 'auto', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

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
              

              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#34A853',

                },
                '&:hover fieldset': {
                  borderColor: '#34A853',
                  
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#34A853',
               
                },
              },
            }}
          />
          <ButtonComponent
            title="Search"
            onClick={handleSearch}
            sx={{
              border: '1px solid #34A853',
              background: 'green',
              '&:hover': {
                backgroundColor: '#34A853',
              },
            }}
          />
        </Box>

        <Box sx={iconMenuStyles}>

          <IconButton
            size="large"
            aria-label="account options"
            color="inherit"
            onClick={handleMenuOpen}
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



        </Box>
      </Box>

      {/* Mobile View */}
      <Box sx={{ ...navStyles, display: { xs: 'flex', md: 'none' } }}>
        <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 100, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        <IconButton size="large" color="inherit" onClick={handleDropdown}>
          <MenuIcon />
        </IconButton>

        {show && (
          <Card
            sx={{
              position: 'absolute',
              top: '15%',
              height: '100vh',
              right: 0,
              width: '150px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 3,
            }}
          >
            <Box sx={iconMenuStyles}>
              <MenuItem>
                <IconButton size="large" aria-label="show notifications" color="inherit">
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton
                  size="large"
                  aria-label="account options"
                  color="inherit"
                  onClick={handleMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
              </MenuItem>
            </Box>
          </Card>
        )}
      </Box>

      {/* Account Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          style: { maxHeight: 48 * 4.5, width: '25ch' },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: 'green' }} />
          </ListItemIcon>
          <ListItemText>John</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContactMailIcon sx={{ color: 'green' }} />
          </ListItemIcon>
          <ListItemText>John321@gmail.com</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdminDashboardNav;
