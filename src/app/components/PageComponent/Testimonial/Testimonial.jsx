// import { Box, Grid2, Typography } from '@mui/material'
// import React, { useEffect } from 'react';
// import TestimonialBg from '../../../assets/Images/bgImages/PartnersBg.png';
// import { AnimatedTestimonialsDemo } from './AnimatedTestimonial';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import { Box, Typography } from "@mui/material"
import Ellipse_1 from '../../../assets/Images/TestimonialImages/Ellipse_27.png'
import Ellipse_2 from '../../../assets/Images/TestimonialImages/Ellipse_28.png'

// const Testimonial = () => {

//     useEffect(() => {
//         AOS.init();
//     }, []);

//     return (
//         <>
//             <Box sx={{ pt: { xs: 4, md: 4 }, width: '80%', mx: 'auto' }}>
//                 <Grid2 container sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     pt: { xs: 6 },
//                     pb: -1
//                 }}>

//                     <Grid2 item xs={12}>
//                         <Typography
//                             data-aos="fade-up"
//                             variant='h3' component='h2' align="center" sx={{
//                                 fontSize: { xs: "35px", md: "45px" },
//                                // backgroundImage: `url(${TestimonialBg})`,
//                                 backgroundRepeat: "no-repeat",
//                                 backgroundSize: "cover",
//                                 py: 3,
//                             }}>
//                             Testimonials
//                         </Typography>
//                     </Grid2>
//                 </Grid2>

//                 <AnimatedTestimonialsDemo />
//             </Box>
//         </>
//     )
// }

import KartikKhurana from '../../../assets/Images/TestimonialImages/Kartik-Khurana.png'
import PriyankSharma from '../../../assets/Images/TestimonialImages/Shashank-Agniotri.png'
import VaishaliDevadi from '../../../assets/Images/TestimonialImages/Vaishali-Devadi.png'


const Testimonial = () => {
    return (
        <>
            <Box sx={{ width: '100%', mx: 'auto', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', height: "400px", marginBottom:"400px" }}>
                <Typography sx={{ textAlign: 'center', fontSize: { xs: '35px', md: '45px' }, color: '#008000', fontWeight: 'bold', position: 'relative', top: "560px" }}>
                    Testimonials
                </Typography>
                <Box sx={{width:'100%',display:'flex', justifyContent:"end" , position:'relative', zIndex:2}}>
                <Typography sx={{ width:'40%',  fontSize: '24px'  ,  position: 'relative', top: "650px" }}>Jobs can be categorized as paid or unpaid. Examples of unpaid jobs include volunteer, homemaker, mentor, student, and sometimes intern.</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', position: 'relative', zIndex: 2, top: '650px' }}>
                        <Box sx={{ paddingInline: '30px', width: "300px", height: '250px', backgroundColor: 'white', borderRadius: '5px', border: '2px solid #008000' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <img style={{ width: "40px", objectFit: 'cover', borderRadius: "100%" }} src="https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png" alt="" />
                                Amit Sharma
                                <span>Software Engineer, Pune</span>
                            </Box>
                            <span>
                                  “JobHub helped me land my first developer job within two weeks! The daily job updates and filters made it so easy to apply. Highly recommended for freshers.”
                            </span>
                        </Box>
                        <Box sx={{ paddingInline: '30px', width: "300px", height: '300px', backgroundColor: 'black', color: 'white', borderRadius: '5px', border: '2px solid #008000' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                                <img style={{ width: "40px", objectFit: 'cover', borderRadius: "100%" }} src="https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png" alt="" />
                                Priya Iyer
                                <span>HR Manager, Chennai</span>
                            </Box>
                            <span>
                                  “As an employer, JobHub's dashboard made shortlisting candidates fast and accurate. The smart filters saved me a lot of time in hiring.”
                            </span>
                        </Box>
                        <Box sx={{ paddingInline: '30px', width: "300px", height: '250px', backgroundColor: 'white', borderRadius: '5px', border: '2px solid #008000' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                <img style={{ width: "40px", objectFit: 'cover', borderRadius: "100%" }} src="https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png" alt="" />
                                Ravi Verma
                                <span>Marketing Executive, Delhi</span>
                            </Box>
                            <span>
                                “JobHub is the most user-friendly job portal I’ve ever used. It’s clean, simple, and really helped me understand salary expectations and apply confidently.”
                            </span>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box sx={{ position: 'relative', top: '100px', width: '35%', zIndex: 1 }}><img style={{ objectFit: 'cover' }} src={Ellipse_1} alt="" /><Typography sx={{position:'relative', top:'-560px', paddingInline:'30px', fontSize:'34px', }}>Everyone Should <br /> Believe  In What Our <br /> Client Say.</Typography></Box>
                    <Box sx={{ position: 'relative', }}><img style={{ objectFit: 'cover' }} src={Ellipse_2} alt="" /></Box>
                </Box>
            </Box>
        </>
    )
}
export default Testimonial
