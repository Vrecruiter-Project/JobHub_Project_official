import React, { useState } from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/ConstructionImages/bg construction.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import ConstructionCategories from './Components/ConstructionCategories';

import FirImg from '../../../../../assets/Images/ConstructionImages/Planning & Design .png';
import SecImg from '../../../../../assets/Images/ConstructionImages/construction meeting .png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import { Helmet } from 'react-helmet-async';

const ConstructionJob = () => {
  const [searchFor, setSearchFor] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchFor) return;
    const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
    navigate(`/candidatedashboard?${applyfor}`);
  };

  const imgoneStyle = {
    maxWidth: '75%'
  }
  const imagetwostyle = {
    maxWidth: '80%'
  }
  
  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Construction Jobs | Hiring Labor, Supervisors & Engineers - JobHub.world</title>
  <meta name="description" content="🏗️ 2500+ Construction Jobs in India | Civil Engineers, Masons, Electricians & More | ₹15K-1L/month | Immediate Openings | Residential & Commercial Projects | Apply Today!"/>
  <meta name="keywords" content="construction jobs, civil engineer jobs, mason jobs, electrician jobs, site supervisor jobs, carpenter jobs, welder jobs, construction labor jobs, real estate jobs, building construction jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Construction Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="5 days"/>
  <link rel="canonical" href="https://www.jobhub.world/construction"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/construction"/>
  <meta property="og:title" content="🔨 2500+ Construction Jobs - Hiring Now | JobHub.world"/>
  <meta property="og:description" content="Urgent hiring for construction projects: Civil Engineers (₹35K-1L), Masons (₹18K-40K), Electricians (₹20K-45K). Residential, Commercial & Infrastructure projects across India."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/construction-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubConstruct"/>
  <meta name="twitter:creator" content="@JobHubBuild"/>
  <meta name="twitter:title" content="Construction Jobs - 2500+ Openings @JobHub.world"/>
  <meta name="twitter:description" content="Civil Engineers, Masons, Electricians & Construction Labor needed for projects across India. Daily/weekly payroll available. #ConstructionJobs #HiringNow"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/construction-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Construction Worker",
        "description": "Various construction roles available including Civil Engineers, Masons, Electricians, Welders, and Laborers for ongoing residential and commercial projects.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Construction",
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
            "minValue": 15000,
            "maxValue": 100000,
            "unitText": "MONTH"
          }
        },
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 6,
          "name": "Jobs",
          "item": "https://www.jobhub.world/construction"
        },{
          "@type": "ListItem",
          "position": 5,
          "name": "Construction Jobs",
          "item": "https://www.jobhub.world/construction"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="constructionTypes" content="Residential, Commercial, Infrastructure"/>
  <meta name="skills" content="Masonry, Electrical, Plumbing, Welding, Concrete Work"/>
  <meta name="certifications" content="ITI, Diploma, BE Civil, Safety Certifications"/>
  <meta name="geo.region" content="IN"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Const<span style={{ color: "green" }}>ruction</span>
          </>}
          subText="Find top construction job opportunities, from skilled trades to project management. Build your career with us today!"
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
        <ConstructionCategories />
        {/* <JobDetails /> */}
        {/* First Desc */}
        <GlobalJobCardOne content={
          [
            {
              icon: tickImg,
              description:
                '<strong>Collaborative Environment :</strong> Plans, sketches, models, and computers are scattered at a worktable and few architects and engineers discuss something.',
            },

            {
              icon: tickImg,
              description:
                '<strong>Focus on Precision: </strong> Where great emphasis is put on precision and exact computation, demonstrated by equipment such as rulers, pencils, and CAD applications.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Conceptual Phase:</strong> The establishment is the beginning or putting into a concrete form of thoughts, designs and concepts which are to be built. ',
            },
            {
              icon: tickImg,
              description:
                '<strong>Interior designing:</strong>  an interior designer formulates and integrates design, colour and style into aesthetical and utilization of space.. ',
            },


          ]} mainImage={FirImg}
          title={"Construction "}
          subtitle={"Our construction services offer your vision with quality in constructing the same as per your desired designs. From design to construction, especially the construction of structures our work is characterized by solidity, control and professionalism. "}
          mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Purpose:</strong>  A construction meeting is exclusivelygoal-oriented for addressing the progressof the operations, problems, and scheduling of activities.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Participants: </strong>These are the project managers, contractors, architects and engineers.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Topics: </strong>Topics include schedule, cost,precautionary measures and supplies on the materials to be used.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Objective:</strong> Makes certain that all the project members understand all the objectives, scope and timelines of the project.',
              },


            ]
          } title={"Streamlining Construction Goals"} mainImage={SecImg}  mainImageStyle={imagetwostyle}
        />

      


      </PageComponent>
    </>
  )
}

export default ConstructionJob;