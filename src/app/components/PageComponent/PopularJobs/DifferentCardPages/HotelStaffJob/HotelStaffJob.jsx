import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HotelImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import HotelCat from './components/HotelCat';

import FirImg from '../../../../../assets/Images/HotelImages/first.png';
import SecImg from '../../../../../assets/Images/HotelImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import { Helmet } from 'react-helmet-async';
const HotelStaffJob = () => {
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
     maxHeight: '75%'
  }

  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Hotel Staff Jobs | 2000+ Openings in 5-Star to Budget Hotels - JobHub.world</title>
  <meta name="description" content="🏨 2000+ Hotel Staff Jobs | Front Office, Housekeeping, F&B Service, Chef & Management Roles | ₹12K-80K/month | Free Accommodation+Meals | Apply Today!"/>
  <meta name="keywords" content="hotel jobs, front office jobs, housekeeping jobs, chef jobs, waiter jobs, hotel management jobs, banquet staff jobs, hospitality jobs, fresher hotel jobs, 5-star hotel jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Hospitality Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="5 days"/>
  <link rel="canonical" href="https://www.jobhub.world/hotelstaff"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/hotelstaff"/>
  <meta property="og:title" content="✨ 2000+ Hotel Staff Jobs - 5-Star Chains Hiring | JobHub.world"/>
  <meta property="og:description" content="Urgent hiring for Taj, Oberoi, Marriott & other chains: Receptionists (₹15K-35K), Chefs (₹25K-80K), Waiters (₹12K-25K). Free accommodation+meals at most properties."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/hotel-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubHotels"/>
  <meta name="twitter:creator" content="@JobHubHospitality"/>
  <meta name="twitter:title" content="Hotel Staff Jobs - 2000+ Openings Across India"/>
  <meta name="twitter:description" content="Front office, housekeeping, F&B service and chef positions available. #HotelJobs #HiringNow"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/hotel-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Hotel Staff",
        "description": "Various positions available in leading hotel chains including front office, food & beverage service, housekeeping, and kitchen departments.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Hospitality",
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
            "maxValue": 80000,
            "unitText": "MONTH"
          }
        },
        "jobBenefits": "Accommodation, Meals, Uniform, Tips",
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
          "name": "Hospitality Jobs",
          "item": "https://www.jobhub.world/hotelstaff"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Hotel Staff Jobs",
          "item": "https://www.jobhub.world/hotelstaff"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="hotel-categories" content="5-star, boutique, budget, resort"/>
  <meta name="hotel-chains" content="Taj, Oberoi, ITC, Marriott, Hyatt"/>
  <meta name="departments" content="front office, housekeeping, F&B, kitchen"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Hotel<span style={{ color: "green" }}> Staff</span>
          </>}
          subText="Hotel staff offering exceptional customer support, assisting with inquiries, and ensuring a memorable stay by enhancing guest satisfaction."
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

        <HotelCat />
        {/* <JobDetails /> */}

        {/* First Desc */}
        <GlobalJobCardOne
          title={"Hotel Staff "}
          subtitle={"Hotel employees are responsible for guest satisfaction by offering services like registration, accommodation cleaning services, food service and offering response to guests to improve satisfaction."}
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong> Guest Assistance:</strong> Also meet the guests needs in cases like answering their questions, or helping them with the check-ins/outs and in fact fending for the guests comfort.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Housekeeping:</strong>Clean the rooms and official places which are part of guest rooms and other areas accessible to the guests.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Dining Services:</strong>Please guests by bringing the orders, taking reservations and offering to guests in so far as meals are concerned.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Problem Resolution:</strong>Attend to customers and solve their complaints and other related concerns in a manner which meets hotel quality.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Safety and Security:</strong> Writing, practicing, put into action safety protocols and basically creating a favorable environment for safe keeping both staffs and guests.',
              },



            ]} mainImage={FirImg} mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Clerical Desk Services:</strong>  Employees handle guest registration, check-in, check-out, and address all guest inquiries.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Housekeeping:</strong> Staff maintain clean rooms to ensure guests enjoy a hygienic and comfortable environment.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Catering and Dining:</strong> Cottages prepare and serve first-class meals, adhering to dining standards and providing excellent service.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Information and Baggage Services:</strong>  Staff assist with guest information and manage baggage services efficiently.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Repair Services:</strong>   The maintenance team addresses any machinery issues to ensure smooth operations.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Security:</strong> The security department handles all safety and security concerns to ensure guest safety.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Organizational Goal:</strong> All departments work together to ensure guest comfort, hospitality, and overall satisfaction.',
              },


            ]
          } title={""} mainImage={SecImg} mainImageStyle={imagetwostyle}
        />








      </PageComponent>
    </>
  )
}

export default HotelStaffJob;