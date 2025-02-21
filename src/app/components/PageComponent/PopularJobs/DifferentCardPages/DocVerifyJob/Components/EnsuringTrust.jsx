import React, { useEffect } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import DocImage2 from '../../../../../../assets/Images/DocVerifyImage/DocImage1.png';
import docBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EnsuringTrust = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const content = [
        "The main goal of document verification is to establish and confirm the authenticity of submitted documents for various purposes, such as identity verification, employment, financial transactions, and criminal investigations.",
        "Document verification involves cross-checking the information provided in the document against trusted sources to ensure accuracy and prevent fraud, identity theft, and unauthorized access.",
        "This process guarantees that only legitimate and valid documents are used, fostering safety and trust in sectors like banking, healthcare, government, and education.",
        "The advancement of electronic verification technologies has made this process more efficient and standardized.",
        "Document security is a collective responsibility, benefiting both individuals and society.",
        "Data sharing can help increase data quality by increasing scrutiny and verification of the data's accuracy and completeness.",
    ];

    const typographyStyles = {
        textAlign: { xs: "center", sm: "center", md: "left" },
        fontSize: { xs: "15px", md: "17px" },
        pt: 3,
    };

    return (
        <>
            <Box sx={{
                py: { xs: 8, md: 10 },
                width: "80%",
                mx: "auto",
            }}>

                <Grid2 container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    mb: 3,
                    px: 5
                }}>
                    <Grid2 item xs={12} md={12} data-aos="fade-up">
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "35px", md: "45px" },
                            backgroundImage: `url(${docBg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}>
                            Document Verification : <span style={{ color: "green" }}>Ensuring Trust</span>
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 container sx={{
                    width: "100%",
                    mx: "auto",
                    gap: { md: 5 }
                }}>
                    <Grid2 item xs={12} sm={12} md={12} lg={6} sx={{
                        width: { xs: "100%", sm: "none", md: "35%" },
                        display: "flex",
                        justifyContent: { xs: "center", md: "center" },
                    }} data-aos="fade-right">
                        <img src={DocImage2} style={{ maxWidth: "100%", height: "auto" }} alt="Document Verification" />
                    </Grid2>

                    <Grid2 item xs={12} sm={12} md={12} lg={6} data-aos="fade-left"
                        sx={{
                            width: { xs: "100%", sm: "100%", md: "60%" },
                            pt: 3,
                            px: 4
                        }}
                    >
                        {content.map((text, index) => (
                            <Box key={index} sx={{ display: 'inline-block', width: '100%' }}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    sx={typographyStyles}
                                >
                                    {text}
                                </Typography>
                            </Box>
                        ))}
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
};

export default EnsuringTrust;
