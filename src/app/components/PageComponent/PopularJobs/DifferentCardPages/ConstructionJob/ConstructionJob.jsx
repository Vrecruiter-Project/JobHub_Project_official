import React from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/ConstructionImages/bg construction.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import ConstructionCategories from './Components/ConstructionCategories';

import FirImg from '../../../../../assets/Images/ConstructionImages/Planning & Design .png';
import SecImg from '../../../../../assets/Images/ConstructionImages/construction meeting .png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';


const ConstructionJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {
    maxWidth: '75%'
  }
  const imagetwostyle = {
    maxWidth: '80%'
  }
  
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Const<span style={{ color: "green" }}>ruction</span>
          </>}
          subText="Find top construction job opportunities, from skilled trades to project management. Build your career with us today!"
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
        <ConstructionCategories />
        <JobDetails />
        {/* First Desc */}
        <GlobalJobCardOne content={
          [
            {
              icon: tickImg,
              description:
                '<strong>Collaborative Environment :</strong> Plans, sketches, models, and computers are scattered at a worktable and few architects and engineers discuss something.',
            },

            {
              icon: tickImg,
              description:
                '<strong>Focus on Precision: </strong> Where great emphasis is put on precision and exact computation, demonstrated by equipment such as rulers, pencils, and CAD applications.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Conceptual Phase:</strong> The establishment is the beginning or putting into a concrete form of thoughts, designs and concepts which are to be built. ',
            },
            {
              icon: tickImg,
              description:
                '<strong>Interior designing:</strong>  an interior designer formulates and integrates design, colour and style into aesthetical and utilization of space.. ',
            },


          ]} mainImage={FirImg}
          title={"Construction "}
          subtitle={"Our construction services offer your vision with quality in constructing the same as per your desired designs. From design to construction, especially the construction of structures our work is characterized by solidity, control and professionalism. "}
          mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Purpose:</strong>  A construction meeting is exclusivelygoal-oriented for addressing the progressof the operations, problems, and scheduling of activities.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Participants: </strong>These are the project managers, contractors, architects and engineers.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Topics: </strong>Topics include schedule, cost,precautionary measures and supplies on the materials to be used.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Objective:</strong> Makes certain that all the project members understand all the objectives, scope and timelines of the project.',
              },


            ]
          } title={"Streamlining Construction Goals"} mainImage={SecImg}  mainImageStyle={imagetwostyle}
        />

      


      </PageComponent>
    </>
  )
}

export default ConstructionJob;