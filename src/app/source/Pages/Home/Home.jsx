import React, { useState, useEffect } from 'react';
import PageComponent from '../../../components/PageComponent/PageComponent';
import HeaderPage from '../../../components/GlobalComponents/HeaderPage/HeaderPage';
import bgImage from '../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../assets/Images/headerImages/HeaderImage01.png';
import JobCards from '../../../components/PageComponent/JobCards';
import JobDetails from '../../../components/PageComponent/JobDetails/JobDetails';
import PopularJobs from '../../../components/PageComponent/PopularJobs/PopularJobs';
import ResumeSection from '../../../components/PageComponent/ResumeSection';
import PartnerSection from '../../../components/PageComponent/PartnerSection';
import ChoiceSection from '../../../components/PageComponent/ChoiceSection';
import Testimonial from '../../../components/PageComponent/Testimonial/Testimonial';
import GlobalFaq from '../../../components/GlobalComponents/faq/GlobalFaq';
import { Outlet, useNavigate } from 'react-router-dom';
import ChatAi from '../../../../app/components/Whatsapp/ChatAi';
import Resumeswiper from '../../../components/PageComponent/Resumeswiper';
import { HeroSection } from '../../../components/GlobalComponents/HeaderPage/util/SearchComponent';
import EmployerHireNow from '../../../components/PageComponent/EmployerHireNow';

import EmployerDashboard from "../EmployerPage/EmployerDashboard/EmployerDashboard"
import HomeBanner from '../../../components/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const navigate = useNavigate();



  const handleScrollView = () => {
    const section = document.getElementById('popularSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      id: 1,
      question: 'What type of jobs are available on Jobhub?',
      answer:
        'JobHub is a specialized job search app in India focused exclusively on the blue-collar workforce, linking job seekers directly with employers in this sector. It enables blue-collar workers to find roles suited to their skills by connecting them with company HR departments, facilitating a two-way connection between workers and businesses.',
    },
    {
      id: 2,
      question: 'How do I apply a job?',
      answer:
        'To apply for a job, Click on find a job button and submit your application through the Registration Form',
    },
    {
      id: 3,
      question: 'Are there remote job opportunities on Job Hub?',
      answer:
        'Yes, Job Hub offers a variety of remote job opportunities across multiple industries for flexible work options.',
    },
    {
      id: 4,
      question: 'Are there any charges for applying for a job?',
      answer:
        'No, applying for a job on the Job Hub Portal is completely free for all users.',
    },
    {
      id: 5,
      question: 'How do I update my resume or profile information?',
      answer:
        "To update your resume, navigate to the 'Build Resume' section and select a resume template to edit your information accordingly.",
    },
  ];

  return (
    <>
    <Helmet>
      <meta name="description" content="JobHub - Find the best jobs in Chandigarh, India. Post jobs, hire candidates, and manage recruitment with our employer & admin dashboard services." />
    <meta name="keywords" content="jobs in Chandigarh, job portal, recruitment, employer dashboard, admin dashboard, hiring, fresher jobs, experienced jobs, Chandigarh jobs" />
    <meta name="author" content="JobHub" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content="JobHub - Best Job Portal in Chandigarh | Hire & Get Hired" />
    <meta property="og:description" content="Find top jobs in Chandigarh or post vacancies for free. Manage recruitment with our employer & admin dashboard services." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.jobhub.world" />
    <meta property="og:image" content="https://raw.githubusercontent.com/Vrecruiter-Project/socialAssests/refs/heads/main/socialMediaOG.png" />
    <meta property="og:site_name" content="JobHub" />
    <meta property="og:locale" content="en_IN" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="JobHub - Best Job Portal in Chandigarh | Hire & Get Hired" />
    <meta name="twitter:description" content="Find top jobs in Chandigarh or post vacancies for free. Manage recruitment with our employer & admin dashboard services." />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/Vrecruiter-Project/socialAssests/refs/heads/main/socialMediaOG.png" />
    <meta name="twitter:site" content="@JobHub_world" />
    <meta name="twitter:creator" content="@JobHub_world" />

    <link rel="canonical" href="https://www.jobhub.world" />
    
    <meta name="geo.region" content="IN-CH" />
    <meta name="geo.placename" content="Chandigarh" />
    <meta name="geo.position" content="30.638151602504394;76.82510128606455" />
    <meta name="ICBM" content="30.638151602504394;76.82510128606455" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JobHub",
        "url": "https://www.jobhub.world/",
        "logo": "https://www.jobhub.world/Jobhub%20logo.png",
        "description": "Leading job portal in Chandigarh, India, connecting employers and job seekers with advanced dashboard services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "25th Unit, 3rd Floor, Sushma infinium",
          "addressLocality": "Zirakpur",
          "addressRegion": "Chandigarh",
          "postalCode": "140603",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8512827174",
          "contactType": "customer service",
          "email": "info.jobhubworld@gmail.com"
        },
        "sameAs": [
          "https://www.facebook.com/people/JobHubworld/61575148695953/",
          "https://www.linkedin.com/in/jobhub-world-5559a7361/",
          "https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw"
        ]
      })}
    </script>
    </Helmet>
    <HomeBanner/>
    <PageComponent>

        {/* <HeaderPage
          backgroundImage={bgImage}
          headerText={
            <>

              Find Your Career With
              <span style={{ color: 'green' }}>JOBHUB</span>

            </>
          }
          subText="Your dream job is just a click away"
          buttonTitle1="Find a Job"
          buttonTitle2="Hire Now"
          onButtonClick1={handleScrollView}
          onButtonClick2={() => navigate('/verification')}
          imgSrc={HeaderImage}
          style={{
            width: '95%',
            height: 'auto',
          }}
          button2
        /> */}
        <HeroSection/>
        {/* <Resumeswiper />  */}
        <JobCards />
        <JobDetails />
        <PopularJobs id="popularSection" />
        <ResumeSection />
        <ChoiceSection />
        <PartnerSection />
        {/* <EmployerHireNow/> */}
        <Testimonial />
        <GlobalFaq faqItems={faqItems} />
        <Outlet />
        <ChatAi />
      </PageComponent>
      
    </>
  );
};

export default Home;
