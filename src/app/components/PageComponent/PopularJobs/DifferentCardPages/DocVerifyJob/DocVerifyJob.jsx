import React, { useState } from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage04.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import DocCategories from './Components/DocCategories';
import JobDetails from '../../../JobDetails/JobDetails';
import EnsuringTrust from './Components/EnsuringTrust';
import DocVerifyServices from './Components/DocVerifyServices';
import WhyDocVerify from './Components/WhyDocVerify';
import { useNavigate } from 'react-router-dom';

const DocVerifyJob = () => {
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
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Document <span style={{ color: "green" }}>Verification Jobs</span>
          </>}
          subText="Ensure accuracy and trust with our efficient document verification services."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          onSearchReady={setSearchFor} 
      onButtonClick1={handleSearch}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "85%", 
            height: "auto", 
          }}
        />
        <DocCategories/>
      <JobDetails/>
      <EnsuringTrust/>
      <DocVerifyServices/>
      <WhyDocVerify/>
      </PageComponent>
    </>
  )
}

export default DocVerifyJob;
