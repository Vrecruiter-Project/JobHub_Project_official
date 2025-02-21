import { Box, styled } from '@mui/material';
import React from 'react'
import NavAppBar from '../Navbar/NavAppbar';
import Footer from './Footer';

const Page = styled(Box)(({ theme }) => ({
    position: "relative",
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(0),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(0),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(0),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  }));
const PageComponent = ({children}) => {
  return (
    <>
        <Box  sx={{
            bgcolor: "transparent",
            scrollBehavior: "smooth",
            width: "100%",
            height: "100%",
            opacity: "100%",
          }}>
        <NavAppBar/>
        {children}
        <Footer/>
        </Box>
    </>
  )
}

export default PageComponent;