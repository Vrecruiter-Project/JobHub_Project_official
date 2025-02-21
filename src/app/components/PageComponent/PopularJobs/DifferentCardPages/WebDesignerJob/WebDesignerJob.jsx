import React from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage06.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import WebDesignCategories from './Components/WebDesignCategories';
import WebDesignCard from './Components/WebDesignCard';
import WebDesigningTools from './Components/WebDesigningTools';

const WebDesignerJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText={
            <>
              Web <span style={{ color: 'green' }}>Designer</span>
            </>
          }
          subText='Creative web designer crafting user-friendly, visually appealing, and responsive websites.'
          buttonTitle1='Apply Now'
          buttonTitle2='Search'
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert('Hire Now clicked!')}
          imgSrc={HeaderImage}
          style={{
            width: '75%',
            height: 'auto',
          }}
        />
        <WebDesignCategories />
        <JobDetails />
        <WebDesignCard />
        <WebDesigningTools />
      </PageComponent>
    </>
  );
};

export default WebDesignerJob;
