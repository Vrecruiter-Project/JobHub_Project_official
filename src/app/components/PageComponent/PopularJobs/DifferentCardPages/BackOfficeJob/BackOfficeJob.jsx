import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/BackOfficeImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import BackendCategories from './components/BackendCategories';

import FirImg from '../../../../../assets/Images/BackOfficeImages/first.png';
import SecImg from '../../../../../assets/Images/BackOfficeImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';


const BackOfficeJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {
    maxWidth: '90%'
  }
  const imgtwoStyle = {
    maxWidth: '75%'
  }


  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Back <span style={{ color: "green" }}>Office</span>
          </>}
          subText="Manage administrative tasks, maintain records, and support workflow operations to ensure seamless organizational efficiency."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style={{
            width: "75%",
            height: "auto",
          }}
        />
        <BackendCategories />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCard1
          title={"Back Office"}
          subtitle={"The job of Backend Office Executive is therefore very important as they are key in facilitating the normal running of the  organization. They send paperwork and data processing and operation works to the front end teams so that administrative and operation works can go smoothly. "} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong> Data Management:</strong>Record, sort, and keep up to date records and data-base.To uphold the accuracy of information, one has to enter verify as well as update data in an appropriate time.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Documentation and Reporting: </strong> Create, edit, compile and organize business reports, numerical data and other business documents.Organize documents of great importance so that they can be accessed quickly.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Coordination and Support:</strong>Support other departments like departments of sales, marketing or Human Resources with their back-end work.Consult with other vendors, suppliers and other stakeholders as required by this plan.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Process Optimization:</strong>What problems can you find in the backend process and how can they be improved?To assist organizations in enhancing their efficiency in terms of performance objectives.',
              },


            ]} mainImage={FirImg} mainImageStyle={imgoneStyle}

        />

        {/* Second Desc */}
        <GlobaljobCard2
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Role and Responsibilities:</strong>Almost all business related administrative and operational assignments such as database assistance/co-ordination and paperwork.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Impact on Organizational Success</strong>Gladly helps manage front end of an organization, thus increasing the general efficiency and results of an organization.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Responsibilities</strong> Oversees the administrative and secretarial work, paperwork, human resource functions, systems, and records, and reports.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Benefits</strong>Strengthens data security and business processes to improve the outcome of an organization.',
              },


            ]
          } title={""} mainImage={SecImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCard2>




      </PageComponent>
    </>
  )
}

export default BackOfficeJob;