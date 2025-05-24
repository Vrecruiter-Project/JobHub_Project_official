import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage02.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import CategoriesSection from './Components/CategoriesSection';
import JobDetails from '../../../JobDetails/JobDetails';
import BusinessServices from './Components/BusinessServices';
import JobhubTelecaller from './Components/JobhubTelecaller';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const TelecallerJob = () => {
    const [searchFor, setSearchFor] = useState("");
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (!searchFor) return;
      const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
      navigate(`/candidatedashboard?${applyfor}`);
    };
  
  return (
    <>
      
      <PageComponent>
          <Helmet>
  <title>TeleCaller Jobs in Zirakpur, Chandigarh | Hiring Now - JobHub</title>
  <meta name="description" content="Find 250+ Telecaller Jobs in Zirakpur & Chandigarh. Apply for full-time, part-time, work-from-home telecaller roles with salary up to ₹25,000. Free job posting for employers. Immediate hiring for freshers & experienced."/>
  <meta name="keywords" content="telecaller jobs Zirakpur, telecaller jobs Chandigarh Mohali, BPO jobs Panchkula, customer support work from home, inbound telecaller jobs, outbound call center jobs, night shift telecaller jobs, female telecaller jobs, international calling jobs, telemarketing jobs for freshers"/>
  <meta name="author" content="JobHub - India's Fastest Growing Job Portal"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="7 days"/>
  <link rel="canonical" href="https://www.jobhub.world/telecaller"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/telecaller"/>
  <meta property="og:title" content="Hiring 250+ Telecallers in Zirakpur & Chandigarh | JobHub"/>
  <meta property="og:description" content="Urgent hiring for telecallers in Zirakpur & Chandigarh region. Full-time, part-time & work-from-home options available. Salary ₹15,000 - ₹25,000. Apply now or post jobs free!"/>
  <meta property="og:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/TeleCaller%20(1).png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub"/>
  <meta property="og:locale" content="en_IN"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHub.world"/>
  <meta name="twitter:creator" content="@JobHub.world"/>
  <meta name="twitter:title" content="Telecaller Job Openings in Zirakpur (Chandigarh) - Apply Today"/>
  <meta name="twitter:description" content="250+ telecaller vacancies in Zirakpur & Chandigarh region. English/Hindi/Punjabi speakers needed. Weekly payroll. Start immediately after selection process."/>
  <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/TeleCaller%20(1).png"/>

  {/* Schema.org Job Posting Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "JobPosting",
          "url": "https://www.jobhub.world/",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png",
        "title": "Telecaller Jobs in Zirakpur, Chandigarh",
        "description": "Hiring telecallers for domestic and international calling projects. Excellent communication skills required in English and Hindi. Training provided. Multiple shifts available.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub",
          "sameAs": "https://www.jobhub.world"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "25th Unit, 3rd Floor, Sushma infinium",
            "addressRegion": "Zirakpur, Chandigarh",
            "postalCode": "140603",
            "addressCountry": "IN"
          }
        },
        "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8512827174",
        "contactType": "customer service",
        "email": "info.jobhubworld@gmail.com"
        },
        "datePosted": "2024-05-24",
        "validThrough": "2024-5-24",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 15000,
            "maxValue": 25000,
            "unitText": "MONTH"
          }
        },
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        }
      }
    `}
          </script>
          <link rel="canonical" href="https://www.jobhub.world"/>
          <meta name="geo.region" content="IN-CH"/>
          <meta name="geo.placename" content="Chandigarh"/>
          <meta name="geo.position" content="30.638151602504394;76.82510128606455"/>
          <meta name="ICBM" content="30.638151602504394;76.82510128606455"/>
      </Helmet>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Tele<span style={{ color: "green" }}>caller</span>
          </>}
          subText="Friendly telecaller providing customer support, handling inquiries, and boosting client satisfaction."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onSearchReady={setSearchFor} 
      onButtonClick1={handleSearch}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "75%", 
            height: "auto", 
          }}
        />
      <CategoriesSection/>
      <JobDetails/>
      <BusinessServices/>
      <JobhubTelecaller/>
      </PageComponent>
    </>
  )
}

export default TelecallerJob