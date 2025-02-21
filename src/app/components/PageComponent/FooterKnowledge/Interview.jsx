import React from 'react';
import PageComponent from '../PageComponent';
import { Box, Grid2, Typography, Container } from '@mui/material';
import leftHandArrow from '../../../assets/Images/eventsImages/leftHandArrow.png'


export default function InterviewTips() {

  return (
    <PageComponent>


      <Container >
        <Box sx={{ py: 6 }}>
          {/* Header */}
          <Typography variant="h2" sx={{
            mb: 3,
            textDecoration: "underline",
            fontSize: { xs: '25px', sm: '35px', md: '45px', lg: '55px' },
            textAlign: 'center',

          }}>
            HR Interview Questions
          </Typography>

          {/* Content */}
          <Grid2 container spacing={4}>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", paddingTop: "30px", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                Tell me something about yourself ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                Thank you for allowing me to introduce myself. My name is [Your Name] and I am from [Your City]. I have completed my bachelor of technology with the CSE branch from XYZ University. <br />

                First of all, I want to introduce myself with my soft skills. I am optimistic, self-confident, hardworking, and have a positive mindset. My technical skills include proficiency in <span style={{ color: "green" }}>Java programming language, C programming,</span> and <span style={{ color: 'green' }}>HTML</span> Also, I have a good command of MS Excel and web technologies. <br />

                My interests include dancing, internet, chess, and listening to music. In my leisure time, I enjoy reading news articles on my mobile phone.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                What are your strengths and weaknesses ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                I have several strengths namely - I am patient, committed, honest and self-motivated. I am the biggest dreamer I have ever come across! I forgive easily and hate to keep grudges in my heart. my greatest weakness is that I don’t like getting interrupted when I am seriously into something. <br />

                Another one of my weakness is that I trust people very easily. As I already said, I am a very patient person, so I am actively working on this lacuna.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                Why are you interested in this job ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                It’s an honor and a privilege to work for an established company like yours. As I researched the job opening you have, I realized that my abilities align with your requirements. Through this job, I can showcase my technical skills to help the company’s development.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                Where do you see yourself in the next 5 years ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                Over five years, I’d love to take advantage of every opportunity the company will give me to gain knowledge through the external and internal training programs. My dream career objective is to be a <span style={{ color: "green" }}>Full Stack Developer</span>, Hence,  I am looking forward to creating different products that embody the mission of this company and contribute to making a positive impact while speeding up my path to become a Tech Architect.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                Is there anything that makes you different from other candidates ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                There are a few things that make me different from other candidates. First, I have a lot of experience working with different teams and managing projects. I’m also great at communicating with people, so I can easily build relationships with clients and coworkers, Finally, I have a strong interest in learning new things and taking on new challenges.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                Why should we hire you ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                Because I have relevant skills which are required for this job, And also I’m very passionate towards this job if you hire me it will be a great plate-form to showcase my skills and put 100% effort and also learn new things and innovate something new so that which will help to buld my career and help the organization too, I believe that you’re looking someone who is so hard-working and dedicated to his work that’s all abilities in me.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                How much salary do you expect ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                As a fresher, I am looking for a place to start my career as a developer in your company. This is a great opportunity for me.

                My goal is to learn and develop my skills. I believe the salary you offer will cover my basic needs.

              </Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant='h4' sx={{ color: "#1F6331", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' } }}>
                <Box
                  component="img"
                  sx={{
                    display: 'inline',
                    marginLeft: {
                      xs: '-30px', 
                      sm: '-60px', 
                      md: '-90px', 
                    },
                    maxWidth: '100%', 
                    height: 'auto', 
                  }}
                  src={leftHandArrow}
                  alt="Left Hand Arrow"
                />
                How do you handle stress, pressure and anxiety ?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 2, fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '20px' } }}>
                Under pressure and stress, I usually my soft skills and handle every situation calmly. I also perform physical exercises and mind relaxing activities like mediation to deal with work stress and pressue.

              </Typography>
            </Grid2>

          </Grid2>

        </Box>
      </Container>

    </PageComponent>
  );
}
