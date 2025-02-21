import React, { useEffect } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import TelecallerBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobhubTelecaller = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: 'ease-in-out', 
      
        });
    }, []);

    const benefits = [
        "JobHub provides a diverse range of Telecaller job opportunities across various industries and companies. Whether you’re interested in customer service, technical support, or sales, you can find suitable positions on the platform.",
        "JobHub ensures that all Telecaller job listings are verified, guaranteeing the authenticity and legitimacy of the opportunities available.",
        "JobHub simplifies the application process, allowing you to easily apply for multiple Telecaller jobs with just a few clicks. This saves you time and effort during your job search.",
        "JobHub not only connects you with immediate job openings but also offers potential career growth opportunities within the Telecaller industry.",
        "JobHub partners with reputed companies that offer competitive compensation packages for Telecaller roles. You can expect fair and market-aligned remuneration for your skills and expertise.",
        "By choosing Jobhub as your platform to apply for Telecaller jobs, you gain access to a wide range of opportunities, verified job listings, a convenient application process, career growth prospects, and competitive compensation packages."
    ];

    return (
        <Box sx={{
            py: { xs: 6, md: 8 },
            width: "80%",
            mx: "auto",
        }}>
            <Grid2 container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                mb: 5,
                px: 5,
                width: "100%",
            }}>
                <Grid2 item xs={12} md={12} data-aos="fade-up">
                    <Typography variant="h3" component="h2" sx={{
                        textAlign: "center",
                        fontSize: { xs: "35px", md: "45px" },
                        backgroundImage: `url(${TelecallerBg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                        Why apply at JOBHUB for <span style={{ color: "green" }}>Telecaller</span>
                    </Typography>
                </Grid2>
            </Grid2>

            <Grid2 container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                px: 5,
                width: "100%",
            }}>
                <Grid2 item xs={12} md={12}>
                    {benefits.map((benefit, index) => (
                        <Typography
                            key={index}
                            variant="h3"
                            component="h2"
                            sx={{
                                textAlign: "center",
                                fontSize: { xs: "15px", md: "17px" },
                                pt: 2,
                            }}
                            data-aos="fade-up"
                        >
                            {benefit}
                        </Typography>
                    ))}
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default JobhubTelecaller;
