
import { AppProvider } from '@toolpad/core';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import WorkIcon from '@mui/icons-material/Work';
import HailIcon from '@mui/icons-material/Hail';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDemoRouter } from '@toolpad/core/internal';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import GroupIcon from '@mui/icons-material/Group';
// import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import Logo from '/Jobhub_logo-transparent.png';
import MyJobs from '../../EmployerPage/EmployerDashboard/Components/Main-Post-Card/MyJobs';
import AllCandidates from '../../EmployerPage/EmployerDashboard/Components/AllCandidates/AllCandidates';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import JobDetailsForm from './JobPostForm/JobDetailsForm';
import EmployerForm from '../EmployeerForm';
// import { useNavigate } from 'react-router-dom';

import { employerLogout } from '../../../../service/operations/employeeApi';

import { Tooltip } from '@mui/material';
import {   Menu, Avatar } from '@mui/material';
import EmployerProfile from './Components/EmployerProfile/EmployerProfile';
import Cards from './Components/EmployerProfile/Dashboard/CardDashboard';



// Navigation configuration
const NAVIGATION = [
  { kind: 'header', title: 'Employer Overview' },
  { segment: 'dashboard', title: 'DASHBOARD', icon: <DashboardIcon />, path: '/dashboard' },
  { segment: 'jobs', title: 'CREATE NEW JOB', icon: <WorkOutlineIcon />, path: '/jobs' },
  { segment: 'myjob', title: 'MY JOBS', icon: <WorkIcon />, path: '/myjob' },
  {
    segment: 'candidate',
    title: 'ALL CANDIDATE',
    icon: <HailIcon />,
    // children: [
    //   { segment: 'allCandidates', title: 'All Candidates', icon: <GroupIcon />, path: '/candidate/allCandidates' },
    //   { segment: 'interestedCandidate', title: 'Interested Candidates', icon: <PersonIcon />, path: '/candidate/interestedCandidate' },
    // ],
  },
  { segment: 'logout', title: 'Logout', icon: <LogoutIcon />, path: '/logout' },
];


function ToolbarActionsSearch() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const employee = JSON.parse(localStorage.getItem('employee') || {});
  const avatar = employee.avatar || '/default-avatar.png';
  const name = employee.fullName || 'User';
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center gap-4">
      <ThemeSwitcher />
      {/* Profile */}
      <Tooltip title="Profile">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleClick}
        >
          <Avatar
            alt={name}
            src={avatar}
            sx={{
            }}
          />
          <div className="hidden md:block">
            <p className="font-medium text-sm">{name}</p>
          </div>
        </div>
      </Tooltip>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <EmployerProfile />
        
      </Menu>
    </div>
  );
}
const EmployerDashboard = () => {

  const router = useDemoRouter('/dashboard');
    const token = localStorage.getItem('token');
    
    
  // Redirect to root if no token (optional enhancement)
//   useEffect(() => {
//     if (!token && router.pathname !== '/login') {
//       router.push('/login'); // Redirect to login if no token
//     }
//   }, [token, router]);

  const renderPage = () => {
    switch (router.pathname) {
      case '/dashboard':
        return <Cards />;
      case '/jobs':
        return <JobDetailsForm />;
      case '/myjob':
        return <MyJobs />;
      case '/candidate/allCandidates':
        return <AllCandidates />;       
        case '/candidate':
          return <AllCandidates />;
      // case '/candidate/allCandidates':
      //   return <AllCandidates />;
      // case '/candidate/interestedCandidate':
      //   return "<SelectedCandidate />";
      case '/logout':
        localStorage.removeItem('token');
        router.push('/login'); // Consistent redirect to /login
        return null;
      default:
        return <JobDetailsForm />;
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await employerLogout();
      //console.log("Logged out successfully:", result.message);
      localStorage.clear();
      // navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isActive = (pathname, segment) => {
    return pathname === segment;
  };

  const navigationWithActiveIcons = NAVIGATION.map((item) => {
    if (item.segment === 'logout') {
      return {
        ...item,
        icon: React.cloneElement(item.icon, {
          onClick: () => handleLogout(),
        }),
        title: (
          <div
            style={{ padding: '10px', cursor: 'pointer' }}
            onClick={() => handleLogout()}
          >
            {item.title}
          </div>
        ),
      };
    }

    if (item.segment) {
      return {
        ...item,
        icon: React.cloneElement(item.icon, {
          style: { color: isActive(router.pathname, item.segment) ? 'green' : 'inherit' },
        }),
      };
    }
    if (item.children) {
      return {
        ...item,
        children: item.children.map((child) => ({
          ...child,
          icon: React.cloneElement(child.icon, {
            style: { color: isActive(router.pathname, child.segment) ? 'green' : 'inherit' },
          }),
        })),
      };
    }

    return item;
  });

  if (!token) {
    return <EmployerForm />;
  }



  return (
    <AppProvider
      
    
      navigation={navigationWithActiveIcons}
      router={router}
      branding={{
        title: ' ',
        logo: <img className="w-20 py-2" src={Logo} alt="job hub" />,
      }}
    >
      <DashboardLayout
        slots={{
          toolbarActions: ToolbarActionsSearch
      }}
      >{renderPage()}</DashboardLayout>
    </AppProvider>
  );
};

export default EmployerDashboard;