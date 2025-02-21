import { Box, Grid2, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ChoiceBg from '../../assets/Images/bgImages/PartnersBg.png';
import img1 from '../../assets/Images/Why-Jobhub/img1.png';
import img2 from '../../assets/Images/Why-Jobhub/img2.png';
import img3 from '../../assets/Images/Why-Jobhub/img3.png';
import img4 from '../../assets/Images/Why-Jobhub/img4.png';
import img5 from '../../assets/Images/Why-Jobhub/img5.png';
import img6 from '../../assets/Images/Why-Jobhub/img6.png';
import img7 from '../../assets/Images/Why-Jobhub/img7.png';
import img8 from '../../assets/Images/Why-Jobhub/MobileViewN.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChoiceSection = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    const iconItems = [
        { icon: img1, title: 'Verified & Authentic Jobs' },
        { icon: img2, title: 'Easily Search Jobs in your Preferred Category' },
        { icon: img3, title: 'Get the Job in Your Locality' },
        { icon: img4, title: 'No Need to Create Resume' },
        { icon: img5, title: 'Get Help from Our Local Representative' },
        { icon: img6, title: 'No Hidden Charges' },
        { icon: img7, title: 'Helping the Unorganized Sector' },
    ]
    return (
        <>
            <Box sx={{ width: '80%', mx: 'auto' }}>
                <Grid2 container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: { xs: 6 },
                    pb: 8
                }}>
                    <Grid2 item xs={12} sx={{ position: "relative" }}>
                        <Typography
                            data-aos="fade-up" variant='h3' component='h2' align="center" sx={{
                                fontSize: { xs: "35px", md: "45px" },
                                '&::after': {
                                    content: '""',
                                    display: "block",
                                    width: '100%',
                                    height: '40px',
                                    backgroundImage: `url(${ChoiceBg})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    position: 'absolute',
                                    bottom: '-30px',
                                    left: 0,
                                },
                            }}>
                            Why We Choose <span style={{ color: "green" }}>Jobhub</span>
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 container spacing={{ xs: 3, lg: 20 }} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pb: 10,
                    flexDirection: { xs: "column-reverse", sm: "column-reverse", md: "row", lg: "row" }
                }}>
                    <Grid2 item xs={12} md={7} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "left",
                    }}>
                        {iconItems.map((item, index) => (
                            <Grid2 data-aos="fade-up" container spacing={{ xs: 0, md: 2 }} sx={{ mt: 4 }} key={index}>
                                <Grid2 item xs={2} md={2}>
                                    <img src={item.icon} height="30px" width="30px" alt={`icon-${index + 1}`} />
                                </Grid2>
                                <Grid2 item xs={10} md={10}>
                                    <Typography variant='h6' component='h2' align="left">
                                        {item.title}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        ))}
                    </Grid2>
                    <Grid2 data-aos="flip-right" data-aos-duration='3000' item xs={12} md={5}>
                        <img src={img8} width="300px" height="200x" alt="Mobile View" />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default ChoiceSection;