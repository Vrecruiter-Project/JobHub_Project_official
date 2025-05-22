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
        { icon: img6, title: 'No Hidden Charges' },
        { icon: img1, title: 'Verified & Authentic Jobs' },
        { icon: img4, title: 'No Need to Create Resume' },
        { icon: img3, title: 'Get the Job in Your Locality' },
        { icon: img7, title: 'Helping the Unorganized Sector' },
        { icon: img5, title: 'Get Help from Our Local Representative' },
        { icon: img2, title: 'Easily Search Jobs in your Preferred Category' },
    ];

    return (
        <Box sx={{ width: '100%', my: 9 }}>
            <Box
                sx={{
                    width: '100%',
                    // backgroundImage: `url(${ChoiceBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',

                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{   
                        textAlign: 'center',
                        py: 6,
                        fontSize: { xs: '24px', md: '45px' },
                        color: 'black',
                        marginTop: '-24px',
                        fontFamily:"Marcelluse",textShadow: '0 3px 4px #333',
                    }}
                >
                    Why We Choose <span className='text-[#008000] font-bold'>JOBHUB</span>
                </Typography>
            </Box>

            <Box
                sx={{
                    px: { xs: 2, md: 19 },
                    py: 5,
                }}
            >
                <Grid container spacing={4}
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap:'nowrap' }}
                >
                    <Grid item xs={12} md={5} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'flex-start', sm: 'center', md: 'flex-start' },
                        marginLeft: { xs: '55px', lg: '120px' },
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
                                    className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] mr-[15px]'
                                />
                                <Typography
                                    
                                    sx={{
                                        lineHeight:3,
                                        fontSize: { xs: '15px', md: '14px', lg:'20px' },
                                        color: 'black',
                                        textAlign: 'left',
                                        fontWeight:{md:"bold", xl:"none"}
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
                            className="w-[60%] md:w-[50%]"
                            />
                        </Box>
                    </Grid>


                </Grid>
            </Box>
        </Box>
    );
};

export default ChoiceSection;
