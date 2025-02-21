import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid2";

const CompanyAddress = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",

    });
  }, []);

  const contactDetails = [
    {
      icon: (
        <PhoneIcon
          sx={{
            fontSize: { xs: 80, sm: 120, md: 150 },
            color: "#41A748",
            border: "2px solid green",
            padding: { xs: "20px", md: "30px" },
            borderRadius: "10px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      ),
      title: "Phone",
      content: (
        <>
          +91 95180-35030
          <br />
          +91 89084-67890
        </>
      ),
    },
    {
      icon: (
        <PlaceIcon
          sx={{
            fontSize: { xs: 80, sm: 120, md: 150 },
            color: "#41A748",
            border: "2px solid green",
            padding: { xs: "20px", md: "30px" },
            borderRadius: "10px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      ),
      title: "Address",
      content: (
        <>
          SUSHMA Infinium,
          <br />
          Delhi NH-22, Zirakpur,
          <br />
          Chandigarh, India
        </>
      ),
    },
    {
      icon: (
        <EmailIcon
          sx={{
            fontSize: { xs: 80, sm: 120, md: 150 },
            color: "#41A748",
            border: "2px solid green",
            padding: { xs: "20px", md: "30px" },
            borderRadius: "10px",
            boxShadow: "4px 4px 10px rgba(0, 0,0, 0.2)",
          }}
        />
      ),
      title: "Email",
      content: (
        <>
          Request for Proposal
          <br />
          vrecruitersofficial@gmail.com
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1146px",
        margin: "auto",
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {contactDetails.map((detail, index) => (
          <Grid
            size={{
            xs:12,
            sm:6,
            md:4}}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <Box
              sx={{
                textAlign: "center",
                padding: "20px",
              }}
            >
              {/* Icon */}
              <Box sx={{ marginBottom: "20px" }}>{detail.icon}</Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: { xs: "20px", md: "24px" },
                }}
              >
                {detail.title}
              </Typography>

              {/* Content */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                {detail.content}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyAddress;

