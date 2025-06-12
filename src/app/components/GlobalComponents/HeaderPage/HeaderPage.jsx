// import { Box, Button, Grid2, InputAdornment, MenuItem, Select, styled, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import '../../../../../src/index.css';
// import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';
// import AOS from 'aos';
// import { useEffect } from 'react';
// import 'aos/dist/aos.css';
// import { ArrowDropDown, ArrowDropDownCircleOutlined, BusinessCenterOutlined, InfoOutlined, LocationCity, Search } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const HtmlTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 220,
//     fontSize: theme.typography.pxToRem(12),
//     border: '1px solid #dadde9',
//   },
// }));

// const HeaderPage = ({ backgroundImage, headerText, subText, buttonTitle1, buttonTitle2, onButtonClick1, onButtonClick2, imgSrc, button2, style }) => {

//   const [searchText, setSearchText] = useState('');
//   const navigate = useNavigate();
//     // navigation to /candidatedashboard
//     const handleSearch = () => {
//       // Example: Navigate with query parameter
//       navigate(`/candidatedashboard?search=${encodeURIComponent(searchText)}`);
//     };

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <Box sx={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "100%",
//         backgroundSize: "cover",
//         width: '100%',
//         py: { xs: 5, sm: 3 },
//         height: "auto",
//       }}>
//         <Grid2 container
//           sx={{
//             width: "81%",
//             margin: "auto",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexDirection: { xs: "column", md: "row" },
//           }}
//         >

//           {/* Content Section */}

//           <Grid2 item xs={12} md={6} sx={{
//             width: { xs: "none", sm: "none", md: "50%" },
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             flexDirection: "column",
//           }}>

//             <Typography data-aos="zoom-out"
//               data-aos-easing="ease-in-back"
//               data-aos-delay="500"
//               variant="h1"
//               sx={{
//                 width: { sm: "80%", md: "100%" },
//                 fontWeight: "bold",
//                 fontFamily: "Roboto, sans-serif",
//                 textAlign: { xs: "center", md: "left" },
//                 fontSize: { xs: "40px", sm: "50px", md: "55px" },
//               }}
//             >
//               {headerText}
//             </Typography>

//             <Typography
//               sx={{
//                 width: "100%",
//                 fontSize: "19px",
//                 fontFamily: '"Roboto", sans-serif',
//                 fontWeight: "bold",
//                 textAlign: { xs: "center", md: "left" },
//                 color: "text.primary",
//                 pt: { xs: 2 }
//               }}
//             >
//               {subText}
//             </Typography>
//             <Box
//               sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "flex-start" }, pt: "14%", }}
//             >
//               <div data-aos="zoom-in" >
//                 <div className='flex items-center gap-1  border-2 border-gray-300 rounded-md p-1'>
//                   {/* Search Jobs Dropdown */}
//                   <TextField
//                     placeholder="Search jobs"
//                     variant="outlined"
//                     value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//                     slotProps={{
//                       input: {
//                         startAdornment: <Search sx={{ mb: 0.2 }} />,
//                       },
//                     }}
//                     sx={{
//                       width: { xs: "100%", sm: "100%", md: "130px" },
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': {
//                           border: 'none',
//                         },
//                       },
//                     }}
//                   />

//                   {/* Experience Dropdown */}
//                   <Select
//                     displayEmpty
//                     defaultValue=""
//                     startAdornment={
//                       <InputAdornment position="start">
//                         <BusinessCenterOutlined sx={{ mb: 0.2 }} />
//                       </InputAdornment>
//                     }
//                     sx={{
//                       display: { xs: "none", sm: "none", md: "flex" },
//                       width: { xs: "100%", sm: "100%", md: "155px" },
//                       backgroundColor: 'white',
//                       '& fieldset': { border: 'none' },
//                     }}
//                   >
//                     <MenuItem value="" disabled >Experience</MenuItem>
//                     <MenuItem value="fresher">Fresher</MenuItem>
//                     <MenuItem value="1">1 Year</MenuItem>
//                     <MenuItem value="2">2 Years</MenuItem>
//                     <MenuItem value="3">3+ Years</MenuItem>
//                   </Select>

//                   {/* City Dropdown */}
//                   <Select
//                     displayEmpty
//                     defaultValue=""
//                     startAdornment={
//                       <InputAdornment position="start">
//                         <LocationCity sx={{ mb: 0.2 }} />
//                       </InputAdornment>
//                     }
//                     sx={{
//                       display: { xs: "none", sm: "none", md: "flex" },
//                       width: { xs: "100%", sm: "100%", md: "180px" },
//                       backgroundColor: 'white',
//                       '& fieldset': { border: 'none' },
//                     }}
//                   >
//                     <MenuItem value="" disabled>Search for City</MenuItem>
//                     <MenuItem value="delhi">Delhi</MenuItem>
//                     <MenuItem value="mumbai">Mumbai</MenuItem>
//                     <MenuItem value="bangalore">Bangalore</MenuItem>
//                     <MenuItem value="chandigarh">Chandigarh</MenuItem>
//                   </Select>

//                   {/* Search Button */}
//                   <button
//                   onClick={handleSearch}
//                     className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </Box>
//             {button2 && (
//               <div data-aos="zoom-in">
//                 <div className='flex items-center mt-1'>
//                   <HtmlTooltip
//                     title={
//                       <React.Fragment>
//                         <Typography color="inherit">Employer with <span className='text-green-500 font-extrabold'>JOBHUB</span></Typography>
//                         <em>{"can"}</em> <b>{'post'}</b> <u>{'Jobs'}</u>{' '} <b>{'browse'}</b> <u>{'Candidate profile'}</u>. And more!
//                       </React.Fragment>
//                     }
//                   >
//                     <InfoOutlined sx={{fontSize:'14px',color:"#333"}}/>
//                   </HtmlTooltip>
//                   <Typography sx={{fontSize:'10px', marginRight:'4px'}}>For Employer</Typography>
//                   <ButtonComponent
//                   sx={{
//                     backgroundColor: "#4CAF50"}}
//                     title={buttonTitle2}
//                     onClick={onButtonClick2}
//                   />
//                 </div>
//               </div>)}
//           </Grid2>

//           {/* Image Section */}
//           <Grid2 data-aos="flip-right" data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"

//             item xs={12} md={6} sx={{
//               width: { xs: "none", sm: "none", md: "50%" },
//               display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
//               justifyContent: { xs: "center", md: "flex-end" },
//               mt: { xs: 4, md: 0 },
//             }}>
//             <img src={imgSrc} style={style} alt="HeaderImage" />
//           </Grid2>
//         </Grid2>
//       </Box>
//     </>
//   );
// };

// export default HeaderPage;

import { Box, Grid2, TextField, Typography } from "@mui/material";
import React from "react";

import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { gloabalTheme } from "../../../theme/theme.js";

const HeaderPage = ({
  backgroundImage,
  headerText,
  subText,
  buttonTitle1,
  buttonTitle2,
  onButtonClick1,
  onButtonClick2,
  imgSrc,
  button2,
  style,
  onSearchReady,
}) => {
  useEffect(() => {
    AOS.init();

    const param1 = headerText.props.children[0];
    const param2 = headerText.props.children[1].props.children;
    const searchFor = param1 + param2;

    if (onSearchReady) {
      onSearchReady(searchFor);
    }
  }, [headerText, onSearchReady]);
  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100%",
          backgroundSize: "cover",
          width: "100%",

          height: "auto",
        }}
      >
        <Grid2
          container
          sx={{
            width: "80%",
            pb:{xs: '25px',sm:'25px',md:'0',lg:'0'},
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Content Section */}

          <Grid2
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "none", sm: "none", md: "50%" },
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              data-aos="zoom-out"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
              variant="h1"
              sx={{
                width: { sm: "80%", md: "100%" },

                fontWeight: "bold",
                color: "white",
                fontFamily: "Roboto, sans-serif",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "40px", sm: "50px", md: "55px" },
                pt: { xs: 5, sm: 10 },
              }}
            >
              {headerText}
            </Typography>

            <Typography
              sx={{
                width: "100%",

                fontSize: "19px",
                fontFamily: '"Roboto", sans-serif',
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                color: "white",
                pt: { xs: 2 },
              }}
            >
              {subText}
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", md: "flex-start" },
                pt: "14%",
              }}
            >
              <div data-aos="zoom-in">
                <ButtonComponent
                  title={buttonTitle1}
                  onClick={onButtonClick1}
                  sx={{
                    background: "green",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    height: "50px",
                    width: { xs: "100%", sm: "auto" },
                    py: 3.5,
                    px: 6,
                    fontSize: "14px",
                  }}
                />
              </div>
              {button2 && (
                <div data-aos="zoom-in">
                  <ButtonComponent
                    title={buttonTitle2}
                    onClick={onButtonClick2}

                    // sx={{
                    //   background: "green",
                    //   border: 0,
                    //   borderRadius: 1,
                    //   boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    //   color: "white",
                    //   height: "50px",
                    //   width: { xs: "100%", sm: "auto" },
                    //   py: 3.5,
                    //   px: { lg: 6 },
                    //   mt: { xs: 2, sm: 2, md: 0, lg: 0 },
                    //   mx: { xs: 0, sm: 0, md: 2, lg: 2 },
                    //   fontSize: "14px",
                    // }}
                  />
                </div>
              )}
            </Box>
          </Grid2>

          {/* Image Section */}
          <Grid2
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "none", sm: "none", md: "50%" },
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <div className=" max-lg:hidden flex relative">
              <div className="w-full overflow-hidden flex justify-center items-center">
                <Box
                  component="img"
                  src={imgSrc}
                  alt="find your career with jobhub world"
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                    width: { sm: "30%", md: "100%" },
                    height: "auto",
                    mt: 10,
                  }}
                  className="image_animation"
                />
              </div>
              <div
                className="absolute -bottom-[0] left-0 right-0 h-[20%] pointer-events-none animate-pulse"
                style={{
                  background: `linear-gradient(to top, ${gloabalTheme.colors.primary} , transparent)`,
                }}
              />
            </div>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default HeaderPage;
