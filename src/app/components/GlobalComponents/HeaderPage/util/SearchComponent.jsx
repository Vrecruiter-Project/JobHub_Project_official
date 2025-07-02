import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Tooltip,
  tooltipClasses,
  Typography,
  styled,
  List,
  ListItem,
  Paper,
} from "@mui/material";

import {
  BusinessCenterOutlined,
  InfoOutlined,
  LocationCity,
  Search,
} from "@mui/icons-material";

// import bgImg from "../../../../assets/Images/bgImages/Banner_image.svg";
import HeaderImage from "../../../../assets/Images/headerImages/HeaderImage01_1.webp";
import HeaderImage2 from "../../../../assets/Images/headerImages/HeaderImage02.png";
import "../../../../../../src/index.css";
import { gloabalTheme } from "../../../../theme/theme";
import arrowpng from "/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from './premium_photo-1682089787056-9ac0c78a2ac2.webp'
import img2 from './premium_photo-1682089804117-cea5d901647f.webp'
import img3 from './premium_photo-1689539137236-b68e436248de.webp'
import img4 from './premium_photo-1691030256264-59cdf9414ed1.webp'
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const avatarStyles = [
  {
    url: img1,
    alt: "Avatar 1",
  },
  {
    url: img2,
    alt: "Avatar 2",
  },
  {
    url: img3,
    alt: "Avatar 2",
  },
  {
    url: img4,
    alt: "Avatar 3",
  },
];
export const HeroSection = () => {
  const [searchText, setSearchText] = useState("");
  const [showError, setShowError] = useState(false);
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const suggestions = [
    "Telecaller",
    "Counselor",
    "Field Executive",
    "Sales Executive",
    "Real State",
    "Picker/Packer",
    "Digital Marketing",
    "Graphic Designer",
    "Web Developer",
    "PHP Developer",
    "Construction",
    "Front-Office",
    "Back-Office",
    "House-Keeping",
    "Delivery",
    "Security-Guard",
    "Hotel-Staff",
    "Ware-House-Staff",
    "Factory-Workers",
    "Digital Marketing",
    "Content Writing",
    "SEO",
    "Video Editing",
    "Photography",
    "Photo Editing",
    "Accounting",
    "HR",
    "Electrical",
    "Plumbing",
    "Mechanical",
    "Technical",
    "Sales",
    "Marketing",
    "Trainer",
    "Teacher",
    "Nurse",
    "Doctor",
    "Engineer",
    "Architect",
    "Designer",
    "Chef",
    "Waiter",
    "Waitress",
    "Clerk",
    "Cashier",
    "Receptionist",
    "Data Entry",
  ];

  const inputRef = React.useRef(null);
  const [inputBox, setInputBox] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    // Delay AOS initialization by 2 seconds after page load
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800, // Animation duration
        once: true, // Whether animation should happen only once
        delay: 0, // Delay between animations
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setInputBox({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [filteredSuggestions]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSelect = (value) => {
    setSearchText(value);
    setSelectedSuggestion(value);
    setFilteredSuggestions([]);
  };
  const handleSearch = () => {
    if (searchText === "" && experience === "" && city === "") {
      setShowError(true);
    } else {
      const query = new URLSearchParams({
        search: searchText,
        experience,
        city,
      }).toString();
      navigate(`/candidatedashboard?${query}`);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          justifyContent: "center",
          alignItems: "center",
          py: 4,
          px: {xs:1}
        }}
      >
        <article>
          <h2
            className="text-lg font-semibold text-center "
            style={{ color: gloabalTheme.colors.primary }}
          >
            #Get Hired in Chandigarh!
          </h2>
          <h1 className="text-center text-3xl font-bold">
            Find Your Career with <br />{" "}
            <span
              className="flex items-end justify-center"
              style={{ color: gloabalTheme.colors.primary }}
            >
              JOBHUB<span className="text-sm text-black">.WORLD</span>
            </span>
          </h1>
          <div className="flexible flex-col sm:flex-row md:flex-row lg:flex-row gap-4 items-center justify-center mt-4 bg-gray-50 p-2 rounded-lg">
            <TextField
              placeholder="Job Title"
              variant="outlined"
              size="small"
              value={searchText}
              onChange={handleInputChange}
              inputRef={inputRef}
              sx={{
                flex: 1,
                maxWidth: { xs: "70%", sm: "150px", md: "160px" },
                "& fieldset": { border: "1px solid #ccc" },
                "& placeholder": { fontSize: "16px" },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            />
            <button
              className="button relative py-1.5 px-4 text-lg   hover:text-black border rounded cursor-pointer overflow-hidden  font-semibold"
              title="Search"
              style={{ backgroundColor: gloabalTheme.colors.primary }}
              onClick={handleSearch}
            >
              <span className="relative z-10">Search</span>
            </button>
            {showError && (
              <Typography
                sx={{
                  position: "absolute",
                  fontSize: "12px",
                  marginLeft: "5px",
                  paddingTop: "5px",
                  color: "red",
                }}
              >
                Please fill at least one field
              </Typography>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center justify-center -space-x-2">
              {avatarStyles.map((user, index) => (
                <img
                  key={index}
                  src={user.url}
                  className=" object-cover w-6 h-6 rounded-full size-8 ring-2 ring-white dark:ring-zinc-200"
                />
              ))}
            </div>
            <p className="ml-2 text-sm">get hired Today!</p>
          </div>
          <div className="mt-10">
            <p className="text-xs">how do i apply jobs on jobhub.world?</p>
            {/* <Box className="flex sm:text-sm text-xs gap-3 py-3"> */}
            <Box sx={{display:'flex', gap:3, paddingBlock:1, fontSize:{xs:'13px'}, textAlign:{xs:'center'}}}>
              <span className="bg-slate-100 p-1 rounded-md">Search Jobs <a href="#popularSection" className=" underline bg-black p-1 text-white rounded-md">here</a></span>
              <span className="bg-slate-100 p-1 rounded-md">See <span className="font-semibold   p-1 rounded-md">Joblisting</span></span>
              <span className="bg-slate-100 p-1 rounded-md">Finally <span className="font-semibold  p-1 rounded-md">fillup</span>form</span>
            </Box>
          </div>
        </article>
      </Box>


      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
          // backgroundImage: `url(${bgImg})`,
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
          backgroundColor: "#0b0a05",
          paddingTop: { xs: "20px", sm: "40px", md: "80px" },
          // paddingBottom: { xs: "40px", sm: "50px", md: "60px" },
        }}
      >
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <div className="flex flex-col gap-2  overflow-hidden">
              <a
                data-aos="fade-down"
                data-aos-duration="3000"
                href="https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a
                data-aos="fade-down"
                data-aos-duration="2500"
                href="https://www.linkedin.com/in/jobhub-world-5559a7361/"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a
                data-aos="fade-down"
                data-aos-duration="2000"
                href="https://www.facebook.com/people/JobHubworld/61575148695953/"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </div>
            <div>
              <img
                className="image_arrow"
                data-aos="fade-down"
                data-aos-duration="2000"
                src={arrowpng}
                alt="follow jobhub intsa, linkedin, facebook"
              />
            </div>
            <div>
              <p className="rotate-[-90deg] mr-1 text-lg mt-3">Follow us</p>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: { xs: "90%", sm: "85%", lg: "92%" },
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
            <Typography
              //  variant='h2'
              sx={{
                color: "white",
                mb: 2,
                fontWeight: "600",
                fontSize: { xs: "28px", sm: "42px", md: "34px", lg: "60px" },
                lineHeight: { xs: "35px", sm: "45px", md: "37px", lg: "60px" },
              }}
            >
              <p data-aos="fade-up" data-aos-delay="1000">
                Find Your Career
              </p>
              <p data-aos="fade-down" data-aos-delay="1000">
                With{" "}
                <span style={{ color: gloabalTheme.colors.primary }}>
                  JOBHUB
                </span>
              </p>
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
                mb: 4,
                fontWeight: "600",
                color: "white",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
              }}
            >
              Your dream job is just a click away
            </Typography>
            {/* Employer CTA */}
            <Box sx={{ mt: 1, mb: 2, marginLeft: "10px" }}>
              <Box className="flex items-center gap-1">
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        Employer with{" "}
                        <span className="text-green-500 font-extrabold">
                          JOBHUB
                        </span>
                      </Typography>
                      <em>{"can"}</em> <b>{"post"}</b> <u>{"Jobs"}</u>{" "}
                      <b>{"browse"}</b> <u>{"Candidate profile"}</u>. And more!
                    </React.Fragment>
                  }
                >
                  <InfoOutlined
                    fontSize="9px"
                    sx={{
                      color: "white",
                      display: { xs: "none", sm: "block" },
                      cursor: "help",
                    }}
                  />
                </HtmlTooltip>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "12px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  For Employer
                </Typography>
                {/* <Button
                variant="contained"
                size="small"
                sx={{
                  padding: "2px 30px",
                  border: `2px solid ${gloabalTheme.colors.primary}`,
                  backgroundColor: "transparent",
                  color: "white",
                  ml: 1,
                  textTransform: "none",
                  "&:hover": { backgroundColor: gloabalTheme.colors.primary },
                }}
                // navigating to /verification
                onClick={() => navigate("/verification")}
              >
                Hire Now
              </Button> */}
                <button
                  className="button relative px-4 py-1 text-lg  hover:text-black border  rounded cursor-pointer overflow-hidden  font-semibold"
                  title="Hire now"
                  style={{
                    backgroundColor: gloabalTheme.colors.primary,
                    border: "none",
                  }}
                  onClick={() => navigate("/verification")}
                >
                  <span className="relative z-10">Hire now</span>
                </button>
              </Box>
            </Box>
            <Box
              className="flex flex-wrap gap-2 bg-white rounded-lg shadow-md p-3 items-center search-box"
              sx={{
                maxWidth: { xs: "95%", sm: "60%", md: "90%", lg: "65%" },
              }}
            >
              {/* Search Input */}
              <TextField
                placeholder="Job Title"
                variant="outlined"
                size="small"
                value={searchText}
                onChange={handleInputChange}
                inputRef={inputRef}
                sx={{
                  flex: 1,
                  maxWidth: { xs: "100%", sm: "150px", md: "160px" },
                  "& fieldset": { border: "1px solid #ccc" },
                  "& placeholder": { fontSize: "16px" },
                  "& .MuiInputBase-input": {
                    fontSize: "16px",
                    padding: "8.5px 10px",
                  },
                }}
              />

              {filteredSuggestions.length > 0 && (
                <Paper
                  style={{
                    cursor: "pointer",
                    fontSize: "12px",
                    position: "absolute",
                    top: `${inputBox.top}px`,
                    left: `${inputBox.left}px`,
                    width: `${inputBox.width}px`,
                    maxHeight: "200px",
                    overflowX: "hidden",
                    zIndex: 10,
                  }}
                >
                  <List>
                    {filteredSuggestions.map((item, index) => {
                      const startIndex = item
                        .toLowerCase()
                        .indexOf(searchText.toLowerCase());
                      const endIndex = startIndex + searchText.length;
                      return (
                        <ListItem
                          button
                          key={index}
                          onClick={() => handleSelect(item)}
                        >
                          <span>
                            {startIndex !== -1 ? (
                              <>
                                {item.substring(0, startIndex)}
                                <span
                                  style={{ color: "green", fontWeight: "bold" }}
                                >
                                  {item.substring(startIndex, endIndex)}
                                </span>
                                {item.substring(endIndex)}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
              )}

              {/* Experience Dropdown */}
              <Select
                displayEmpty
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                size="small"
                sx={{
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                  fontSize: "16px",
                  maxWidth: 120,
                  backgroundColor: "white",
                  "& fieldset": { border: "1px solid #ccc" },
                }}
              >
                <MenuItem value="" disabled>
                  Experience
                </MenuItem>
                <MenuItem value="fresher">Fresher</MenuItem>
                <MenuItem value="1">1 Year</MenuItem>
                <MenuItem value="2">2 Years</MenuItem>
                <MenuItem value="3">3+ Years</MenuItem>
              </Select>

              {/* City Dropdown */}
              <Select
                displayEmpty
                value={city}
                onChange={(e) => setCity(e.target.value)}
                size="small"
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  fontSize: "16px",
                  minWidth: 60,
                  backgroundColor: "white",
                  "& fieldset": { border: "1px solid #ccc" },
                }}
              >
                <MenuItem value="" disabled>
                  City
                </MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="chandigarh">Chandigarh</MenuItem>
              </Select>

              {/* Search Button */}
              {/* <Button
              variant="contained"
              color="success"
              onClick={handleSearch}
              sx={{ textTransform: "none", px: 3, fontSize: "16px" }}
            >
              Search
            </Button> */}
              <button
                className="button relative py-1.5 px-4 text-lg   hover:text-black border rounded cursor-pointer overflow-hidden  font-semibold"
                title="Search"
                style={{ backgroundColor: gloabalTheme.colors.primary }}
                onClick={handleSearch}
              >
                <span className="relative z-10">Search</span>
              </button>
            </Box>
            {showError && (
              <Typography
                sx={{
                  position: "absolute",
                  fontSize: "12px",
                  marginLeft: "5px",
                  paddingTop: "5px",
                  color: "red",
                }}
              >
                Please fill at least one field
              </Typography>
            )}{" "}
          </Box>
          {/* Right Section Image */}
          <div className="w-[50%] max-lg:hidden flex relative mr-[4%]">
            <div className="w-full overflow-hidden flex justify-center items-center">
              <Box
                component="img"
                src={HeaderImage}
                alt="find your career with jobhub world"
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  width: { sm: "30%", md: "100%" },
                  height: "auto",
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
          <Box
            component="img"
            src={HeaderImage2}
            alt="Header"
            sx={{
              //  0 45px 49px -20px green
              display: { xs: "none", sm: "block", md: "none", lg: "none" },
              width: { sm: "40%", md: "45%" },

              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
