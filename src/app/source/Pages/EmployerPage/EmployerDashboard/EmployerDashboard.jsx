// import { Box, Button } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import React, { useState } from "react";
// import DashboardNav from "./Components/DashboardNavbar/DashboardNav";
// import { DashboardSidebar } from "./Components/DashboardSidebar/DashboardSidebar";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { Outlet } from "react-router-dom";
// import EmployeeForm from "../EmployeerForm";

// const EmployerDashboard = () => {
//   const token = localStorage.getItem("token");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return !token ? (
//     <EmployeeForm />
//   ) : (
//     <>
//       <Box
//         sx={{
//           height: "100vh",
//           width: "100%",

//           background:
//             "linear-gradient(to bottom, #ffffff, rgba(7, 188, 12, 0.3))",
//           overflowX: "hidden",
//           position: "relative", // Ensures toggle button stays positioned correctly
//         }}
//       >
//         {/* Sidebar and Navbar Grid */}
//         <Grid container sx={{ height: "100%" }}>
//           {/* Sidebar */}
//           {isSidebarOpen && (
//             <Grid
//               item
//               sx={{
//                 width: { xs: 240, sm: 240, md: 250 },
//                 transition: "width 0.3s ease",
//               }}
//             >
//               <DashboardSidebar
//                 isSidebarOpen={isSidebarOpen}
//                 toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//               />
//             </Grid>
//           )}

//           {/* Navbar */}
//           <Grid
//             item
//             sx={{
//               flexGrow: 1,
//               width: isSidebarOpen ? `calc(100% - ${250}px)` : "100%",
//               transition: "width 0.3s ease",
//             }}
//           >
//             <DashboardNav />
//             <Box sx={{
//               height: "calc(94.5vh - 64px)",
//               overflowY: "auto",
//               scrollbarWidth: "none",

//             }}>
//               <Outlet />
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Toggle Button */}
//         <Button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           sx={{
//             position: "absolute",
//             top: "30px",
//             left: isSidebarOpen ? `${220}px` : "-20px", // Adjust position based on sidebar state
//             zIndex: 10,
//             color: "green",
//             borderRadius: "5%",
//             // width: "10px",
//             // height: "30px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "left 0.3s ease",
//             "&:hover": {
//               backgroundColor: "#34A853",
//               color: "white",
//               boxShadow: "0px 4px 10px rgba(0, 128, 0, 0.3)",
//             },
//           }}
//         >
//           {isSidebarOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default EmployerDashboard;


// import React from 'react';
// import EmployeeForm from '../EmployeerForm';

// export default function EmployerDashboard() {

//   const handleLogout = () => {
//     //clear local storage and nevigate to home page
//     localStorage.clear();
//     window.location.href = '/';
//   }
//   const token = localStorage.getItem("token");


//   return !token ? (
//     <EmployeeForm />
//   ) : (

//     <div>
//       <h1 className="text-3xl font-bold mb-4">Employer Dashboard</h1>
//       <button
//         onClick={handleLogout}
//         className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }



import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import WorkIcon from '@mui/icons-material/Work';
import HailIcon from '@mui/icons-material/Hail';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDemoRouter } from '@toolpad/core/internal';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import Logo from '/log.svg';
// import DashboardPage from './HrComponents/DashboardPage';
import MyJobs from '../../EmployerPage/EmployerDashboard/Components/Main-Post-Card/MyJobs';
import AllCandidates from '../../EmployerPage/EmployerDashboard/Components/AllCandidates/AllCandidates';
// import SelectedCandidate from './HrComponents/SelectedCandidates';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import JobDetailsForm from './JobPostForm/JobDetailsForm';

const Navigation = [
    { kind: 'header', title: 'Employer Overview' },
    { segment: 'dashboard', title: 'DASHBOARD', icon: <DashboardIcon />, path: '/dashboard' },
    { segment: 'jobs', title: 'CREATE NEW JOB', icon: <WorkOutlineIcon />, path: '/jobs' },
    { segment: 'myjob', title: 'MY JOBS', icon: <WorkIcon />, path: '/myjob' },
    {
        segment: 'candidate', title: 'ALL CANDIDATE', icon: <HailIcon />,
        children: [
            { segment: 'allCandidates', title: 'All Candidates', icon: <GroupIcon />, path: '/candidate/allCandidates' },
            { segment: 'interestedCandidate', title: 'Interested Candidates', icon: <PersonIcon />, path: '/candidate/interestedCandidate' },
        ],
    },
    { segment: 'logout', title: 'Logout', icon: <LogoutIcon />, path: '/logout' },
];

const EmployerDashboard = () => {
    const router = useDemoRouter('/dashboard');

    const renderPage = () => {
        switch (router.pathname) {
            case '/dashboard':
                return "<DashboardPage />";
            case '/jobs':
                return<JobDetailsForm />;
            case '/myjob':
                return <MyJobs />;
            case '/candidate/allCandidates':
                return <AllCandidates />;
            case '/candidate/interestedCandidate':
                return "<SelectedCandidate />";
            case '/logout':
                // Handle logout logic here
                localStorage.removeItem('token');
                router.push('/'); // Redirect to login page
                return null;
            default:
                return <div>404 - Page Not Found</div>; // Fallback for unmatched routes
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

    return (
        <AppProvider
            authentication={{
                signIn: () => {
                    console.log('Sign in logic here');
                },
                signOut: () => {
                    localStorage.removeItem('token');
                    router.push('/login');
                },
            }}
            navigation={navigationWithActiveIcons}
            router={router}
            branding={{
              title: 'Job Hub',
              logo: <img className='w-10' src={Logo} alt='job hub' />,
          }}
          
          
        >
            <DashboardLayout>
                {renderPage()}
            </DashboardLayout>
        </AppProvider>
    );
};

export default EmployerDashboard;










