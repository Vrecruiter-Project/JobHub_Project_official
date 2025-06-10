
import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/secuirtyGuard/header2.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import SecCat from './components/SecCat';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import firImg from '../../../../../assets/Images/secuirtyGuard/first1.png';
import secImg from '../../../../../assets/Images/secuirtyGuard/second3.png';
import { Helmet } from 'react-helmet-async';
export default function Securityguardjob() {
  const [searchFor, setSearchFor] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchFor) return;
    const applyfor = new URLSearchParams({ apllyingto: searchFor }).toString();
    navigate(`/candidatedashboard?${applyfor}`);
  };


  const imageonestyle = { maxHeight: '90%' }
  const imagetwostyle = { maxHeight: '80%' }


  return (
    <>
      <PageComponent>
<Helmet>
  {/* Primary Meta Tags */}
  <title>Security Guard Jobs | Hiring for Hotels, Malls & Corporates - JobHub.world</title>
  <meta name="description" content="🛡️ 1500+ Security Guard Jobs | ₹12K-35K/month | Ex-Servicemen Preferred | Immediate Hiring for Hotels, Malls, IT Parks & Residential Societies | Apply Today!"/>
  <meta name="keywords" content="security guard jobs, hotel security jobs, mall security jobs, corporate security jobs, female security guard jobs, armed guard jobs, security supervisor jobs, bouncer jobs, event security jobs, fresher security jobs"/>
  <meta name="author" content="JobHub.world - India's Trusted Security Job Platform"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="revisit-after" content="7 days"/>
  <link rel="canonical" href="https://www.jobhub.world/securityguard"/>

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.jobhub.world/securityguard"/>
  <meta property="og:title" content="👮 1500+ Security Guard Jobs - Immediate Hiring | JobHub.world"/>
  <meta property="og:description" content="Urgent openings for security personnel: Unarmed Guards (₹12K-25K), Armed Guards (₹18K-35K), Supervisors (₹20K-40K). Ex-servicemen preferred but freshers can apply for many positions."/>
  <meta property="og:image" content="https://www.jobhub.world/images/og/security-jobs-og.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="JobHub.world"/>
  <meta property="og:locale" content="en_IN"/>
  <meta property="fb:app_id" content="YOUR_FB_APP_ID"/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@JobHubSecurity"/>
  <meta name="twitter:creator" content="@JobHubDefense"/>
  <meta name="twitter:title" content="Security Guard Jobs - 1500+ Openings"/>
  <meta name="twitter:description" content="Hotel, mall & corporate security jobs available. Ex-servicemen preferred. #SecurityJobs #DefenseJobs"/>
  <meta name="twitter:image" content="https://www.jobhub.world/images/twitter/security-jobs-card.jpg"/>

  {/* Schema.org Markup */}
  <script type="application/ld+json">
    {`
      [{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Security Guard",
        "description": "Providing security services at various establishments including hotels, malls, corporate offices and residential complexes. Multiple shifts available.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobHub.world",
          "sameAs": "https://www.jobhub.world",
          "logo": "https://www.jobhub.world/Jobhub%20logo.png"
        },
        "industry": "Security Services",
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
            "maxValue": 40000,
            "unitText": "MONTH"
          }
        },
        "jobBenefits": "Uniform Provided, Overtime Pay, Shift Allowance",
        "datePosted": "${new Date().toISOString().split('T')[0]}",
        "validThrough": "${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]}",
        "employmentType": ["FULL_TIME", "PART_TIME"],
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        },
        "requirements": "PSARA License (for some roles), Physical Fitness"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Defense Jobs",
          "item": "https://www.jobhub.world/securityguard"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Security Guard Jobs",
          "item": "https://www.jobhub.world/securityguard"
        }]
      }]
    `}
  </script>

  {/* Industry-Specific SEO */}
  <meta name="security-categories" content="corporate, retail, residential, event"/>
  <meta name="shift-types" content="day, night, rotational"/>
  <meta name="certifications" content="PSARA, SIA, Fire Safety"/>
</Helmet>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Security <span style={{ color: "green" }}>Guard</span>
            
          </>}
          subText="Reliable and vigilant professional skilled in ensuring safety, monitoring premises, and responding to emergencies effectively.."
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
        <SecCat />
        {/* <JobDetails /> */}

        <GlobalJobCardOne
          title={'Security Guard'}
          subtitle={'The duty of a security guard is to safely and securely guard premises and property, and protect people. Their purpose is to keep them secured to secure an unauthorizedaccess, monitors their activities as well as minimizes the emergencies. '}
          content={[
            {
              icon: tickImg,
              description:
                '<strong> Surveillance and Monitoring:</strong> They protect life on patrol areas, monitor CCTVs and alarms; and detect security breach.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Access Control:</strong>  Revising to, Identify occupying own to b justify, maintain visitors and vehicle records and restrain unauthorized accession and protection.',
            },
            {
              icon: tickImg,
              description:
                '<strong> Response:</strong>Emergency Alerts to alarms, and assists evacuations or medical situations, when required for service to emergency.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Property Protection: </strong>It will help limit theft and damage as well as check up on locks and windows and secure your assets.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Documentation and Enforcement:</strong> Work includes logging daily activities, preparing incident reports, being in charge., dealing with disputes calmly and ensuring strict compliance of security protocols.',
            },
          ]}
          mainImage={firImg}
          mainImageStyle={imageonestyle} />
        <GlobalJobCardTwo


          content={[{
            icon: tickImg,
            description:
              '<strong> Surveillance and Monitoring:</strong> They protect life on patrol areas, monitor CCTVs and alarms; and detect security breach.',
          },
          {
            icon: tickImg,
            description:
              '<strong>Access Control:</strong>  Revising to, Identify occupying own to b justify, maintain visitors and vehicle records and restrain unauthorized accession and protection.',
          },
          {
            icon: tickImg,
            description:
              '<strong>Physical Security:  </strong>Slows or halts human aggressiveness on people, property, and events.',
          },
          {
            icon: tickImg,
            description:
              '<strong>Prevention & Deterrence: </strong> Maintain secure and prevent the criminal act to guarantee security.',
          },
          {
            icon: tickImg,
            description:
              '<strong>Digital Security:</strong> A technology that protect networks, systems, and software against cyber threats.',
          }]}
          mainImage={secImg}
          mainImageStyle={imagetwostyle} />



      </PageComponent>

    </>
  )
}
