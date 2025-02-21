import React ,{useEffect} from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import DocVerify from '../../../../../../assets/Images/DocVerifyImage/VerifyDocImg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DocBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyDocVerify = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const content = [
    {
      icon: tickImg,
      description: "JobHub ensures that all document audit agendas are reviewed. Guarantees the authenticity and legality of available opportunities."
    },
    {
      icon: tickImg,
      description: "This automatically helps you fill out several jobs for Document Verification in a quick few clicks. So the ease saves both time and effort for a good job hunt."
    },
    {
      icon: tickImg,
      description: "JobHub not only connects you with immediate job openings but also provides potential career advancement opportunities within the Document Verification industry."
    },
    {
      icon: tickImg,
      description: "JobHub partners with leading companies that offer competitive salaries for BPO services. You can expect fair and market compensation for your skills and expertise."
    },
    {
      icon: tickImg,
      description: "When you apply in JobHub as a route to guaranteed jobs, you get a lot of choices, verified job listings, flexibility of applying, chances to advance in your career, and even high-paying competitive salary offers."
    },
  ];

  return (
    <>
      <Box sx={{
        my: { xs: 4, md: 10 },
        width: "100%",
        backgroundImage: { xs: "none", sm: "none", md: `url(${DocBg})` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
      }}>

        <Grid2 container sx={{
          width: "80%",
          mx: "auto"
        }}>

          <Grid2 item xs={12} md={6} sx={{
            pt: 10,
            width: { xs: "100%", sm: "100%", md: "50%" },
          }} data-aos="fade-right">
            <Grid2 container>
              <Grid2 item xs={12} md={12} sx={{
                textAlign: { xs: "center", sm: "center", md: "left" }
              }}>
                <Typography variant="h4" component="h2">Why apply at JOBHUB for Document Verification</Typography>
                <Typography variant='body2' component='h5' sx={{
                  pt: 1
                }}>Jobhub offers Document Verification jobs based on the fields of industries and companies.</Typography>
              </Grid2>
            </Grid2>

            <Grid2 container>
              {content.map((item, index) => (
                <Grid2 item key={index} data-aos="fade-up">
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: 2,
                    width: "100%"
                  }}>
                    <img src={item.icon} style={{ height: "30px", width: "30px" }} alt="check" />
                    <Typography variant='body2' component='h5' sx={{
                      px: { xs: 3 },
                      fontSize: { xs: "12px", md: "15px" }
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>

          <Grid2 item xs={12} md={6} sx={{
            mt: 2,
            width: { xs: "100%", sm: "100%", md: "50%" },
          }} data-aos="fade-left">
            <img src={DocVerify} style={{
              width: "90%",
              maxWidth: "80%",
              height: "100%"
            }} alt="Document Verification" />
          </Grid2>

        </Grid2>
      </Box>
    </>
  );
};

export default WhyDocVerify;
