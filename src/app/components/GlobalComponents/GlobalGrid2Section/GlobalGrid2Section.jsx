import React, { useEffect } from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import DocVerify from '../../../assets/Images/DataEntryImages/DiscriptionImg.png';
import DocType from '../../../assets/Images/DataEntryImages/DaTypeImage.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalGrid2Section = ({ reverse = false, content, Img1, Box: Img2 }) => {

    useEffect(() => {
        AOS.init();
    }, []);



    return (
        <>
            <Grid2
                container
                sx={{
                    width: '80%',
                    flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
                }}
            >
                <Grid2 item xs={12} md={4}
                    sx={{
                        width: { xs: "100%", sm: "100%", md: "40%" },
                        py: 2,
                    }}>
                    {Img1 &&
                        <Box
                            data-aos='fade-up'
                            component="img"
                            src={DocVerify}
                            alt="Document Verification"
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                                height: '100%',
                            }}
                        />
                    }
                    {Img2 &&
                        <Box
                            data-aos='fade-up'
                            component="img"
                            src={DocType}
                            alt='Document Verification'
                            sx={{
                                width: '100%',
                                maxWidth: "100%",
                                height: "100%"
                            }}
                        />
                    }
                </Grid2>

                <Grid2 item xs={12} md={10} sx={{ width: { xs: "100%", sm: "100%", md: "60%" }, py: 2, px: 1 }}>
                    {content.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', pt: 4 }}>
                            <img src={item.icon} alt="check" style={{ height: '30px', width: '30px', marginRight: '8px' }} />
                            <Typography
                                data-aos='fade-up'
                                variant="body2"
                                component="h5"
                                sx={{ fontSize: { xs: '12px', sm: "16px", md: '16px' }, px: { xs: 2, md: 3 } }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Grid2>
            </Grid2>
        </>
    )
}

export default GlobalGrid2Section