import React from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage05.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import DataCategories from './Components/DataCategories';
import JobDescription from './Components/JobDescription';
import DataEntryTypes from './Components/DataEntryTypes';

const DataEntryJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Data <span style={{ color: "green" }}>Entry</span>
          </>}
          subText="Accurate, efficient data entry specialist skilled in data integrity, deadlines, and confidentiality."
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
      <DataCategories/>
      <JobDetails/>
      <JobDescription/>
      <DataEntryTypes/>
      </PageComponent>
    </>
  )
}

export default DataEntryJob;