import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage04.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import DocCategories from './Components/DocCategories';
import JobDetails from '../../../JobDetails/JobDetails';
import EnsuringTrust from './Components/EnsuringTrust';
import DocVerifyServices from './Components/DocVerifyServices';
import WhyDocVerify from './Components/WhyDocVerify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const DocVerifyJob = () => {
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
  <title>Document Verification Jobs in Zirakpur | Work from Home & Office Roles - JobHub</title>
  <meta name="description" content="Apply for 500+ Document Verification Jobs in India. Work from home & office positions available. Freshers welcome | ₹15,000 - ₹35,000/month | Immediate hiring | KYC, Banking, Aadhaar verification jobs"/>
  <meta name="keywords" content="document verification jobs, work from home verification jobs, KYC jobs, banking verification jobs, Aadhaar verification jobs, data verification jobs, remote verification jobs, fresher document jobs, part-time verification work, back office verification jobs"/>
  <meta name="author" content="JobHub - India's Leading Recruitment Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="7 days"/>
  <link rel="canonical" href="https://www.jobhub.world/documentverification"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/documentverification"/>
  <meta property="og:title" content="500+ Document Verification Jobs - Work from Home Available | JobHub"/>
  <meta property="og:description" content="Hiring document verification specialists for banking, KYC & Aadhaar verification. Freshers can apply. Earn ₹15k-35k/month. Flexible shifts. Start immediately after online assessment."/>
  <meta property="og:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Document%20Verification%20(1).png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub"/>
  <meta property="og:locale" content="en_IN"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubIndia"/>
  <meta name="twitter:creator" content="@JobHubCareers"/>
  <meta name="twitter:title" content="Work-from-Home Document Verification Jobs - Hiring Now"/>
  <meta name="twitter:description" content="500+ openings for document verification specialists. KYC, banking & Aadhaar verification positions. Training provided. Weekly payments. Apply today!"/>
  <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Document%20Verification%20(1).png"/>

  {/* Schema.org Job Posting Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Document Verification Specialist",
        "description": "Verifying KYC documents, bank statements, Aadhaar cards, and other official documents. Ensuring accuracy and compliance with regulatory requirements. Work from home options available after training period.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub",
          "sameAs": "https://www.jobhub.com"
        },
        "jobLocation": [{
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Multiple Locations",
            "addressRegion": "India",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Work from Home",
            "addressCountry": "IN"
          }
        }],
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "REMOTE"],
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 15000,
            "maxValue": 35000,
            "unitText": "MONTH"
          }
        },
        "qualifications": "12th pass or equivalent; Computer literate; Attention to detail",
        "responsibilities": "Verify authenticity of documents, Cross-check data entries, Maintain verification records, Flag suspicious documents",
        "skills": "Document verification, Data entry, MS Office, Attention to detail"
      }
    `}
  </script>
</Helmet>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Document <span style={{ color: "green" }}>Verification Jobs</span>
          </>}
          subText="Ensure accuracy and trust with our efficient document verification services."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          onSearchReady={setSearchFor} 
      onButtonClick1={handleSearch}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "85%", 
            height: "auto", 
          }}
        />
        <DocCategories/>
      <JobDetails/>
      <EnsuringTrust/>
      <DocVerifyServices/>
      <WhyDocVerify/>
      </PageComponent>
    </>
  )
}

export default DocVerifyJob;
