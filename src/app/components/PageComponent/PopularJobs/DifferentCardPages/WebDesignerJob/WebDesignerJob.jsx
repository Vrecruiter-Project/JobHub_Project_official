import React, { useState } from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage06.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import WebDesignCategories from './Components/WebDesignCategories';
import WebDesignCard from './Components/WebDesignCard';
import WebDesigningTools from './Components/WebDesigningTools';
import { Helmet } from 'react-helmet-async';
const WebDesignerJob = () => {
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
  <title>Web Designer Jobs | UI/UX Designer Hiring - JobHub.world</title>
  <meta name="description" content="🌟 1500+ Web/UI/UX Designer Jobs on JobHub.world - Remote & On-site | ₹30K-1.2L/month | Freshers to Experienced | Figma/Adobe XD/Photoshop | Apply Today!"/>
  <meta name="keywords" content="web designer jobs, UI UX jobs JobHub, remote design jobs, Figma designer jobs Chandigarh, web design jobs Punjab, freelance designer jobs, WordPress designer hiring, creative jobs India"/>
  <meta name="author" content="JobHub.world - India's Creative Job Network"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="3 days"/>
  <link rel="canonical" href="https://www.jobhub.world/web-designer-jobs"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/web-designer-jobs"/>
  <meta property="og:title" content="🚀 1500+ Web Designer Jobs | Hire Creatives - JobHub.world"/>
  <meta property="og:description" content="Find UI/UX designers, Front-end devs & Creative talent. Salary up to ₹1.2L/month. Post jobs free or apply with portfolio. Immediate openings across India!"/>
  <meta property="og:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Designer.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHub_world"/>
  <meta name="twitter:creator" content="@JobHubDesign"/>
  <meta name="twitter:title" content="Hiring Web Designers - 1500+ Jobs @JobHub.world"/>
  <meta name="twitter:description" content="UI/UX/Front-end designer jobs with top salaries. Remote work options. Portfolio showcase required. #DesignJobs #HiringNow"/>
  <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Designer.png"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Web/UI/UX Designer",
        "description": "Designing intuitive user interfaces and engaging web experiences. Must have portfolio demonstrating design skills. Opportunity to work with leading startups and agencies through JobHub.world platform.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/images/logo-1200x1200.png"
        },
        "industry": "Information Technology",
        "jobLocationType": "TELECOMMUTE",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "India"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 30000,
            "maxValue": 120000,
            "unitText": "MONTH"
          }
        },
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR", "FREELANCE"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        },
        "skills": ["Figma", "Adobe XD", "UI Design", "UX Research", "Responsive Design", "HTML/CSS"],
        "educationRequirements": "Diploma/Degree in Design or equivalent experience"
      }
    `}
  </script>

  {/* Additional SEO Elements */}
  <meta name="classification" content="Web Design Jobs, Creative Employment"/>
  <meta name="copyright" content="JobHub.world"/>
  <meta name="distribution" content="Global"/>
  <meta name="geo.region" content="IN-PB"/>
  <meta name="geo.placename" content="Chandigarh Tricity"/>
  <meta name="rating" content="General"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText={
            <>
              Web <span style={{ color: 'green' }}>Designer</span>
            </>
          }
          subText='Creative web designer crafting user-friendly, visually appealing, and responsive websites.'
          buttonTitle1='Apply Now'
          buttonTitle2='Search'
          // onButtonClick1={handleScrollView}
          onSearchReady={setSearchFor} 
      onButtonClick1={handleSearch}
          onButtonClick2={() => alert('Hire Now clicked!')}
          imgSrc={HeaderImage}
          style={{
            width: '75%',
            height: 'auto',
          }}
        />
        <WebDesignCategories />
        {/* <JobDetails /> */}
        <WebDesignCard />
        <WebDesigningTools />
      </PageComponent>
    </>
  );
};

export default WebDesignerJob;
