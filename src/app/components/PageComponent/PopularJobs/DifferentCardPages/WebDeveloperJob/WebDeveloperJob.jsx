import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/WebDeveloper/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import WebDevCat from './Component/WebDevCat';
import WebDevFirstDes from './Component/WebDevFirstDes';
import WebDevCrousal from './Component/WebDevCrousal';
import WebDevSecDes from './Component/WebDevSecDes';
import { Helmet } from 'react-helmet-async';
const WebDeveloperJob = () => {
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
  <title>Web Developer Jobs | Full-stack & Front-end Hiring - JobHub.world</title>
  <meta name="description" content="🚀 2000+ Web Developer Jobs in India & Remote | React, Node, PHP | ₹25K-2L/month | Freshers to Experienced | Immediate Hiring | Apply Today on JobHub.world"/>
  <meta name="keywords" content="web developer jobs, full stack developer jobs, front end jobs India, MERN stack jobs, remote developer jobs, JavaScript jobs, PHP developer jobs, fresher web developer, Python Django jobs, Angular developer hiring"/>
  <meta name="author" content="JobHub.world - India's Leading Tech Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="3 days"/>
  <link rel="canonical" href="https://www.jobhub.world/webdeveloper"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/webdeveloper"/>
  <meta property="og:title" content="💻 2000+ Web Developer Jobs - Remote & On-site | JobHub.world"/>
  <meta property="og:description" content="Hiring Full-stack, Front-end & Back-end developers. Salary up to ₹2L/month. Tech stacks: MERN, MEAN, LAMP. Post jobs free or apply with portfolio/code samples."/>
  <meta property="og:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Developer.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubTech"/>
  <meta name="twitter:creator" content="@JobHubDevelopers"/>
  <meta name="twitter:title" content="Web Developer Openings - 2000+ Jobs @JobHub.world"/>
  <meta name="twitter:description" content="Full-stack, Front-end & Back-end developer jobs with competitive salaries. Remote work options. #DeveloperJobs #TechHiring"/>
  <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Developer.png"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Web Developer",
        "description": "Developing and maintaining web applications using modern frameworks. Opportunity to work with startups, agencies, and product companies through JobHub.world platform.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
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
            "minValue": 25000,
            "maxValue": 200000,
            "unitText": "MONTH"
          }
        },
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR", "FREELANCE"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        },
        "skills": ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "REST APIs"],
        "educationRequirements": "BTech/BCA/MCA or equivalent experience",
        "responsibilities": "Develop responsive web applications, Write clean and maintainable code, Collaborate with designers and product teams"
      }
    `}
  </script>

  {/* Tech-Specific SEO Enhancements */}
  <meta name="classification" content="IT Jobs, Software Development"/>
  <meta name="techStack" content="MERN, MEAN, LAMP, JavaScript, Python, PHP"/>
  <meta name="programmingLanguages" content="JavaScript, Python, PHP, Ruby"/>
  <meta name="frameworks" content="React, Angular, Vue, Django, Laravel"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Web<span style={{ color: "green" }}>Developer</span>
          </>}
          subText="Skilled in creating responsive, user-friendly websites using front-end and back-end technologies."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          onSearchReady={setSearchFor} 
          onButtonClick1={handleSearch}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style={{
            width: "75%",
            height: "auto",
          }}
        />
        <WebDevCat />
        <JobDetails />
        <WebDevFirstDes />
        <WebDevCrousal />
        <WebDevSecDes/>
      </PageComponent>
    </>
  )
}

export default WebDeveloperJob;