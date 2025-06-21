import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react';
import GlobalSwiper from '../../../../../GlobalComponents/GlobalSwiper/GlobalSwiper';
import DocS1 from "../../../../../../assets/Images/DocVerifyImage/DocServices/DocS1.png";
import DocS2 from "../../../../../../assets/Images/DocVerifyImage/DocServices/DocS2.png";
import DocS3 from "../../../../../../assets/Images/DocVerifyImage/DocServices/DocS3.png";
import DocS4 from "../../../../../../assets/Images/DocVerifyImage/DocServices/DocS4.png";
import DocS5 from "../../../../../../assets/Images/DocVerifyImage/DocServices/DocS5.png";
import DocS6 from "../../../../../../assets/Images/DocVerifyImage/DocServices/DocS6.png";

const DocVerifyServices = () => {
    const style = [
        {
            py: { xs: 8, md: 8 },
            width: "100%",
            height: "auto",
            border: "2px solid transparent",
            borderRadius: { xs: "350px 350px 0px 0px", md: "350px 350px 10px 0px" },
            backgroundColor: "black",
            color: 'white'
        }
    ]
    const resumeItems1 = [
        {
            image: DocS1,
            title: "Pan Card",
            alt: "Pan Card"
        },
        {
            image: DocS2,
            title: "Aadhaar Card",
            alt: "Aadhaar Card"
        },
        {
            image: DocS3,
            title: "Marriage Certificate",
            alt: "Marriage Certificate"
        },
        {
            image: DocS4,
            title: "Driving License",
            alt: "Driving license"
        },
        {
            image: DocS5,
            title: "Passport",
            alt: "Passport"
        },
        {
            image: DocS6,
            title: "Birth Certificate",
            alt: "Birth Certificate"
        },
    ];
    return (
        <>
            <Box sx={style}>
                <Container sx={{
                    py: { xs: 2, md: 1 },
                    width: "80%",
                    mx: "auto",
                }} >
                    <Grid2 container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                        mb: 1,
                        px: 5
                    }}>
                        <Grid2 item xs={12} md={12}>
                            <Typography variant="h3" component="h1" sx={{
                                textAlign: "center",
                                fontSize: { xs: "35px", md: "45px" },
                            }}>
                                Document Verification <span style={{ color: "green" }}>Services</span>
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12} md={12} sx={{
                            py: 2,
                            px: { xs: "0px", sm: "0px", md: "100px" }
                        }}>
                            <Typography variant="body2" component="h2" sx={{
                                textAlign: "center",
                                fontSize: { xs: "15px", md: "17px" },
                            }}>
                                Jobhub provides automated document verification services, streamlining manual tasks and improving efficiency  across various departmental operations.
                            </Typography>
                        </Grid2>
                    </Grid2>

                    <Box sx={{display:'flex', justifyContent:'center', gap:"20px", paddingBlock:"50px"}}>
                        {resumeItems1.slice(0,4).map((img, index) => (
                            <div className='w-full ' key={index} >
                                <div className='py-5 rounded-lg gap-4 bg-white text-black flex justify-center flex-col items-center'>
                                <img className='' src={img.image} alt={img.alt} />
                                    <p>{img.title}</p>
                                </div>
                                    
                            </div>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default DocVerifyServices

