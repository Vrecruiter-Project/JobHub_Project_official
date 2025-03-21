// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Modal,
//   Typography,
//   Card,
//   CardContent,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import WorkIcon from "@mui/icons-material/Work";
// import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
// import ReduceCapacityRoundedIcon from "@mui/icons-material/ReduceCapacityRounded";
// import jobhublogo from "../../../../../../assets/Images/logo.png";
// import { useNavigate } from "react-router-dom";
// import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
// import { toast } from "react-toastify";

// export const DashboardSidebar = () => {
//   const [active, setActive] = useState("Dashboards");
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleExit = () => {
//     // Log out logic, e.g., clearing user session, cookies, or tokens
//     localStorage.removeItem("token");
//     localStorage.removeItem("mobileNumber");
//     localStorage.removeItem("employee");
//     navigate("/");
//     toast.success("Logout");
//   };

//   const handleNavigation = (menu, path) => {
//     setActive(menu);
//     navigate(path);
//   };

//   const menuItems = [
//     { name: "Dashboard", icon: <DashboardIcon />, path: "/employerdashboard/" },
//     {
//       name: "Create New Job",
//       icon: <WorkOutlineRoundedIcon />,
//       path: "/employerdashboard/jobpostdetailsform",
//     },
//     { name: "My Jobs", icon: <WorkIcon />, path: "/employerdashboard/my-jobs" },
//     {
//       name: "All Candidates",
//       icon: <ReduceCapacityRoundedIcon />,
//       path: "/employerdashboard/all-candidates",
//     },
//     {
//       name: "Selected Candidates",
//       icon: <ReduceCapacityRoundedIcon />,
//       path: "/employerdashboard/selected-candidates",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         maxWidth: { xs: 240, sm: 240, md: 250 },
//         miniWidth: { xs: 240, sm: 240, md: 250 },
//         backgroundColor: "#f0f4f7",
//         minHeight: "100vh",
//         boxShadow: 3,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >

//       <Box>
//         <Box
//           component="img"
//           src={jobhublogo}
//           alt="Logo"
//           sx={{ width: 100, height: "auto" }}
//           onClick={() => navigate("/")}
//         />
//         <Box
//           sx={{
//             padding: "16px",
//             textAlign: "center",
//             backgroundColor: "#d9ebe6",
//           }}
//         >
//           <Box sx={{ fontWeight: "bold", fontSize: "14px", marginTop: "8px" }}>
//             Jobhub World
//           </Box>
//         </Box>
//         {/* Menu Items */}
//         <List>
//           {menuItems.map((item) => (
//             <ListItem key={item.name} disablePadding>
//               <ListItemButton
//                 onClick={() => handleNavigation(item.name, item.path)}
//                 sx={{
//                   backgroundColor:
//                     active === item.name ? "#4caf50" : "transparent",
//                   color: active === item.name ? "#fff" : "#000",
//                   "&:hover": {
//                     backgroundColor: "#4caf50",
//                     color: "#fff",
//                   },
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{ color: active === item.name ? "#fff" : "green" }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={item.name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Button
//           variant="contained"
//           color="error"
//           sx={{ px: 2, mx: 8, my: 3 }}
//           onClick={handleOpen}
//         >
//           <PowerSettingsNewRoundedIcon sx={{ mr: 1 }} /> Logout
//         </Button>

//         <Modal open={open} onClose={handleClose}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay effect
//             }}
//           >
//             <Card
//               sx={{
//                 maxWidth: 400,
//                 width: "100%",
//                 backgroundColor: "white",
//                 borderRadius: "8px",
//                 boxShadow: 3,
//                 textAlign: "center",
//                 padding: "20px",
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" sx={{ marginBottom: "20px" }}>
//                   Are you sure you want to logout?
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="success"
//                   sx={{ marginRight: "10px" }}
//                   onClick={handleExit}
//                 >
//                   Logout
//                 </Button>
//                 <Button variant="outlined" color="error" onClick={handleClose}>
//                   Cancel
//                 </Button>
//               </CardContent>
//             </Card>
//           </Box>
//         </Modal>
//       </Box>
//     </Box>
//   );
// };


import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import ReduceCapacityRoundedIcon from "@mui/icons-material/ReduceCapacityRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import jobhublogo from "../../../../../../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const DashboardSidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExit = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logged out successfully!");
  };

  const handleNavigation = (menu, path) => {
    setActive(menu);
    navigate(path);
  };

  const menuItems = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/employerdashboard/" },
    {
      name: "Create New Job",
      icon: <WorkOutlineRoundedIcon />,
      path: "/employerdashboard/jobpostdetailsform",
    },
    { name: "My Jobs", icon: <WorkIcon />, path: "/employerdashboard/my-jobs" },
    {
      name: "All Candidates",
      icon: <ReduceCapacityRoundedIcon />,
      path: "/employerdashboard/all-candidates",
    },
    {
      name: "Selected Candidates",
      icon: <ReduceCapacityRoundedIcon />,
      path: "/employerdashboard/selected-candidates",
    },
  ];

  return (
    <Box
      sx={{
        width: { xs: 240 },
        backgroundColor: "#f4f5f7",
        minHeight: "100vh",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Logo and Branding */}
      <Box>
        <Box
          component="img"
          src={jobhublogo}
          alt="Jobhub Logo"
          sx={{
            width: 120,
            height: "auto",
            mx: "auto",
            mt: 3,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "green",
            mb: 1,
          }}
        >
          Jobhub World
        </Typography>
        <Divider />
        {/* Menu Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.name, item.path)}
                sx={{
                  backgroundColor: active === item.name ? "green" : "transparent",
                  color: active === item.name ? "#fff" : "#000",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#4caf50",
                    color: "#fff",
                  },
                  transition: "background-color 0.3s ease",
                  mx: 1,
                  my: 0.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: active === item.name ? "#fff" : "green",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: active === item.name ? 900 : "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Logout Section */}
      <Box sx={{p: 1}}>
        <Divider />
        <Button
          variant="contained"
          color="error"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleOpen}
        >
          <PowerSettingsNewRoundedIcon sx={{ mr: 1 }} /> Logout
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <Card
              sx={{
                width: 400,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 5,
                textAlign: "center",
                p: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Are you sure you want to logout?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleExit}
                  >
                    Logout
                  </Button>
                  <Button variant="outlined" color="error" onClick={handleClose}>
                    Cancel
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};
