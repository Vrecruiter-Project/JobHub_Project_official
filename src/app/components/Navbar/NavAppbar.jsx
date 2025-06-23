import { gloabalTheme } from "../../theme/theme";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
// import jobhublogo from '../../assets/Images/logo2.svg';
import ButtonComponent from "../GlobalComponents/ButtonComponent/ButtonComponent";
import jobhublogo from "/Jobhub logo.png";

const pages = [
  { label: "Home", path: "/" },
  { label: "Jobs", path: "/candidatedashboard" },
  { label: "Build Resume", path: "/resume", external: true },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigate = (path, isExternal = false) => {
    if (isExternal) {
      window.location.href = "https://jobhub-resume-builder.vercel.app";
    } else {
      navigate(path);
    }
    setDrawerOpen(false);
  };

  const handleLogin = () => {
    window.open("https://admin.jobhub.world/", "_blank");
  };

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            position: "relative",
            // mt: { xs: 3, md: 3 },
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "black",
            height: "90px",

            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

            transition: "all 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Box
              component="img"
              src={jobhublogo}
              alt="Logo"
              sx={{
                width: { xs: "80px", sm: "100px", md: "100px", lg: "110px" },
                marginLeft: "50px",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => handleNavigate("/")}
            />

            {/* Desktop Menu */}
            {!isMobile && (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    onClick={() => handleNavigate(page.path, page.external)}
                    sx={{
                      fontSize: { md: '15px' , lg: '18px'},
                      color: isActiveRoute(page.path)
                        ? gloabalTheme.colors.primary
                        : "black",
                      fontWeight: 600,
                      "&:hover": { color: "green" },
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
               
              </Box>
            )}

            {/* Right - Login or Menu Icon */}
            <Box>
              {!isMobile ? (
                 <>
                <button
                  className="button relative px-6 py-1.5 text-lg text-white hover:text-black border border-green-600 rounded cursor-pointer overflow-hidden mr-[55px] font-semibold"
                  title="Login"
                  style={{backgroundColor: gloabalTheme.colors.primary}}
                  onClick={handleLogin}
                >
                  <span className="relative z-10">Login</span>
                </button>
                 </>
              ) : ( 
                <>
                <div className="flex items-center gap-4">
                  <a href='#popularSection' className="text-lg font-semibold underline text-green-800">Jobs</a>
                <IconButton
                  onClick={toggleDrawer(true)}
                  edge="end"
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                </div>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Spacer */}
      <Box sx={{ height: "90px" }} />

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            backgroundColor: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
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
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                    },
                  }}
                >
                  <ListItemText
                    primary={page.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1rem",
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
              mt: "auto",
              backgroundColor: "green",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#228B22",
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
