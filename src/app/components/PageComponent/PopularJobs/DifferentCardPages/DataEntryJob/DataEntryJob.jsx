import React, { useState } from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage05.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import DataCategories from './Components/DataCategories';
import JobDescription from './Components/JobDescription';
import DataEntryTypes from './Components/DataEntryTypes';
import { Helmet } from 'react-helmet-async';
const DataEntryJob = () => {
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
  {/* Primary Meta Tags */}
  <title>Data Entry Jobs in Zirakpur, Chandigarh | Hiring Now - JobHub</title>
  <meta name="description" content="500+ Data Entry Jobs in Zirakpur & Chandigarh for freshers & experienced. Work from home & office positions | ₹12,000 - ₹25,000/month | Excel, Typing, Back Office jobs | Immediate hiring"/>
  <meta name="keywords" content="data entry jobs Zirakpur, data entry jobs Chandigarh, work from home data entry, back office jobs, typing jobs, Excel data entry, online data entry, part-time data work, data operator jobs, fresher data entry jobs"/>
  <meta name="author" content="JobHub - Punjab's Top Job Portal"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="7 days"/>
  <link rel="canonical" href="https://www.jobhub.com/data-entry-jobs-zirakpur-chandigarh"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.com/data-entry-jobs-zirakpur-chandigarh"/>
  <meta property="og:title" content="Data Entry Jobs in Zirakpur - 500+ Openings | JobHub"/>
  <meta property="og:description" content="Urgent hiring for data entry operators in Zirakpur & Chandigarh. Work from home available. Typing speed 25+ WPM. Salary up to ₹25,000. Apply today!"/>
  <meta property="og:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Data%20Entry.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub"/>
  <meta property="og:locale" content="en_IN"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHub.world"/>
  <meta name="twitter:creator" content="@JobHub.world"/>
  <meta name="twitter:title" content="Data Entry Jobs in Zirakpur - Work from Home Options"/>
  <meta name="twitter:description" content="500+ data entry vacancies in Zirakpur & Chandigarh region. English/Hindi typing jobs. Daily/weekly payroll. Start immediately after skill test."/>
  <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Data%20Entry.png"/>

  {/* Schema.org Job Posting Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Data Entry Operator",
        "description": "Accurate data entry work for various industries including healthcare, banking, and e-commerce. Requires good typing speed and attention to detail. Work from home options available for qualified candidates.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub",
          "sameAs": "https://www.jobhub.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "SCO 101, VIP Road",
            "addressLocality": "Zirakpur",
            "addressRegion": "Punjab",
            "postalCode": "140603",
            "addressCountry": "IN"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 12000,
            "maxValue": 25000,
            "unitText": "MONTH"
          }
        },
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "REMOTE"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        },
        "skills": "Typing, MS Excel, Data Accuracy, Computer Literacy",
        "qualifications": "10th/12th pass, Basic computer knowledge",
        "responsibilities": "Entering data from source documents, Verifying data accuracy, Maintaining records, Meeting daily targets"
      }
    `}
  </script>
</Helmet>
      <HeaderPage
          // backgroundImage={bgImage}
          headerText=
          {<>
            Data <span style={{ color: "green" }}>Entry</span>
          </>}
          subText="Accurate, efficient data entry specialist skilled in data integrity, deadlines, and confidentiality."
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
      <DataCategories/>
      {/* <JobDetails/> */}
      <JobDescription/>
      <DataEntryTypes/>
      </PageComponent>
    </>
  )
}

export default DataEntryJob;