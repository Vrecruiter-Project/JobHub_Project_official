// import React, { useState } from 'react';
// import { Badge, Box, Button, Card, IconButton, MenuItem, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import jobhublogo from '../../../../../assets/Images/logo.png';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MenuIcon from '@mui/icons-material/Menu';
// import ButtonComponent from '../../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';

// const CandidateDashboardNav = () => {
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleDropdown = () => {
//     setShow((prev) => !prev);
//   };

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       console.log(`Searching for: ${searchTerm}`);
//       setSearchTerm('');
//     }
//   };

//   // Common styles
//   const navStyles = {
//     width: '100%',
//     border: '2px solid transparent',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     background:
//       'linear-gradient(90deg, rgba(240, 244, 247, 1) 0%, rgba(144, 238, 144, 1) 100%)',
//     padding: '10px 20px',
//   };

//   const iconMenuStyles = {
//     maxWidth: '200px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   };

//   return (
//     <>
//       {/* Desktop View */}
//       <Box sx={{ ...navStyles, display: { xs: 'none', md: 'flex' } }}>
//         {/* Logo */}
//         <Box
//           component="img"
//           src={jobhublogo}
//           alt="Logo"
//           sx={{ width: 120, height: 'auto', cursor: 'pointer' }}
//           onClick={() => navigate('/')}
//         />

//         {/* Search Bar */}
//         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, margin: '20px' }}>
//           <TextField
//             variant="outlined"
//             placeholder="Search..."
//             size="small"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{
//               flexGrow: 1,
//               marginRight: '10px',
//               borderRadius: "10%",
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: 'green', // No border initially
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#34A853', // Add hover styling if needed
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#34A853', // No border when focused
//                   boxShadow: 'none', // Remove shadow
//                 },
//               },
//             }}
//           />
//           <ButtonComponent
//             title="Search"
//             onClick={handleSearch}
//             search
//             sx={{
//               my: 3,
//               px: { lg: 3 },
//               display: 'block',
//               border: '1px solid #34A853',
//               py: 1,
//               background: "green",
//               transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//               '&:hover': {
//                 color: 'white',
//                 backgroundColor: '#34A853',
//                 boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
//               },
//               '&:active': {
//                 transform: 'scale(0.95)',
//               },
//             }}
//           />
//         </Box>

//         {/* Icons */}
//         <Box sx={iconMenuStyles}>
//           <MenuItem>
//             <Button variant='contained' fullWidth sx={{color: "white", background: "green"}} >Sort</Button>
//           </MenuItem>
//           <MenuItem>
//             <Button variant='contained' fullWidth sx={{color: "white", background: "green"}} >Filter</Button>
//           </MenuItem>
//         </Box>


//       </Box>

//       {/* Mobile View */}
//       <Box sx={{ ...navStyles, display: { xs: 'flex', md: 'none' } }}>
//         <Box
//           component="img"
//           src={jobhublogo}
//           alt="Logo"
//           sx={{ width: 100, height: 'auto', cursor: 'pointer' }}
//           onClick={() => navigate('/')}
//         />

//         <IconButton size="large" edge="start" color="inherit" onClick={handleDropdown}>
//           <MenuIcon />
//         </IconButton>

//         {/* Dropdown Menu */}
//         {show && (
//           <Card
//             sx={{
//               position: 'absolute',
//               top: '15%',
//               right: 0,
//               width: '100px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               boxShadow: 3,
//             }}
//           >
//             <MenuItem>
//               <IconButton size="large" aria-label="show notifications" color="inherit">
//                 <Badge badgeContent={17} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//             </MenuItem>
//             <MenuItem>
//               <IconButton size="large" aria-label="account options" color="inherit" onClick={() => navigate("/employerdashboard/employerprofile")}>
//                 <AccountCircle/>
//               </IconButton>
//             </MenuItem>
//           </Card>
//        )}
//       </Box>
//       {/* <PostCard/> */}
//     </>
//   );
// };

// export default CandidateDashboardNav;






import React, { useState } from 'react';
import { Badge, Box, Button, Card, IconButton, MenuItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import jobhublogo from '../../../../../assets/Images/logo.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonComponent from '../../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';

const CandidateDashboardNav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDropdown = () => {
    setShow((prev) => !prev);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
      setSearchTerm('');
    }
  };

  // Common styles
  const navStyles = {
    //  width: '100%',
    //  border: '2px solid transparent',
    // display: 'flex',
    // alignItems: 'center',
    //justifyContent: 'space-between',
    //  background:'linear-gradient(90deg, rgba(240, 244, 247, 1) 0%, rgba(144, 238, 144, 1) 100%)',
    background: ''
  };

  return (
    <>
      {/* Desktop View */}
      <Box sx={{ ...navStyles, display: { xs: 'none', md: 'flex' } }}>


        {/* Search Bar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, margin: '0px 10px 10px 20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                flexGrow: 1,
                marginRight: '10px',
                borderRadius: "10%",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'green',
                  },
                  '&:hover fieldset': {
                    borderColor: '#34A853',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#34A853',
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <ButtonComponent
              title="Search"
              onClick={handleSearch}
              search
              sx={{
                my: 3,
                px: { lg: 3 },
                display: 'block',
                border: '1px solid #34A853',
                py: 1,
                background: "green",
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#34A853',
                  boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
            />
          </Box>


          {/* Job Filters */}
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              select
              backgroundColor="#f1f1f1"
              label="Work Mode"
              variant="outlined"
              size="small"
              sx={{
                width: '10%',
                backgroundColor: "#f1f1f1"
              }}

            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Onsite">Onsite</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </TextField>
            <TextField
              select
              label="Location"
              variant="outlined"
              size="small"
              sx={{
                width: '10%',
                backgroundColor: "#f1f1f1"
              }}
            >
              <MenuItem value="Chicago">Chandigarh</MenuItem>
              <MenuItem value="New York">Zirkpur</MenuItem>
              <MenuItem value="San Francisco">Mohali</MenuItem>
              <MenuItem value="San Francisco">Panchkula</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </TextField>
            <TextField
              select
              label="Salary"
              variant="outlined"
              size="small"
              sx={{
                width: '10%',
                backgroundColor: "#f1f1f1"
              }}
            >
              <MenuItem value="0-10k">0-10k</MenuItem>
              <MenuItem value="30k-70k">30k-70k</MenuItem>
              <MenuItem value="30k-70k">30k-70k</MenuItem>
              <MenuItem value="70+">70k-100K</MenuItem>
              <MenuItem value="70+">100K+</MenuItem>
            </TextField>
            <TextField
              select
              label="Experience"
              variant="outlined"
              size="small"
              sx={{
                width: '10%',
                backgroundColor: "#f1f1f1"
              }}
            >
              <MenuItem value="Fresher">Fresher</MenuItem>
              <MenuItem value="1-2 years">1-2 years</MenuItem>
              <MenuItem value="3-5 years">3-5 years</MenuItem>
              <MenuItem value="5+ years">5+ years</MenuItem>
            </TextField>
          </Box>

        </Box>

      </Box>

      {/* Mobile View */}
      {/* <Box sx={{ ...navStyles, display: { xs: 'flex', md: 'none' } }}>
        <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 100, height: 'auto', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        <IconButton size="large" edge="start" color="inherit" onClick={handleDropdown}>
          <MenuIcon />
        </IconButton>

       
        {show && (
          <Card
            sx={{
              position: 'absolute',
              top: '15%',
              right: 0,
              width: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 3,
            }}
          >
            <MenuItem>
              <IconButton size="large" aria-label="show notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            <MenuItem>
              <IconButton size="large" aria-label="account options" color="inherit" onClick={() => navigate("/employerdashboard/employerprofile")}>
                <AccountCircle />
              </IconButton>
            </MenuItem>
          </Card>
        )}
      </Box>  */}
    </>
  );
};

export default CandidateDashboardNav;
