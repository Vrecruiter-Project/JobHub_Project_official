import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import WorkIcon from '@mui/icons-material/Work';
import HailIcon from '@mui/icons-material/Hail';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDemoRouter } from '@toolpad/core/internal';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect } from 'react';
import Logo from '/log.svg';
import MyJobs from '../../EmployerPage/EmployerDashboard/Components/Main-Post-Card/MyJobs';
import AllCandidates from '../../EmployerPage/EmployerDashboard/Components/AllCandidates/AllCandidates';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import JobDetailsForm from './JobPostForm/JobDetailsForm';
import EmployerForm from '../EmployeerForm'; 

// Navigation configuration
const Navigation = [
  { kind: 'header', title: 'Employer Overview' },
  { segment: 'dashboard', title: 'DASHBOARD', icon: <DashboardIcon />, path: '/dashboard' },
  { segment: 'jobs', title: 'CREATE NEW JOB', icon: <WorkOutlineIcon />, path: '/jobs' },
  { segment: 'myjob', title: 'MY JOBS', icon: <WorkIcon />, path: '/myjob' },
  {
    segment: 'candidate',
    title: 'ALL CANDIDATE',
    icon: <HailIcon />,
    children: [
      { segment: 'allCandidates', title: 'All Candidates', icon: <GroupIcon />, path: '/candidate/allCandidates' },
      { segment: 'interestedCandidate', title: 'Interested Candidates', icon: <PersonIcon />, path: '/candidate/interestedCandidate' },
    ],
  },
  { segment: 'logout', title: 'Logout', icon: <LogoutIcon />, path: '/logout' },
];

const EmployerDashboard = () => {
  const router = useDemoRouter('/dashboard');
  const token = localStorage.getItem('token');

  // Redirect to root if no token (optional enhancement)
  useEffect(() => {
    if (!token && router.pathname !== '/login') {
      router.push('/login'); // Redirect to login if no token
    }
  }, [token, router]);

  const renderPage = () => {
    switch (router.pathname) {
      case '/dashboard':
        return" <DashboardPage />";
      case '/jobs':
        return <JobDetailsForm />;
      case '/myjob':
        return "<MyJobs />";
      case '/candidate/allCandidates':
        return <AllCandidates />;
      case '/candidate/interestedCandidate':
        return "<SelectedCandidate />";
      case '/logout':
        localStorage.removeItem('token');
        router.push('/login'); // Consistent redirect to /login
        return null;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  const navigationWithActiveIcons = Navigation.map((item) => {
    if (item.segment) {
      return {
        ...item,
        icon: React.cloneElement(item.icon, {
          style: { color: router.pathname === item.path ? 'green' : 'inherit' },
        }),
      };
    }
    if (item.children) {
      return {
        ...item,
        children: item.children.map((child) => ({
          ...child,
          icon: React.cloneElement(child.icon, {
            style: { color: router.pathname === child.path ? 'green' : 'inherit' },
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
      authentication={{
        signIn: () => {
          console.log('Sign in logic here');
        },
        signOut: () => {
          localStorage.removeItem('token');
          window.location.href = '/';
        },
      }}
      navigation={navigationWithActiveIcons}
      router={router}
      branding={{
        title: 'Job Hub',
        logo: <img className="w-10" src={Logo} alt="job hub" />,
      }}
    >
      <DashboardLayout>{renderPage()}</DashboardLayout>
    </AppProvider>
  );
};

export default EmployerDashboard;