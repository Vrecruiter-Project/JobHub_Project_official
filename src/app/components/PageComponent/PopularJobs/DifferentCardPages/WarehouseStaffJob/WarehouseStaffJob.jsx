import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/WarehouseImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import FirImg from '../../../../../assets/Images/WarehouseImages/first.png';
import SecImg from '../../../../../assets/Images/WarehouseImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import WareHouseCat from './Components/WareHouseCat';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import { Helmet } from 'react-helmet-async';

import img2 from '../TelecallerJob/assets/1.png'
import img3 from '../TelecallerJob/assets/2.png'
import img4 from '../TelecallerJob/assets/3.png'
import img5 from '../TelecallerJob/assets/4.png'
import img6 from '../TelecallerJob/assets/5.png'
import GlobalCategories from '../../../../GlobalComponents/Categories/GlobalCategories';
import { Stats } from '../../../JobDetails/Stats';

const categories = [
  {img: img2, para: "Employment\nVerification"},
  {img: img3, para: "Identity\nVerification"},
  {img: img4, para: "Refrence\nCheck"},
  {img: img5, para: "History\nVerification"},
  {img: img6, para: "Work\nAuthorization"},
]

const WarehouseStaffJob = () => {

    const [searchFor, setSearchFor] = useState("");
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (!searchFor) return;
      const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
      navigate(`/candidatedashboard?${applyfor}`);
    };
  
 const imgoneStyle = {
    maxWidth: '85%',
  }
  const imgTwoStyle = {
     
  }
 

  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Warehouse Jobs | Hiring Packers, Loaders & Supervisors - JobHub.world</title>
  <meta name="description" content="📦 1800+ Warehouse Staff Jobs | Packers, Loaders, Forklift Operators | ₹12K-45K/month | Amazon/Flipkart Vendors Hiring | Immediate Openings | Apply Today!"/>
  <meta name="keywords" content="warehouse jobs, packer jobs, loader jobs, forklift operator jobs, inventory jobs, warehouse supervisor jobs, logistics jobs, e-commerce warehouse jobs, fresher warehouse jobs, night shift warehouse jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Logistics Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="5 days"/>
  <link rel="canonical" href="https://www.jobhub.world/warehousestaff"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/warehousestaff"/>
  <meta property="og:title" content="🚛 1800+ Warehouse Staff Jobs - Urgent Hiring | JobHub.world"/>
  <meta property="og:description" content="Hiring for Amazon/Flipkart warehouses: Packers (₹12K-25K), Forklift Operators (₹18K-35K), Supervisors (₹25K-45K). Day/Night shifts available. Freshers welcome for many roles."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/warehouse-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubLogistics"/>
  <meta name="twitter:creator" content="@JobHubWarehouse"/>
  <meta name="twitter:title" content="Warehouse Jobs - E-commerce & Logistics Hiring"/>
  <meta name="twitter:description" content="1800+ warehouse openings with flexible shifts. #WarehouseJobs #LogisticsJobs"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/warehouse-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Warehouse Staff",
        "description": "Multiple roles available in e-commerce and logistics warehouses including packing, loading, inventory management and equipment operation.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Logistics",
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
            "maxValue": 45000,
            "unitText": "MONTH"
          }
        },
        "jobBenefits": "Shift Allowance, Overtime Pay, Safety Gear",
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
          "name": "Logistics Jobs",
          "item": "https://www.jobhub.world/warehousestaff"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Warehouse Jobs",
          "item": "https://www.jobhub.world/warehousestaff"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="warehouse-types" content="e-commerce, cold-storage, retail, industrial"/>
  <meta name="equipment" content="forklift, pallet-jack, barcode-scanner"/>
  <meta name="shifts" content="day, night, rotational"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Warehouse <span style={{ color: "green" }}>Staff</span>
          </>}
          subText="Efficient in inventory management, order processing, and maintaining smooth warehouse operations."
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
        <GlobalCategories categories={categories} />
                                                        <Stats/>
        {/* <WareHouseCat /> */}
        
        {/* <JobDetails /> */}
        {/* First Desc */}
        <GlobalJobCard1 content={
          [
            {
              icon: tickImg,
              description:
                '<strong>Inventory Management:  :</strong> Record and control inventory effectively in a way that would help the organization to avoid either overstock or out of stock situations and at the same time improve operation effectiveness.',
            },

            {
              icon: tickImg,
              description:
                '<strong>Receiving and Shipping:</strong>  Ensure correct receipt and categorization of items received, correct storage and correct and accurate order dispatching with minimal errors.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Order Fulfillment:</strong>Order organizing and labeling, selecting which products to pack and ensure that the orders arrive on schedule with minimal possible delay to make the customer contented.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Equipment Handling:</strong> Regular checks and maintenance of equipment like forklifts and pallet jacks ensure smooth warehouse operations.'
            },
            {
              icon: tickImg,
              description:
                '<strong>Safety and Cleanliness:</strong>  Properties must be safe and compliant with company policies to protect workers and adhere to regulations.'
            },

          ]} mainImage={FirImg}
          title={"Warehouse Staff"}
          subtitle={"A warehouse on the other hand is a large structured space for the storage of goods and material. It is used for storage of new and returned products in addition to receiving and dispatching products. Proper organizational and safety measures and transportation, storage or any operational procedures are critical to have."}
          mainImageStyle={imgoneStyle}


        />

        {/* Second Desc */}
        <GlobaljobCard2
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong> Receiving and Shipping Process :</strong> The receiving and shipping process is crucial in warehouse operations.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Quality and Accuracy Checks :</strong> Producers must inspect delivered products thoroughly for quality and accuracy, noting any defects..',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Proper Item Storage :</strong> Items should be arranged in the correct sections to minimize search time when needed.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Packing and Labeling Orders:</strong> Orders should be properly packed and labeled.'
              },
              {
                icon: tickImg,
                description:
                  '<strong>Precision to Avoid Delays:</strong>Precision is essential to avoid delays that could lead to customer complaints.'
              },


            ]
          } title={" Efficient Receiving and Shipping Processes"} mainImage={SecImg} mainImageStyle={imgTwoStyle}

        ></GlobaljobCard2>
      </PageComponent>

    </>
  )
}

export default WarehouseStaffJob;