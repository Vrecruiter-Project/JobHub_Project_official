import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/FactoryWorkImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';

import FactoryCat from './Components/FactoryCat';
import FirImg from '../../../../../assets/Images/FactoryWorkImages/first.png';
import SecImg from '../../../../../assets/Images/FactoryWorkImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import { Helmet } from 'react-helmet-async';

const FactoryJob = () => {
    const [searchFor, setSearchFor] = useState("");
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (!searchFor) return;
      const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
      navigate(`/candidatedashboard?${applyfor}`);
    };

  const imgoneStyle = {
    maxHeight: '80%'
  }
  const imagetwostyle = {
    maxHeight: '80%'
  }
  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Factory Worker Jobs | Production & Manufacturing Roles - JobHub.world</title>
  <meta name="description" content="🏭 2500+ Factory Worker Jobs | Machine Operators, Assemblers, Packers | ₹12K-50K/month | Textile, Automotive, FMCG Factories Hiring | Apply Today!"/>
  <meta name="keywords" content="factory jobs, production worker jobs, machine operator jobs, assembly line jobs, textile factory jobs, FMCG factory jobs, automotive factory jobs, packaging jobs, fresher factory jobs, industrial jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Manufacturing Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="5 days"/>
  <link rel="canonical" href="https://www.jobhub.world/factory"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/factory"/>
  <meta property="og:title" content="⚙️ 2500+ Factory Worker Jobs - Immediate Hiring | JobHub.world"/>
  <meta property="og:description" content="Urgent openings in manufacturing units: Machine Operators (₹15K-35K), Assemblers (₹12K-25K), Quality Inspectors (₹18K-40K). Overtime pay available. Freshers trained."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/factory-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubFactory"/>
  <meta name="twitter:creator" content="@JobHubManufacturing"/>
  <meta name="twitter:title" content="Factory Worker Jobs - Production & Assembly Roles"/>
  <meta name="twitter:description" content="2500+ manufacturing jobs available with overtime pay. #FactoryJobs #IndustrialJobs"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/factory-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Factory Worker",
        "description": "Production, assembly and quality control roles in manufacturing facilities across industries including textiles, automotive and consumer goods.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Manufacturing",
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
            "maxValue": 50000,
            "unitText": "MONTH"
          }
        },
        "jobBenefits": "Overtime Pay, Shift Allowance, Safety Training",
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACT"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Industrial Jobs",
          "item": "https://www.jobhub.world/factory"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Factory Worker Jobs",
          "item": "https://www.jobhub.world/factory"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="manufacturing-types" content="textile, automotive, fmcg, electronics"/>
  <meta name="factory-roles" content="operator, assembler, inspector, packer"/>
  <meta name="shifts" content="day, night, rotational"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Factory <span style={{ color: "green" }}>Workers</span>
          </>}
          subText="Friendly telecaller providing customer support, handling inquiries, and boosting client satisfaction."
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
        <FactoryCat />
        <JobDetails />



        {/* First Desc */}
        <GlobalJobCardOne
          title={"Factory Worker "}
          subtitle={"An Industrial relations is an employee who has functional responsibilities to operate machines, manufacture products, scrutinize materials, pack products, and monitor quality besidesconforming the safety measures and production standards."}
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Machine Operation:</strong>  Perform mechanical and electrical operations on equipment to accomplish productive manufacturing and achieve quality goals.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Assembly and Production:</strong> Fit components and products by joining or cementing or bolting or riveting or screwing the individual part in the required order and in a way to fit each other perfectly.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Quality Control:</strong> Receiving and dispatch of products: examine the materials or the finished products for signs of imperfection with regard to quality. ',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Packaging : </strong> Tightly and effectively palletize the finished products, the packaging prepares the goods for shipment. ',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Safety Compliance : </strong>Comply to policies and standard precautions to prevent the risk factors and keep a clean work environment. ',
              },



            ]} mainImage={FirImg}

          mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Setup and Calibration: </strong>  Perform settings for the machineries in operations in order to set right adjustments on the tools and attain precise alignment to produce items that can meet production efficiency.'

              },
              {
                icon: tickImg,
                description:
                  '<strong>Participants: </strong>These are the project managers, contractors, architects and engineers.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Operation Monitoring:  </strong>During performing the job, monitor the machinery and readings and ensure that there are problems, and troubleshoot for solutions, and safety and quality standard.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Maintenance and Repairs: </strong>Perform regular preventive measures and occasionally undertake repairs in order to greatly reduce the duration of machinery breakdown and increase its useful life.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Documentation and Reporting: </strong>Account for operations, maintenance, and production requirements while producing detailed documentation for supervisors to enhance the modification/optimization of operations.',
              },


            ]
          } title={""} mainImage={SecImg} mainImageStyle={imagetwostyle}
        />



      </PageComponent>
    </>
  )
}

export default FactoryJob;