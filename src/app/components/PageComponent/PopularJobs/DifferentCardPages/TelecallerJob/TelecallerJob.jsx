import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage02.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import CategoriesSection from './Components/CategoriesSection';
import JobDetails from '../../../JobDetails/JobDetails';
import BusinessServices from './Components/BusinessServices';
import JobhubTelecaller from './Components/JobhubTelecaller';
import { useNavigate } from 'react-router-dom';

const TelecallerJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Tele<span style={{ color: "green" }}>caller</span>
          </>}
          subText="Friendly telecaller providing customer support, handling inquiries, and boosting client satisfaction."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "75%", 
            height: "auto", 
          }}
        />
      <CategoriesSection/>
      <JobDetails/>
      <BusinessServices/>
      <JobhubTelecaller/>
      </PageComponent>
    </>
  )
}

export default TelecallerJob