import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
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
        AOS.init({ duration: 1000 });
    }, []);

    const iconItems = [
        { icon: img1, title: 'Verified & Authentic Jobs' },
        { icon: img2, title: 'Easily Search Jobs in your Preferred Category' },
        { icon: img3, title: 'Get the Job in Your Locality' },
        { icon: img4, title: 'No Need to Create Resume' },
        { icon: img5, title: 'Get Help from Our Local Representative' },
        { icon: img6, title: 'No Hidden Charges' },
        { icon: img7, title: 'Helping the Unorganized Sector' },
    ];

    return (
        <Box sx={{ width: '100%', my: 1 }}>
            <Box
                sx={{
                    width: '100%',
                    backgroundImage: `url(${ChoiceBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    py: 5,
                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        textAlign: 'center',

                        fontSize: { xs: '35px', md: '45px' },
                        color: 'black',
                        marginTop: '-24px'
                    }}
                >
                    Why We Choose <span style={{
                        color: 'green', fontWeight: 'bold',
                    }}>JOBHUB</span>
                </Typography>
            </Box>

            <Box
                sx={{
                    px: { xs: 2, md: 19 },
                    py: 5,
                }}
            >
                <Grid container spacing={4}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Grid item xs={12} md={5} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {xs:'flex-start',sm:'center', md: 'flex-start'},
                        marginLeft: { xs: '30px', md: '0' },
                    }}>
                        {iconItems.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                                data-aos="fade-up"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    style={{ width: '30px', height: '30px', marginRight: '15px' }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: '15px', md: '18px' },
                                        color: 'black',
                                        textAlign: 'left',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <img
                                src={img8}
                                alt="Jobhub Mobile App"
                                style={{ width: '60%', maxWidth: '400px' }}
                            />
                        </Box>
                    </Grid>


                </Grid>
            </Box>
        </Box>
    );
};

export default ChoiceSection;
