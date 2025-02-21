import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import FaqsBg from '../../../assets/Images/bgImages/PartnersBg.png';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GlobalFaq({ faqItems, id }) {

  useEffect(() => {
    AOS.init();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  };

  return (
    <>
      <Box sx={{
        pt: { xs: 14, md: 4 },
      }}>
        <Container
          id={id}
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Typography variant="h3" component="h2" align="center"
            data-aos="fade-up"
            sx={{
              fontSize: {
                xs: "35px", md: "45px",
                backgroundImage: `url(${FaqsBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
            }}>
            Frequently asked <span style={{ color: "green" }}>questions</span>
          </Typography>
          <Box sx={{ width: "100%" }}>
            {faqItems.map((item) => (
              <Accordion

                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{
                  my: 2,
                  py: 1,
                }}
              >
                <AccordionSummary


                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${item.id}d-content`}
                  id={`${item.id}d-header`}
                >
                  <Typography
                    data-aos="fade-up" component="h2" variant="subtitle2" sx={{ fontSize: "18px" }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>{item.answer}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

GlobalFaq.propTypes = {
  faqItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.any,
    })
  ),
  id: PropTypes.string.isRequired,
};
