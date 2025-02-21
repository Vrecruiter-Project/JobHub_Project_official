import React from 'react';
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

const GraphicDesignerJob = () => {
  const imgTwoStyle = {
    // marginTop: '30%',
  };
  // const imgoneStyle = {
  //   marginTop: '50px',
  //   maxWidth: '80%',
  // }

  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
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
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert('Hire Now clicked!')}
          imgSrc={HeaderImage}
          style={{
            width: '75%',
            height: 'auto',
          }}
        />
        <GraphicCategories />
        <JobDetails />
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
