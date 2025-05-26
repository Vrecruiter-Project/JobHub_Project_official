// import HeaderPage from '../../../components/GlobalComponents/HeaderPage/HeaderPage';
import PageComponent from "../../../components/PageComponent/PageComponent";
// import AboutBannerImage from '../../../assets/Images/bgImages/bgImage.png';
// import AboutHeaderImage from '../../../assets/Images/AboutPage/AboutHeaderImage.svg';
import AboutHeaderImage from "../../../assets/Images/AboutPage/Group 352.png";
import SectionSec from "../../../assets/Images/AboutPage/aboutus.png";
import JobProcess from "../../../components/PageComponent/AboutComponent/JobProcess";
import PartnerSection from "../../../components/PageComponent/PartnerSection";
import { Stats } from "../../../components/PageComponent/JobDetails/Stats";
import HomeBanner from "../../../components/Banner/Banner";
import Goal from "../../../assets/Images/AboutPage/Goal.png";
import Eye from "../../../assets/Images/AboutPage/tr3fvhcl.png";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <HomeBanner />
      <PageComponent>
        <Box
                  sx={{
              width:"100%",
            background: "black",
            display: "flex",
                      justifyContent: { xs:'center',sm:'center',md: "center", lg: "flex-end" },
          }}
        >
          <Box
            component="img"
            src={AboutHeaderImage}
            alt="jobhub image"
                      sx={{
                width:{xs:'60%',sm:'75%',md:'45%', lg:'45%'},
                marginRight: {xs:'30px',sm:'50px',md: "55px", lg:"80px", xl:"0px" },
            }}
          />
        </Box>

        <Box
          sx={{
            background: "white",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            padding: "40px 0",
            position: "relative",
          }}
        >
          {/* Left Side Image */}
          <Box
            sx={{
              width: { lg: "40%", xl: "60%" },
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              //   display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Box
              component="img"
              src={SectionSec}
              alt="jobhub image"
              sx={{
                marginRight: { lg: "5px", xl: "250px" },
                marginBottom: "-40px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>

          {/* Right Section with Cards and Background Accent */}
          <Box
            sx={{
              width: { md: "70%", lg: "40%" },
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "60px",
            }}
          >
            {/* Background Accent */}
            <Box
              sx={{
                width:{xs:'30%',sm:'30%',md:'30%',lg:"45%"},
                height: {
                  xs: "110svh",
                  sm: "110svh",
                  md: "110svh",
                  lg: "115svh",
                  xl: "104svh",
                },
                backgroundColor: "#008000",
                position: "absolute",
                top: "-40px",
                right: { lg: "150px", xl: "170px" },
                zIndex: 0,
              }}
            />

            {/* Mission Cards */}
            <Box
              sx={{
                width: "70%",
                background: "#fff",
                borderRadius: "10px",
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                position: "relative",
                zIndex: 2,
                marginRight: { lg: "20px", xl: 0 },
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.6), 0 4px 15px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Header with Underline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={Goal} alt="goal image from jobhub world" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  Our Mission
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      borderRadius: "10px",
                      backgroundImage:
                        "linear-gradient(to right, rgb(152 189 166), #008000 50%, rgb(152 189 166))",
                    }}
                  />
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "8px", sm: "14px", lg: "12px", xl: "14px" },

                  color: "#333",
                }}
              >
                To empower job seekers and employers by providing a
                comprehensive platform that simplifies the job search and hiring
                process. We are committed to connecting talented professionals
                with top companies through innovative tools, real-time job
                listings, and personalized career resources. Our mission is to
                create a seamless experience that enhances career growth,
                bridges the gap between talent and opportunity, and helps
                businesses thrive with the best candidates.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "70%",
                background: "#fff",
                borderRadius: "10px",
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                position: "relative",
                zIndex: 2,
                marginRight: { lg: "20px", xl: 0 },
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.6), 0 4px 15px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Header with Underline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={Eye} alt="goal image from jobhub world" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  Our Mission
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      borderRadius: "10px",
                      backgroundImage:
                        "linear-gradient(to right, rgb(152 189 166), #008000 50%, rgb(152 189 166))",
                    }}
                  />
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "8px", sm: "14px", lg: "12px", xl: "14px" },
                  color: "#333",
                }}
              >
                To revolutionize the way people connect with opportunities by
                creating a dynamic and inclusive platform where talent meets the
                right opportunities. We envision a world where job seekers
                seamlessly discover meaningful careers, and employers find the
                best-fit candidates to drive their success, fostering
                professional growth, innovation, and diversity in every
                industry.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Stats />
        <JobProcess />
        <PartnerSection />
      </PageComponent>
    </div>
  );
};

export default About;
