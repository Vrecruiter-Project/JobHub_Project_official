// import { Box, Grid2, Typography } from '@mui/material'
// import React from 'react'

// const JobDetails = () => {
//   return (
//     <>
//       <Box sx={{
//         py: 5,
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         color: "white",
//         width: "100%",
//         display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//       }}>
//         <Grid2 container spacing={5} sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}>
//           <Grid2 item xs={12} sx={{
//             margin: "auto"
//           }}>
//             <Box sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: {xs: 4, md: 1},
//             }}>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               >Live jobs: </Typography>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               > 1,200</Typography>
//             </Box>
//           </Grid2>
//           <Grid2 item xs={12} sx={{
//             margin: "auto"
//           }}>
//             <Box sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: {xs: 4, md: 1},
//             }}>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               >Companies: </Typography>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               >200</Typography>
//             </Box>
//           </Grid2>
//           <Grid2 item xs={12} sx={{
//             margin: "auto"
//           }}>
//             <Box sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: {xs: 4, md: 1},
//             }}>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               >Process: </Typography>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               >550</Typography>
//             </Box>
//           </Grid2>
//         </Grid2>
//       </Box>
//     </>
//   )
// }

// export default JobDetails

// import { Box, Grid2, Typography } from "@mui/material";
// import React from "react";
// import CountUp from "react-countup";

// const Statistic = ({ label, value }) => (
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       mt: { xs: 5, md: 1 },
//       mx: 2
//     }}
//   >
//     <Typography
//       variant="h5"
//       gutterBottom
//       component="div"
//       sx={{
//         fontWeight: "bold",
//         mr: 1,
//       }}
//     >
//       {label}
//     </Typography>
//     <Typography
//       variant="h5"
//       gutterBottom
//       component="div"
//       sx={{ fontWeight: "bold" }}
//     >
//       <CountUp end={value} duration={15} separator="," />
//     </Typography>
//   </Box>
// );

// const JobDetails = () => {
//   const stats = [
//     { label: "Live jobs:", value: 1200 },
//     { label: "Companies:", value: 200 },
//     { label: "Process:", value: 550 },
//   ];

//   return (
//     <Box
//       sx={{
//         py: 5,
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         color: "white",
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Grid2
//         container
//         spacing={5}
//         sx={{
//           width: "100%",
//           justifyContent: { xs: "center", md: "space-around", xl: "space-evenly" },
//           alignItems: "center",
//         }}
//       >

//         {stats.map((stat, index) => (
//           <Grid2
//             item
//             xs={12}
//             md={4}
//             key={index}
//             sx={{ display: "flex", justifyContent: "center" }}
//           >
//             <Statistic label={stat.label} value={stat.value} />
//           </Grid2>
//         ))}
//       </Grid2>
//     </Box>
//   );
// };

// export default JobDetails;

import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionImage from "/JobhubFooterlogo.png";
import sectiionImage from "../../../assets/Images/SectionImages/image_46.png";
import { Stats } from "./Stats";
import { gloabalTheme } from "../../../theme/theme";
// const stats = [
//   {
//     id: 1,
//     label: "Live Jobs",
//     value: 27600,
//     icon: "M12 4a8 8 0 00-8 8h2a6 6 0 1112 0h2a8 8 0 00-8-8zm0 14a4 4 0 110-8 4 4 0 010 8zm0-10a2 2 0 100 4 2 2 0 000-4z",
//   },
//   {
//     id: 2,
//     label: "Companies",
//     value: 13200,
//     icon: "M9 20v-6h6v6h4v-8h3L12 3 2 12h3v8z",
//   },
//   {
//     id: 3,
//     label: "Process",
//     value: 1749,
//     icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 2.87 1.07 3.57 2.36C10.14 6.07 11.46 5 13 5c2 0 3.5 1.5 3.5 3.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
//   },
//   {
//     id: 4,
//     label: "Chandigarh",
//     value: 1,
//     icon: "M12 2C8.13 2 5 5.13 5 9c0 3.88 5 9.88 7 11.88 2-2 7-8 7-11.88 0-3.87-3.13-7-7-7zM12 11.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z",
//   },
// ];

export default function JobDetails() {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
      duration: 800,
      onece: false,
      delay: 0
    },2000)
    }, 2000);
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* <section className="text-gray-700 body-font hidden md:block">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">


            {stats.map((stat) => (
              <div key={stat.id} className="p-2 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up">
                <div className="border-2 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-90 hover:border-green-500 hover:shadow-xl">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-green-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d={stat.icon}></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp start={0} end={stat.value} duration={6.5} separator="," />
                  </h2>
                  <p className="leading-relaxed text-lg text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="hidden w-full flex flex-col items-center bg-black sm:block">
        {/* Top Content */}
        <div className="text-center text-white pt-12 px-4 py-8 ">
          <p className="text-[28px] sm:text-[40px] font-semibold font-['Marcelluse'] pt-4" data-aos='fade-up' >
            Start your Professional journey with
          </p>
          <img
            data-aos='fade-down' 
            className="w-[120px] sm:w-[150px]  inline-block mb-10"
            src={SectionImage}
            alt=""
          />
          <div className="flex justify-center w-full mb-5">
            <p className="w-full sm:w-4/5 text-sm sm:text-base leading-relaxed">
              JobHub is a smart and easy-to-use job search platform designed to
              help you find the right job, faster. Whether you're a fresher or
              an experienced professional, JobHub connects you with verified job
              opportunities across different industries and locations in India.
              We make job hunting simple with daily job updates, one-click
              applications, and filters based on your skills, experience, and
              preferred location. Our goal is to make your career journey
              smoother by bringing the best job openings to one place — no
              stress, no confusion, just real opportunities. Start applying
              today and move one step closer to your dream job with JobHub.
            </p>
          </div>
          {/* <a
            href="#popularSection"
            className="inline-block px-6 py-3 font-semibold  text-white rounded-md"
            style={{backgroundColor: gloabalTheme.colors.primary}}
          >
            Explore Job
          </a> */}
          <button
            className="button relative py-1.5 px-4 text-lg hover:text-black border rounded cursor-pointer overflow-hidden font-semibold"
            title="Explore Jobs"
            style={{ backgroundColor: gloabalTheme.colors.primary, border:'none' }}
            onClick={() =>
              document
                .getElementById("popularSection")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10">Explore Jobs</span>
          </button>
        </div>

        {/* Employer Section */}
        <div className="bg-white w-full mt-5 flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 py-8 gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content (Left Side) */}
          <div className="w-full lg:w-2/3 xl:w-1/3 px-2 sm:px-4 space-y-4 sm:space-y-6 text-black leading-relaxed my-10 sm:my-20">
            <h2  data-aos="fade-right"  className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Marcelluse'] [text-shadow:_0_3px_4px_rgb(51_51_51)]">
              What we offer to{" "}
              <span style={{ color: gloabalTheme.colors.primary }}>
                Employers
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5">
              <div data-aos='fade-right' data-aos-delay='250'>
                <span  className="font-bold text-lg sm:text-xl">
                  ✅ Excellent Employer Dashboard
                </span>
                <p className="text-base sm:text-lg mt-1">
                  Manage job listings, track applications, and shortlist
                  candidates.
                </p>
              </div>
              <div data-aos='fade-right' data-aos-delay='250'>
                <span className="font-bold text-lg sm:text-xl">
                  ✅ Find the Right Talent
                </span>
                <p className="text-base sm:text-lg mt-1">
                  Access a large pool of verified candidates based on skills,
                  experience, location, and job role.
                </p>
              </div>
              <div data-aos='fade-right' data-aos-delay='250'>
                <span className="font-bold text-lg sm:text-xl">
                  ✅ Post Jobs with Base Salary Details
                </span>
                <p className="text-base sm:text-lg mt-1">
                  Clearly mention salary expectations to attract serious
                  candidates and make hiring transparent.
                </p>
              </div>
              <div data-aos='fade-right' data-aos-delay='250'>
                <span className="font-bold text-lg sm:text-xl">
                  ✅ Smart Filters & Search
                </span>
                <p className="text-base sm:text-lg mt-1">
                  Easily search and filter candidates by qualifications, skills,
                  and availability.
                </p>
              </div>
            </div>
          </div>

          {/* Image (Right Side) */}
          <div data-aos="fade-left" className="hidden lg:hidden xl:block w-full lg:w-1/2 justify-center">
            {/* Your content (e.g., image) */}
            <img
              className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[750px] rounded-xl"
              src={sectiionImage}
              alt="Employer Dashboard"
            />
          </div>
        </div>

        {/* Stats Section */}
        <Stats />
      </section>
    </>
  );
}
