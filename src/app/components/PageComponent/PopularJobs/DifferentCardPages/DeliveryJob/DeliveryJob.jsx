import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/DeliveryImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import DeliveryCat from './components/DeliveryCat';
import firImg from '../../../../../assets/Images/DeliveryImages/first1.png';
import secImg from '../../../../../assets/Images/DeliveryImages/second1.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import { Helmet } from 'react-helmet-async';




const DeliveryJob = () => {

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
  <title>Delivery Jobs | Driver, Rider & Logistics Roles - JobHub.world</title>
  <meta name="description" content="🚚 3000+ Delivery & Transportation Jobs | Food/Grocery Delivery, Logistics, Courier Services | ₹15K-50K/month | Bike/Car/Truck Drivers | Apply Today!"/>
  <meta name="keywords" content="delivery jobs, food delivery jobs, Swiggy Zomato delivery, grocery delivery jobs, logistics jobs, truck driver jobs, bike rider jobs, courier jobs, transport jobs, last mile delivery jobs"/>
  <meta name="author" content="JobHub.world - India's Largest Delivery Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="3 days"/>
  <link rel="canonical" href="https://www.jobhub.world/delivery"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/delivery"/>
  <meta property="og:title" content="🛵 3000+ Delivery/Transport Jobs - Immediate Hiring | JobHub.world"/>
  <meta property="og:description" content="Urgent openings: Food Delivery (₹15K-35K), Grocery Delivery (₹18K-30K), Truck Drivers (₹25K-50K), Courier Executives (₹15K-28K). Vehicle & DL required for most roles."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/delivery-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubDelivery"/>
  <meta name="twitter:creator" content="@JobHubLogistics"/>
  <meta name="twitter:title" content="Delivery/Transport Jobs - 3000+ Openings"/>
  <meta name="twitter:description" content="Food/grocery delivery, logistics & courier jobs available. Daily payout options. #DeliveryJobs #DriverJobs"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/delivery-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Delivery & Transport Professional",
        "description": "Multiple roles available in food delivery, grocery delivery, logistics and courier services. Requires valid driving license and own/company vehicle depending on position.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Transportation",
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
            "maxValue": 50000,
            "unitText": "MONTH"
          }
        },
        "jobBenefits": "Daily Payouts, Fuel Allowance, Flexible Hours",
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        },
        "requirements": "Valid Driving License, Own Vehicle (for some roles)"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Logistics Jobs",
          "item": "https://www.jobhub.world/delivery"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Delivery & Transport Jobs",
          "item": "https://www.jobhub.world/delivery"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="vehicle-types" content="bike, car, truck, tempo"/>
  <meta name="delivery-categories" content="food, grocery, e-commerce, courier"/>
  <meta name="logistics-services" content="last mile, freight, warehouse"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Deli<span style={{ color: "green" }}>very</span>
          </>}
          subText="Efficiently managed client interactions, ensuring timely and accurate resolution of inquiries to boost satisfaction and retention."
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
        <DeliveryCat />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCardOne
          title={"Delivery"}
          subtitle={"Delivery entails the proper and appropriate transfer of products or services to specified recip ients at required intervals. They include meeting set program work deadlines, confirming orders,delivering high calibre customer relations, implementing safety measures and requirements, and documentation regarding their operations."}
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Delivery Driver:</strong> Makes sure the goods are delivered safely and withthe required speed by picking up goods from places, following the routes, and taking care of handled items, update customers as wellas collect proofs and take care of the delivery vehicle.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Delivery Manager : </strong>Delivery Manager: Planes delivery operations by making schedules,managing staff, resolving problems, enforcing compliance, keeping records, giving inputs in the teams to enhance processes.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Delivery Coordinator :</strong>Schedules deliveries, tracks shipments,resolves problems, assures that documentation is accurate andworks with navigation planning to aide with liaison between drivers,customers and teams.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Logistics and Delivery Associate:</strong> Coordinates pickups and optimizesroutes; tracks schedules, uses technology for reporting, and analyzes data to improve supply chain transport efficiency.',
              },


            ]} mainImage={firImg}


        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Definition:</strong> Goods/service will always be delivered on Time Delivery to elaborate that will always deliver in the exact time it was supposed to be delivered and it is also a reflection of the reliability and management of logistical activities.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Customer Satisfaction: </strong>Timely delivery builds trust and customer satisfaction because a customer will have an expectation or a smooth operation, so by delivering in time the delivery supports that expectation or smooth operation, or at least customer experience.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Business Impact:</strong> Some examples of such delivery schedules are guaranteed delivery schedules, which relieve penalties or delays, a better image for the company through better customer service, increased repeat business and clients loyalty.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Operational Efficiency:</strong> It simplifies supply chain operation free of inefficiencies like technologies are introduced to achieve on time delivery, effective coordination, optimized routes and real time tracking.',
              },


            ]
          } title={""} mainImage={secImg}
        />





      </PageComponent>
    </>
  )
}

export default DeliveryJob;