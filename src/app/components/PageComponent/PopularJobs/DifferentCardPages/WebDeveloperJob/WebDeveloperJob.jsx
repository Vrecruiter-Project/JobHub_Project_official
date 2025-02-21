import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/WebDeveloper/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import WebDevCat from './Component/WebDevCat';
import WebDevFirstDes from './Component/WebDevFirstDes';
import WebDevCrousal from './Component/WebDevCrousal';
import WebDevSecDes from './Component/WebDevSecDes';

const WebDeveloperJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Web<span style={{ color: "green" }}>Developer</span>
          </>}
          subText="Skilled in creating responsive, user-friendly websites using front-end and back-end technologies."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style={{
            width: "75%",
            height: "auto",
          }}
        />
        <WebDevCat />
        <JobDetails />
        <WebDevFirstDes />
        <WebDevCrousal />
        <WebDevSecDes/>
      </PageComponent>
    </>
  )
}

export default WebDeveloperJob;