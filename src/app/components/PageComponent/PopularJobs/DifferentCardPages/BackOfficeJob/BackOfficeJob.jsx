import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/BackOfficeImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import BackendCategories from './components/BackendCategories';

import FirImg from '../../../../../assets/Images/BackOfficeImages/first.png';
import SecImg from '../../../../../assets/Images/BackOfficeImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import { Helmet } from 'react-helmet-async';

const BackOfficeJob = () => {
const [searchFor, setSearchFor] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchFor) return;
    const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
    navigate(`/candidatedashboard?${applyfor}`);
  };

  const imgoneStyle = {
    maxWidth: '90%'
  }
  const imgtwoStyle = {
    maxWidth: '75%'
  }


  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Back Office Jobs | Data Entry & Admin Support Roles - JobHub.world</title>
  <meta name="description" content="📊 1800+ Back Office Jobs | Data Entry, Admin Support, MIS Executive | ₹10K-40K/month | Freshers Welcome | Work from Home Options | Apply Today!"/>
  <meta name="keywords" content="back office jobs, data entry jobs, admin support jobs, work from home back office, MIS executive jobs, computer operator jobs, office assistant jobs, document processing jobs, non-voice process jobs, fresher back office jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Back Office Job Portal"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="5 days"/>
  <link rel="canonical" href="https://www.jobhub.world/backoffice"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/backoffice"/>
  <meta property="og:title" content="🖥️ 1800+ Back Office Jobs - Hiring Now | JobHub.world"/>
  <meta property="og:description" content="Urgent hiring for back office executives: Data Entry (₹10K-25K), Admin Support (₹12K-30K), MIS Executives (₹18K-40K). Work from home options available. Basic computer skills required."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/back-office-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubBackOffice"/>
  <meta name="twitter:creator" content="@JobHubSupport"/>
  <meta name="twitter:title" content="Back Office Jobs - WFH & Office Roles Available"/>
  <meta name="twitter:description" content="1800+ back office positions in data entry, admin support & MIS reporting. Freshers can apply. #BackOfficeJobs #WFHJobs"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/back-office-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Back Office Executive",
        "description": "Handling data processing, documentation, and administrative support tasks. Positions available in banking, healthcare, e-commerce and other sectors. Work from home options for qualified candidates.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Administrative Services",
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
            "minValue": 10000,
            "maxValue": 40000,
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
        "skills": ["MS Office", "Typing", "Data Accuracy", "Email Communication"],
        "qualifications": "12th pass/Graduate, Basic computer knowledge"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Admin Jobs",
          "item": "https://www.jobhub.world/backoffice"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Back Office Jobs",
          "item": "https://www.jobhub.world/backoffice"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="job-category" content="back-office, data-entry, admin-support"/>
  <meta name="software-skills" content="MS Office, Tally, ERP, Google Docs"/>
  <meta name="work-arrangement" content="remote, office, hybrid"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Back <span style={{ color: "green" }}>Office</span>
          </>}
          subText="Manage administrative tasks, maintain records, and support workflow operations to ensure seamless organizational efficiency."
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
        <BackendCategories />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCard1
          title={"Back Office"}
          subtitle={"The job of Backend Office Executive is therefore very important as they are key in facilitating the normal running of the  organization. They send paperwork and data processing and operation works to the front end teams so that administrative and operation works can go smoothly. "} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong> Data Management:</strong>Record, sort, and keep up to date records and data-base.To uphold the accuracy of information, one has to enter verify as well as update data in an appropriate time.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Documentation and Reporting: </strong> Create, edit, compile and organize business reports, numerical data and other business documents.Organize documents of great importance so that they can be accessed quickly.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Coordination and Support:</strong>Support other departments like departments of sales, marketing or Human Resources with their back-end work.Consult with other vendors, suppliers and other stakeholders as required by this plan.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Process Optimization:</strong>What problems can you find in the backend process and how can they be improved?To assist organizations in enhancing their efficiency in terms of performance objectives.',
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
                  '<strong>Role and Responsibilities:</strong>Almost all business related administrative and operational assignments such as database assistance/co-ordination and paperwork.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Impact on Organizational Success</strong>Gladly helps manage front end of an organization, thus increasing the general efficiency and results of an organization.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Responsibilities</strong> Oversees the administrative and secretarial work, paperwork, human resource functions, systems, and records, and reports.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Benefits</strong>Strengthens data security and business processes to improve the outcome of an organization.',
              },


            ]
          } title={""} mainImage={SecImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCard2>




      </PageComponent>
    </>
  )
}

export default BackOfficeJob;