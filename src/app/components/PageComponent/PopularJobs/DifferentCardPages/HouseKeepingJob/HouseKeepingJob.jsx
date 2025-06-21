import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HousekeepingImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';

import HouseKeepingCat from './components/HouseKeepingCat';

import firImg from '../../../../../assets/Images/HousekeepingImages/firstimg.png';
import secImg from '../../../../../assets/Images/HousekeepingImages/secondimg.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobaljobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
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
const HouseKeepingJob = () => {

  const [searchFor, setSearchFor] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchFor) return;
    const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
    navigate(`/candidatedashboard?${applyfor}`);
  };


  const imgoneStyle = {
    maxHeight: '85%',
  }
  const imgtwoStyle = {
    maxHeight: '80%',
  }
  return (
    <>
      <PageComponent>
        <Helmet>
  {/* Primary Meta Tags */}
  <title>Housekeeping Jobs | Hotel & Facility Cleaning Roles - JobHub.world</title>
  <meta name="description" content="🧹 900+ Housekeeping Jobs in Hotels, Hospitals & Offices | Room Attendant, Cleaner, Supervisor Roles | ₹10K-35K/month | Immediate Hiring | Apply Today!"/>
  <meta name="keywords" content="housekeeping jobs, hotel housekeeping jobs, cleaner jobs, room attendant jobs, housekeeping supervisor jobs, hospital cleaning jobs, office cleaning jobs, house maid jobs, facility maintenance jobs, sanitation worker jobs"/>
  <meta name="author" content="JobHub.world - India's Leading Hospitality Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="7 days"/>
  <link rel="canonical" href="https://www.jobhub.world/housekeeping"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/housekeeping"/>
  <meta property="og:title" content="🧽 900+ Housekeeping Jobs - Hotels/Hospitals Hiring | JobHub.world"/>
  <meta property="og:description" content="Urgent hiring for housekeeping staff: Room Attendants (₹10K-20K), Cleaners (₹9K-18K), Supervisors (₹18K-35K). Free accommodation + meals at many hotels. Freshers welcome."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/housekeeping-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubHospitality"/>
  <meta name="twitter:creator" content="@JobHubClean"/>
  <meta name="twitter:title" content="Housekeeping Jobs - Hotel & Hospital Openings"/>
  <meta name="twitter:description" content="900+ housekeeping positions available with accommodation benefits. #HousekeepingJobs #HotelJobs"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/housekeeping-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Housekeeping Staff",
        "description": "Maintaining cleanliness and hygiene standards in hotels, hospitals, and corporate facilities. Positions available for cleaners, room attendants, and supervisors.",
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
            "minValue": 9000,
            "maxValue": 35000,
            "unitText": "MONTH"
          }
        },
        "jobBenefits": "Accommodation, Meals, Uniform",
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME"],
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
          "item": "https://www.jobhub.world/housekeeping"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Housekeeping Jobs",
          "item": "https://www.jobhub.world/housekeeping"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="job-category" content="housekeeping, cleaning, hospitality"/>
  <meta name="facility-types" content="hotels, hospitals, offices, residential"/>
  <meta name="shift-timings" content="morning, evening, night"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            House <span style={{ color: "green" }}>Keeping</span>
          </>}
          subText="Ensure cleanliness and organization of spaces, maintain hygiene standards, and create a welcoming environment for all occupants."
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
        {/* <HouseKeepingCat /> */}
        {/* <JobDetails /> */}

        {/* First Desc */}
        <GlobalJobCardOne
          title={"House Keeping"}
          subtitle={"The act of cleaning and tidying up and other chores associated with living spaces, working environments or any environment but a natural one. Housekeepers have many sweep and clean responsibilities and other repair and maintenance tasks. "} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong>Cleaning:</strong>Clean spaces, sanitize bathrooms, manage waste, handle laundry,and follow COVID-19 precautions.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Organizing: </strong>Make the structure of furniture more organized, replace used itemsand keep closets/shelves clean and in order.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Coordination and Support:</strong>Support other departments like departments of sales, marketing or Human Resources with their back-end work.Consult with other vendors, suppliers and other stakeholders as required by this plan.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Laundry:</strong>Clothing and linen services include washing, drying, folding andironing of clothes and related fabrics. Subtle material must always be treated properly.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Maintenance Reporting :</strong>Report and/or bring any damages which need to be repaired to the managements attention.Check whether all the appliances anutilities are working or not.',
              },


            ]} mainImage={firImg} mainImageStyle={imgoneStyle}

        />

        {/* Second Desc */}
        <GlobaljobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  'Clean by wiping with a wet wipe the surface, wash the floor area by using water to get rid of dirt and rubbish on the floor.',
              },
              {
                icon: tickImg,
                description:
                  'Floor and wipe furniture and any other touch-points, clean to ensure that the environment is free from germs and bacteria spread.',
              },
              {
                icon: tickImg,
                description:
                  'Remove dirt and dust from windows, mirrors, glasses and other similar surfaces in order to give new and neat look to all areas.',
              },
              {
                icon: tickImg,
                description:
                  'When it comes to lifestyle cleanliness should be practiced in bathroom, kitchen, and other utilities to foster health and order of business or living.',
              },
              {
                icon: tickImg,
                description:
                  'Throw away garbage and recycles pleasantly, ensure any rubbish bin is clean and free from bad smell as well as ensuring vases are free from contamination in common or individual areas.',
              },


            ]
          } mainImage={secImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCardTwo>


      </PageComponent>

    </>
  )
}

export default HouseKeepingJob;