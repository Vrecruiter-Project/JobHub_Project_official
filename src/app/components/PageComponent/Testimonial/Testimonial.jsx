import { Box, Grid2, Typography } from '@mui/material'
import React, { useEffect } from 'react';
import TestimonialBg from '../../../assets/Images/bgImages/PartnersBg.png';
import { AnimatedTestimonialsDemo } from './AnimatedTestimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonial = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Box sx={{ pt: { xs: 14, md: 4 }, width: '80%', mx: 'auto' }}>
                <Grid2 container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: { xs: 6 },
                    pb: 2
                }}>

                    <Grid2 item xs={12}>
                        <Typography
                            data-aos="fade-up"
                            variant='h3' component='h2' align="center" sx={{
                                fontSize: { xs: "35px", md: "45px" },
                                backgroundImage: `url(${TestimonialBg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}>
                            Testimonials
                        </Typography>
                    </Grid2>
                </Grid2>

                <AnimatedTestimonialsDemo />
            </Box>
        </>
    )
}

export default Testimonial