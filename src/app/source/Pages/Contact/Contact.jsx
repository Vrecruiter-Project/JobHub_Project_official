import HeaderPage from "../../../components/GlobalComponents/HeaderPage/HeaderPage";
import PageComponent from "../../../components/PageComponent/PageComponent";
import ContactBgImage from "../../../assets/Images/bgImages/bgImage.png";
import ContactHeaderImage from "../../../assets/Images/bgImages/Contact_Headr.svg";
import { Typography, Box } from "@mui/material";
import FormContentBgImage from "../../../assets/Images/ContactPage/FormContentBackground.png";
import ContactForm from "../../../components/PageComponent/ContactForm";
import JobDetails from "../../../components/PageComponent/JobDetails/JobDetails";
import GlobalFaq from "../../../components/GlobalComponents/faq/GlobalFaq";
import CompanyAddress from "../../../components/PageComponent/ComapnyAddress";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";   
import MapSection from "../../../components/PageComponent/CompanyMapAddres";
 
const Contact = () => {   

  const targetSectionRef = useRef(null);

  const scrollToSection = () => {
    targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const FaqItems = [
    {
      id: 1,
      question: "Where are you located ?",
      answer:
        "JobHub is a specialized job search app in India focused exclusively on the blue-collar workforce, linking job seekers directly with employers in this sector. It enables blue-collar workers to find roles suited to their skills by connecting them with company HR departments, facilitating a two-way connection between workers and businesses.",
    },
    {
      id: 2,
      question: "How long does it take to get a response ?",
      answer:
        "To apply for a job, Click on find a job button and submit your application through the Registration Form",
    },
    {
      id: 3,
      question: "Can I schedule a call or meeting with your team?",
      answer:
        "Yes, Job Hub offers a variety of remote job opportunities across multiple industries for flexible work options.",
    },
    {
      id: 4,
      question: "How long does it take to get a response ?",
      answer:
        "No, applying for a job on the Job Hub Portal is completely free for all users.",
    },
    {
      id: 5,
      question: "What information do I need to provide when contacting you ?",
      answer:
        "To update your resume, navigate to the 'Build Resume' section and select a resume template to edit your information accordingly.",
    },
  ];

  return (
    <>
      <PageComponent>
        {/* Header Section */}
        <HeaderPage
          backgroundImage={ContactBgImage}
          headerText={
            <>
              Contact Us <span style={{ color: "green" }}>Page</span>
            </>
          }
          subText="Let's Get in Touch - We're Committed to Providing You with the Best Support Possible."
          buttonTitle1="Scroll Down"
          onButtonClick1={scrollToSection}
          imgSrc={ContactHeaderImage}
          style={{
            width: "95%",
            height: "auto",
          }}
          data-aos="fade-up"    

        />

        {/* Form Section */}
        <Box
          sx={{
            textAlign: "center",
            backgroundImage: `url(${FormContentBgImage})`,
            padding: "100px 0 80px 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          data-aos="zoom-in"
        >
          <Typography variant="h3" data-aos="fade-up">
            Get In Touch
          </Typography>
          <Typography variant="h5" data-aos="fade-up">
            How Can We Help?{" "}
            <span style={{ color: "green" }}>Send Us a Message!</span>
          </Typography>
        </Box>


        <div ref={targetSectionRef}>
          <ContactForm />
        </div>


        <JobDetails />

        <GlobalFaq faqItems={FaqItems} />

        <CompanyAddress />

        <Box data-aos="fade-up" sx={{ my: 9 }}>
          <MapSection />
        </Box>
      </PageComponent>
    </>
  );
};

export default Contact;
