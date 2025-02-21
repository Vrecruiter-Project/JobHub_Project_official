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
      <PageComponent>

        <HeaderPage
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
        />
        <Resumeswiper /> 
        <JobCards />
        <JobDetails />
        <PopularJobs id="popularSection" />
        <ResumeSection />
        <PartnerSection />
        <ChoiceSection />
        <Testimonial />
        <GlobalFaq faqItems={faqItems} />
        <Outlet />
        <ChatAi />
      </PageComponent>
    </>
  );
};

export default Home;


