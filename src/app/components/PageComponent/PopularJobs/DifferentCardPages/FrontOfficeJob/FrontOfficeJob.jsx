import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../..//assets/Images/FrontOfficeImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import FrontCategories from './Components/FrontCategories';

import FirImg from '../../../../../assets/Images/FrontOfficeImages/first .png';
import SecImg from '../../../../../assets/Images/FrontOfficeImages/second.gif';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import { Helmet } from 'react-helmet-async';


const FrontOfficeJob = () => {
  const [searchFor, setSearchFor] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchFor) return;
    const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
    navigate(`/candidatedashboard?${applyfor}`);
  };

  const imgoneStyle = {

    // maxHeight: '60%',
    maxWidth: '60%',

  }
  const imgtwoStyle = {

    maxHeight: '90%',
    background: 'linear-gradient(to bottom, #ffffff05, #35a335)',
    borderRadius: "2%"
  };
  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Front Office Jobs | Receptionist & Admin Roles - JobHub.world</title>
  <meta name="description" content="👔 1200+ Front Office Jobs for Males & Females | Receptionist, Admin Executive, Front Desk Roles | ₹12K-35K/month | English Communication | Immediate Hiring | Apply Today!"/>
  <meta name="keywords" content="front office jobs, receptionist jobs, admin executive jobs, front desk jobs, office assistant jobs, male receptionist jobs, female receptionist jobs, hotel front office jobs, corporate receptionist, fresher admin jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Office Jobs Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="7 days"/>
  <link rel="canonical" href="https://www.jobhub.world/frontoffice"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/frontoffice"/>
  <meta property="og:title" content="💼 1200+ Front Office Jobs (Male/Female) - Hiring Now | JobHub.world"/>
  <meta property="og:description" content="Urgent openings for receptionists & front office executives in hotels, corporates & hospitals. Good communication skills required. Salary up to ₹35K. Both freshers & experienced can apply."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/front-office-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubOffice"/>
  <meta name="twitter:creator" content="@JobHubAdmin"/>
  <meta name="twitter:title" content="Front Office Jobs - Male & Female Candidates Welcome"/>
  <meta name="twitter:description" content="1200+ receptionist & admin executive positions available across India. Good English/Hindi communication required. #FrontOfficeJobs #HiringNow"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/front-office-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Front Office Executive",
        "description": "Handling front desk operations, greeting visitors, managing calls and appointments. Open to both male and female candidates with good communication skills.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Administration",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Multiple Locations",
            "addressRegion": "India",
            "addressCountry": "IN"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 12000,
            "maxValue": 35000,
            "unitText": "MONTH"
          }
        },
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        },
        "skills": ["Communication", "MS Office", "Customer Service", "Multi-tasking"],
        "qualifications": "12th pass/Graduate, Basic computer knowledge"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Admin Jobs",
          "item": "https://www.jobhub.world/frontoffice"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Front Office Jobs",
          "item": "https://www.jobhub.world/frontoffice"
        }]
      }]
    `}
  </script>

  {/* Gender-Neutral SEO */}
  <meta name="gender" content="male, female"/>
  <meta name="job-category" content="front-office, receptionist, admin"/>
  <meta name="language-requirements" content="english, hindi, regional"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Front<span style={{ color: "green" }}>Office</span>
          </>}
          subText="The Front Office Executive serves as the first point of contact for visitors and clients, ensuring a welcoming ."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onSearchReady={setSearchFor} 
      onButtonClick1={handleSearch}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style={{
            width: "75%",
            height: "auto",
          }}
        />

        <FrontCategories />
        {/* <JobDetails /> */}

        {/* First Desc */}
        <GlobalJobCard1
          title={"Front Office"}
          subtitle={"A Receptionist is responsible for the first contact an organization has with its visitors and customersand ensures that the organization’s image, whether breached or formal, is maintained. Front deskstaff has an explicit function to perform in order to maintain proper spiraling and serve as the first line of touch points."} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong>Front Desk Management :</strong> Respond to inquiries from visitors, clients, and employees  professionally.Field, filter, and transfer telephone calls to appropriate departments.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Administrative Support: </strong>Handle incoming and outgoing communications such as emails, parcels, and letters.Maintain schedules and calendars for appointments.Book and prepare meeting rooms for scheduled gatherings.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Customer Service:</strong>Provide prompt and courteous answers to questions via in-person interactions, email, or phone calls.',
              },

              {
                icon: tickImg,
                description:
                  'Share details about the company’s profile, services, and any applicable privacy and security policies.',
              },



            ]} mainImage={FirImg} mainImageStyle={imgoneStyle}

        />

        {/* Second Desc */}
        <GlobaljobCard2
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Visitor Coordination:</strong>Welcome visitors with professionalism, ensuring they sign in and receive necessary identification or passes.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Record Keeping:</strong>Maintain accurate logs of visitor entries, incoming deliveries, and outgoing correspondence for reference and security purposes.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Technology Proficiency:</strong> Utilize office software and equipment for efficient scheduling, data entry, and communication tasks.'
              },
              {
                icon: tickImg,
                description:
                  '<strong>Emergency Preparedness:</strong> Provide assistance during emergency situations by following safety protocols and directing visitors and employees to appropriate actions or exits.',
              },




            ]
          } title={"Essential Duties"} mainImage={SecImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCard2>


      </PageComponent>
    </>
  )
}

export default FrontOfficeJob;