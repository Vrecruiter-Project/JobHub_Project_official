import React, { useState } from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage07.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import GraphicCategories from './Components/GraphicCategories';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import FirImg from '../../../../../assets/Images/GraphicImages/Graphicimg.png';
import SecImg from '../../../../../assets/Images/GraphicImages/Color Theory.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GraphicDesigningTools from './Components/GraphicTools';
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
const GraphicDesignerJob = () => {
  const imgTwoStyle = {
    // marginTop: '30%',
  };
  // const imgoneStyle = {
  //   marginTop: '50px',
  //   maxWidth: '80%',
  // }

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
  <title>Graphic Designer Jobs in Tricity & Zirakpur | Hiring Now - JobHub.world</title>
  <meta name="description" content="🚀 800+ Graphic Designer Jobs in Chandigarh Tricity & Zirakpur. Adobe Photoshop/Illustrator jobs | ₹18K-75K/month | Full-time/Part-time | Print & Digital Media | Apply Today!"/>
  <meta name="keywords" content="graphic designer jobs Zirakpur, Chandigarh design jobs, Mohali creative jobs, Panchkula designer hiring, Adobe Photoshop jobs, Illustrator designer Tricity, print media jobs, digital design jobs, fresher designer jobs, freelance graphic design"/>
  <meta name="author" content="JobHub.world - Tricity's Top Creative Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="5 days"/>
  <link rel="canonical" href="https://www.jobhub.world/graphicdesigner"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/graphicdesigner"/>
  <meta property="og:title" content="🎨 800+ Graphic Designer Jobs in Tricity & Zirakpur - JobHub.world"/>
  <meta property="og:description" content="Hiring graphic designers for agencies, print shops & e-commerce companies in Chandigarh, Mohali, Panchkula & Zirakpur. Salary up to ₹75K. Portfolio required."/>
  <meta property="og:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Graphic%20Designer.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubTricity"/>
  <meta name="twitter:creator" content="@JobHubDesign"/>
  <meta name="twitter:title" content="Graphic Designer Openings in Tricity/Zirakpur"/>
  <meta name="twitter:description" content="800+ design jobs in Chandigarh region: Logo design, branding, packaging & digital media. #TricityJobs #DesignHiring"/>
  <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Graphic%20Designer.png"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Graphic Designer",
        "description": "Creating visual concepts for branding, advertising, and digital media. Must be proficient in Adobe Creative Suite. Multiple openings across Chandigarh, Mohali, Panchkula and Zirakpur.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "jobLocation": [{
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Zirakpur",
            "addressRegion": "Punjab",
            "postalCode": "140603",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "addressCountry": "IN"
          }
        }],
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 18000,
            "maxValue": 75000,
            "unitText": "MONTH"
          }
        },
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "FREELANCE"],
        "skills": ["Adobe Photoshop", "Illustrator", "InDesign", "Branding", "Print Design", "Digital Media"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Jobs",
          "item": "https://www.jobhub.world/graphicdesigner"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Creative Jobs",
          "item": "https://www.jobhub.world/graphicdesigner"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Graphic Designers in Tricity",
          "item": "https://www.jobhub.world/graphicdesigner"
        }]
      }]
    `}
  </script>

  {/* Geo Targeting */}
  <meta name="geo.position" content="30.7046;76.7179"/>
  <meta name="geo.placename" content="Chandigarh Tricity Region"/>
  <meta name="geo.region" content="IN-CH;IN-PB"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText={
            <>
              Graphic <span style={{ color: 'green' }}>Designer</span>
            </>
          }
          subText='A graphic designer is responsible for making ideas come alive making the concepts easy to grasp, interesting and memorable.'
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
        <GlobalCategories categories={categories} />
        <Stats/>
        {/* <GraphicCategories /> */}
        {/* <JobDetails /> */}
        {/* First Desc */}
        <GlobalJobCardOne
          content={[
            {
              icon: tickImg,
              description:
                'Graphic designing is an art profession that deals with the provision of visualcommunications to support one brand or the other. Adobe Creative Suite applications such as Photoshop, Illustrator and InDesign help designers translate their ideas effectively thus catering for the target audiences.',
            },

            {
              icon: tickImg,
              description:
                'Choosing effective typography is essential; applying an appropriate typeface with the right emotional meaning is important for design. Colour theory affects  people and solidifies branding which is the way in which a designer comes up with positive and pleasure associations easily while layout fundamentals makes it easy for a designer to create aesthetic orderly and balanced plans.',
            },
            {
              icon: tickImg,
              description:
                'Real-life logo design experience helps brands achieve memorable identities,while consistent visuals across media enhance recognition and drivemarketing success.',
            },
          ]}
          mainImage={FirImg}
          title={'Graphic Design Insights  '}
          subtitle={
            'A graphic designer is a creative professional who combines art and technology to communicate ideas visually. They develop designs for a wide range of media, including websites, advertisements, magazines, logos, and more. '
          }
          //  mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={[
            {
              icon: tickImg,
              description: 'Which color converts best?',
            },

            {
              icon: tickImg,
              description:
                'However, colors do play an important role in determiningconsumer behavior and directly affect buying decisionsas well as brand perceptions.',
            },
            {
              icon: tickImg,
              description:
                'Color psychology would help designers understand more about the approach one should have in creating designs that are somehow more engaging, thereby relating both to functionality and aesthetic appeal.',
            },
          ]}
          title={'Color Theory and Consumer Behavior'}
          mainImage={SecImg}
          mainImageStyle={imgTwoStyle}
        />

        <GraphicDesigningTools />
      </PageComponent>
    </>
  );
};

export default GraphicDesignerJob;
