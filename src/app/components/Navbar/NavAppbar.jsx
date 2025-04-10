import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import jobhublogo from '../../assets/Images/logo2.svg';
import ButtonComponent from '../GlobalComponents/ButtonComponent/ButtonComponent';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/candidatedashboard' },
  { label: 'Build Resume', path: '/resume', external: true },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

// Slide hide-on-scroll helper
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md = 960px

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigate = (path, isExternal = false) => {
    if (isExternal) {
      window.location.href = 'https://resume-creator.jobhub.world/';
    } else {
      navigate(path);
    }
    setDrawerOpen(false);
  };

  const handleLogin = () => {
    window.open('https://jobhubadmin.vercel.app/', '_blank');
  };

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: 'black',
            height: '90px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid #dadada',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component="img"
              src={jobhublogo}
              alt="Logo"
              sx={{ width: 100, height: 'auto', cursor: 'pointer' }}
              onClick={() => handleNavigate('/')}
            />

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    onClick={() => handleNavigate(page.path, page.external)}
                    sx={{
                      color: isActiveRoute(page.path) ? 'green' : 'black',
                      fontWeight: 600,
                      '&:hover': { color: 'green' },
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
                <ButtonComponent
                  title="Login"
                  onClick={handleLogin}
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: 'green',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
              </Box>
            )}

            {/* Mobile Hamburger Icon */}
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Spacer */}
      <Box sx={{ height: '90px' }} />

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            backgroundColor: '#fff',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: 4 }}>
            <Box
              component="img"
              src={jobhublogo}
              sx={{ width: 100 }}
              alt="Logo"
            />
          </Box>


          {/* Nav Links */}
          <List>
            {pages.map((page) => (
              <ListItem key={page.label} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigate(page.path, page.external)}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    '&:hover': {
                      backgroundColor: '#f1f1f1',
                    },
                  }}
                >
                  <ListItemText
                    primary={page.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            variant="contained"
            sx={{
              mt: 'auto',
              backgroundColor: 'green',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#228B22',
              },
            }}
          >
            Login
          </Button>
        </Box>

      </Drawer>
    </>
  );
};

export default NavDrawer;
