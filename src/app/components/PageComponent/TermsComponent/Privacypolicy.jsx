import React from 'react';
import PageComponent from '../PageComponent';
import { Container, Typography, Box, Divider, List, ListItem, ListItemText } from '@mui/material';

export default function PrivacyPolicy() {
  return (
    <PageComponent>
        <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography paragraph>
          JobHub is a commercial app by VR recuiters. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information for anyone using the app and website of JobHub . By using JobHub Platform, you consent to the terms of our privacy policy  in addition to our Terms of Service. We encourage you to read this Privacy Policy periodically to keep yourself updated with any changes and updates that we make to this Privacy Policy.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Personal Identification Information
        </Typography>
        <Typography paragraph>
          If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Identification Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        </Typography>

        <Typography paragraph>
          The personal information you provide on JobHub Platform when you fill out your profile is public, such as your name, location, gender, profile picture, education and professional info including where you are working. This is hereinafter called Public Profile. Your Public Profile will be published on <a href="https://jobhub.world/username" target="_blank" rel="noopener noreferrer">jobhub.world/username</a>. Your Public Profile can:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Be associated with you on the internet" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Show up when someone searches for you on search engines" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Help connect you with friends and family for suitable job opportunities" />
          </ListItem>
        </List>
        <Typography paragraph>
          We may collect Personal Identification Information of users, including information from public platforms like Truecaller, Facebook, LinkedIn, Twitter, Google, or other service providers to identify users and enhance communication, processing, and personalization of services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Non-personal Identification Information
        </Typography>
        <Typography paragraph>
          We may collect non-personal identification information about users whenever they interact with our site. Non-personal identification information may include technical details such as the type of mobile phone, operating system, internet service providers used, IP address, and other similar information.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Usage and Technical Information
        </Typography>
        <Typography paragraph>
          We collect information about how you interact with our Service. This information may include your IP address, geographical location, browser type, referral source, length of visit, pages viewed, and items clicked.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Information Collection
        </Typography>
        <Typography paragraph>
          For a better experience while using our Service, you are required to provide us with certain personally identifiable information for your Public Profile, including but not limited to:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Identity information, such as your first name, last name, gender, date of birth, username, verified by voter ID card, PAN, or driver's license." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact information, such as your mobile number, postal address, email address, and telephone number." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Professional information, such as your education, work experience, skills, salary, photo, city, area, and other relevant details." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Feedback and correspondence, such as responses to surveys, customer support queries, or feedback." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Usage information, such as information about how you use the Service and interact with us." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Marketing information, such as your preferences for receiving marketing communications." />
          </ListItem>
        </List>

        <Typography paragraph>
          JobHub Platform's mission is to connect talent to job opportunities and employers to quality talent. We are committed to being transparent about the data we collect, how it is used, and with whom it is shared.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We may use your information for the following purposes:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="To send updates about job opportunities via email." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To track usage and traffic patterns (e.g., track your movements around the Services) and gather demographic information." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To deliver personalized messages and tailor-made advertisements based on your interest and browsing history." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To communicate directly with you, including updates on new products and services." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To monitor and ensure compliance with our legal obligations." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          6. How We Protect Your Information
        </Typography>
        <Typography paragraph>
          We adopt appropriate data collection, storage, and processing practices to protect your personal information from unauthorized access, alteration, disclosure, or destruction. The data is stored securely on our servers - https://jobhub.world and https://metrics.jobhub.world.
        </Typography>

        <Typography variant="h5" gutterBottom>
          7. Sharing Your Personal Information
        </Typography>
        <Typography paragraph>
          We do not sell, trade, or rent your personal identification information to any third party. However, we may share aggregated, non-personal demographic information with our business partners, affiliates, and advertisers. Additionally, we may share your personal information under the following circumstances:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="With affiliates and group companies for business and administrative purposes." />
          </ListItem>
          <ListItem>
            <ListItemText primary="With companies posting jobs on JobHub Platform." />
          </ListItem>
          <ListItem>
            <ListItemText primary="With third parties such as enforcement authorities when required by law." />
          </ListItem>
          <ListItem>
            <ListItemText primary="During mergers, acquisitions, or sales of assets." />
          </ListItem>
          <ListItem>
            <ListItemText primary="With third-party service providers to help us provide our services." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          8. Log Data
        </Typography>
        <Typography paragraph>
          Whenever you use our Service, we collect data through third-party services, such as your IP address, device name, operating system, and other statistics to log your use.
        </Typography>

        <Typography variant="h5" gutterBottom>
          9. Cookies
        </Typography>
        <Typography paragraph>
          Cookies are used by third-party services to collect information and improve services. You have the option to accept or refuse these cookies, but doing so may impact your ability to use certain portions of the service.
        </Typography>

        <Typography variant="h5" gutterBottom>
          10. Security
        </Typography>
        <Typography paragraph>
          We take commercially acceptable measures to protect your Personal Information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </Typography>

        <Typography variant="h5" gutterBottom>
          11. Children's Privacy
        </Typography>
        <Typography paragraph>
          We do not knowingly collect personally identifiable information from children under 13. If we become aware of such information, we will delete it immediately from our servers.
        </Typography>

        <Typography variant="h5" gutterBottom>
          12. Changes to This Privacy Policy
        </Typography>
        <Typography paragraph>
          We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes. The updated Privacy Policy will be posted on this page, and changes will be effective immediately after being posted.
        </Typography>

        <Typography variant="h5" gutterBottom>
          13. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions or suggestions about our Privacy Policy, feel free to contact us at:
        </Typography>
        <Typography paragraph>
          SUSHMA Infinium,  Zirakpur, Chandigarh, India
        </Typography>
        <Typography paragraph>
          Phone: +91 95180-35030, +91 89084-67890
        </Typography>
        <Typography paragraph>
          Email: <a href="mailto:vrecruitersofficial@gmail.com">vrecruitersofficial@gmail.com</a>
        </Typography>
      </Box>
    </Container>
    </PageComponent >
  );
}
