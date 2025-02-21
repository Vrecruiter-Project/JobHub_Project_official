import React from 'react'
import { Box, Grid2, Typography } from '@mui/material';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalGrid2Section from '../../../../../GlobalComponents/GlobalGrid2Section/GlobalGrid2Section';
import DaTypeBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';

const DataEntryTypes = () => {
    const contentItems = [
        {
            icon: tickImg,
            description:
                "Manual data entry: Simple form of data entry, which involves keying in information to a computer system or database from any tangible or digital source.",
        },
        {
            icon: tickImg,
            description:
                "Transcription: More complex form of data entry, whereby the transcriber listens to audio recordings and transcribes the same into documents or reports.",
        },
        {
            icon: tickImg,
            description:
                "Alphanumeric data entry: Enter letters and numbers, including addresses.",
        },
        {
            icon: tickImg,
            description:"Numeric Data Input: This includes inputting the numerical data related to finance as well as other numbers.",
        },
        {
            icon: tickImg,
            description: "Text data entry : The text is copied from various sources.",
        },
        {
            icon: tickImg,
            description: "Data Entry Online : Digital document comprises data entry. Image data input: Data is extracted from images.",
        },
    ]
  return (
    <>
        <Box
            sx={{
                width: '100%',
                mx: 'auto',
                my: 4,
                display: 'grid',
                placeItems: 'center',
                backgroundImage: { xs: "none", sm: "none", md: `url(${DataBg})` },
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% 170px",
                backgroundSize: "cover",
            }}
        >
        
            <Grid2 container justifyContent="center" alignItems="center" sx={{ pt: { xs: 6 }, pb: 4 }}>
                <Grid2 item xs={12} sx={{ position: 'relative', textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontSize: { xs: '30px', md: '45px' },
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                display: 'block',
                                width: '100%',
                                height: '40px',
                                backgroundImage: `url(${DaTypeBg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                position: 'absolute',
                                bottom: '-30px',
                                left: 0,
                            },
                        }}
                    >
                        Data Entry <span style={{ color: 'green' }}>Types</span>
                    </Typography>
                </Grid2>
            </Grid2>

            <GlobalGrid2Section content={contentItems} Box reverse= {true}/>
            </Box>
    </>
  );
}

export default DataEntryTypes;