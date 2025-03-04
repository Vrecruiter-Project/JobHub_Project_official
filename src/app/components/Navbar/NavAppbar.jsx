import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import jobhublogo from '../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../GlobalComponents/ButtonComponent/ButtonComponent';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/candidatedashboard' },
  { label: 'Build Resume', path: '/resume', external: true }, // Add path and external flag
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

function NavAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation(); // For tracking current location

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path, isExternal = false) => {
    if (isExternal) {
      window.location.href = 'https://resume-creator.jobhub.world/';
    } else {
      navigate(path);
    }
    handleCloseNavMenu();
  };

  const handleLogin = () => {
    window.open('https://jobhubadmin.vercel.app/', '_blank');
  };


  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: 'black',
          height: '90px',
          transition: 'transform 0.3s ease-in-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid #dadada',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component="img"
              src={jobhublogo}
              alt="Logo"
              sx={{
                display: { xs: 'none', md: 'flex' },
                width: 100,
                height: 'auto',
                cursor: 'pointer',
              }}
              onClick={() => handleNavigate('/')}
            />

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={() => handleNavigate(page.path, page.external)}>
                    <Typography textAlign="center">
                      {isActiveRoute(page.path) && page.label === 'Build Resume' ? (
                        <span>{page.label}</span>
                      ) : (
                        page.label
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for Mobile */}
            <Box
              component="img"
              src={jobhublogo}
              alt="Logo"
              sx={{
                display: { xs: 'flex', md: 'none' },
                width: 80,
                height: 'auto',
                cursor: 'pointer',
                marginRight: 'auto',
              }}
              onClick={() => handleNavigate('/')}
            />

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => handleNavigate(page.path, page.external)}
                  sx={{
                    my: 2,
                    color: isActiveRoute(page.path) ? 'green' : 'black',
                    display: 'block',
                    position: 'relative',
                    padding: '10px 15px',
                    fontWeight: 600,
                    '&:hover': {
                      color: 'green',
                    },
                    '&::after': {
                      content: isActiveRoute(page.path) ? '""' : 'none',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: isActiveRoute(page.path) ? '100%' : '0',
                      height: '2px',
                      backgroundColor: '#34a853',
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {isActiveRoute(page.path) && page.label === 'Build Resume' ? (
                    page.label
                  ) : (
                    page.label
                  )}
                </Button>
              ))}
            </Box>

            {/* Login Button */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: 2 }}>
              <ButtonComponent
                title="Login"
                onClick={handleLogin}
                sx={{
                  px: 4,
                  py: 1.5,
                  backgroundColor: 'green',
                  color: 'white',
                  fontWeight: 'bold',
                  border: '1px solidrgb(24, 150, 57)',
                }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Placeholder to avoid content overlap */}
      <Box sx={{ height: '90px' }} />
    </>
  );
}

export default NavAppBar;
