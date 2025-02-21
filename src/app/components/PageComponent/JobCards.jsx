import { Box, Grid2, Typography } from '@mui/material';
import { React, useEffect } from 'react';
import JobCard from '../GlobalComponents/JobCard/JobCard';
import search from '../../assets/Images/jobCardIcons/Search.png';
import salary from '../../assets/Images/jobCardIcons/salary.png';
import frame from '../../assets/Images/jobCardIcons/Frame.png';
import quickApply from '../../assets/Images/jobCardIcons/quickApply.png';
import cardBg from '../../assets/Images/bgImages/cardBg.png';

import AOS from 'aos';
import 'aos/dist/aos.css';


const JobCards = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Box sx={{
                backgroundImage: `url(${cardBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <Box sx={{
                    py: 12,
                    backgroundColor: "rgba(0, 128, 0, 0.3)",
                    width: "100%",
                }}>
                    <Grid2 container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                        mb: 10,
                        px: 5
                    }}>
                        <Grid2 item xs={12} md={12}>
                            <Typography
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                variant="h3" component="h2" sx={{
                                    textAlign: "center",
                                    fontSize: { xs: "35px", md: "45px" }
                                }}>
                                How <span style={{ color: "green" }}>JOBHUB</span> Works For You
                            </Typography>
                        </Grid2>
                    </Grid2>
                    
                    <Grid2 container spacing={8} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Grid2 item xs={12} md={3}>
                            <JobCard
                                Icon={<>
                                    <img src={search} alt="salary" style={{ width: 40, height: 40 }} />
                                </>}
                                title="Find Your Dream Job"
                            />
                        </Grid2>
                        <Grid2 item xs={12} md={3}>
                            <JobCard
                                Icon={<>
                                    <img src={salary} alt="salary" style={{ width: 40, height: 40 }} />
                                </>}
                                title="Compare Salaries"
                            />
                        </Grid2>
                        <Grid2 item xs={12} md={3}>
                            <JobCard
                                Icon={<>
                                    <img src={frame} alt="salary" style={{ width: 40, height: 40 }} />
                                </>}
                                title="Research Companies"
                            />
                        </Grid2>
                        <Grid2 item xs={12} md={3}>
                            <JobCard
                                Icon={<>
                                    <img src={quickApply} alt="salary" style={{ width: 40, height: 40 }} />
                                </>}
                                title="Quick Apply"
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </>
    )
}

export default JobCards