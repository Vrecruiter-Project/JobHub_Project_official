import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';   
import jobhublogo from '../../../../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';

export const CandidateDashboardSidebar = () => {
  const [active, setActive] = useState("Dashboards");
  const navigate = useNavigate();

  const handleNavigation = (menu) => {
    setActive(menu);
    console.log(`${menu} clicked`);
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Place", icon: <PeopleIcon /> },
    { name: "Salary", icon: <WorkIcon /> },
    { name: "Experience", icon: <CalendarTodayIcon /> }
  ];

  return (
    <Box
      sx={{
        maxWidth: {xs: 240, sm: 240, md: 250},
        miniWidth: {xs: 240, sm: 240, md: 250},
        backgroundColor: '#f0f4f7',
        height: '100vh',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
      <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 100, height: 'auto' }}
          onClick={() => navigate('/')}
        /> 
        <Box
          sx={{
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#d9ebe6',
          }}
        >
          <Box sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>Jobhub World</Box>
        </Box>
        {/* Menu Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.name)}
                sx={{
                  backgroundColor: active === item.name ? '#4caf50' : 'transparent',
                  color: active === item.name ? '#fff' : '#000',
                  '&:hover': {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                  },
                }}
              >
                <ListItemIcon sx={{ color: active === item.name ? '#fff' : 'green' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};