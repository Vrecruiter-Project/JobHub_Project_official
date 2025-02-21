import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HousekeepingImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';

import HouseKeepingCat from './components/HouseKeepingCat';

import firImg from '../../../../../assets/Images/HousekeepingImages/firstimg.png';
import secImg from '../../../../../assets/Images/HousekeepingImages/secondimg.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobaljobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';


const HouseKeepingJob = () => {

  const navigate = useNavigate();


  const imgoneStyle = {
    maxHeight: '85%',
  }
  const imgtwoStyle = {
    maxHeight: '80%',
  }
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            House <span style={{ color: "green" }}>Keeping</span>
          </>}
          subText="Ensure cleanliness and organization of spaces, maintain hygiene standards, and create a welcoming environment for all occupants."
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
        <HouseKeepingCat />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCardOne
          title={"House Keeping"}
          subtitle={"The act of cleaning and tidying up and other chores associated with living spaces, working environments or any environment but a natural one. Housekeepers have many sweep and clean responsibilities and other repair and maintenance tasks. "} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong>Cleaning:</strong>Clean spaces, sanitize bathrooms, manage waste, handle laundry,and follow COVID-19 precautions.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Organizing: </strong>Make the structure of furniture more organized, replace used itemsand keep closets/shelves clean and in order.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Coordination and Support:</strong>Support other departments like departments of sales, marketing or Human Resources with their back-end work.Consult with other vendors, suppliers and other stakeholders as required by this plan.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Laundry:</strong>Clothing and linen services include washing, drying, folding andironing of clothes and related fabrics. Subtle material must always be treated properly.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Maintenance Reporting :</strong>Report and/or bring any damages which need to be repaired to the managements attention.Check whether all the appliances anutilities are working or not.',
              },


            ]} mainImage={firImg} mainImageStyle={imgoneStyle}

        />

        {/* Second Desc */}
        <GlobaljobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  'Clean by wiping with a wet wipe the surface, wash the floor area by using water to get rid of dirt and rubbish on the floor.',
              },
              {
                icon: tickImg,
                description:
                  'Floor and wipe furniture and any other touch-points, clean to ensure that the environment is free from germs and bacteria spread.',
              },
              {
                icon: tickImg,
                description:
                  'Remove dirt and dust from windows, mirrors, glasses and other similar surfaces in order to give new and neat look to all areas.',
              },
              {
                icon: tickImg,
                description:
                  'When it comes to lifestyle cleanliness should be practiced in bathroom, kitchen, and other utilities to foster health and order of business or living.',
              },
              {
                icon: tickImg,
                description:
                  'Throw away garbage and recycles pleasantly, ensure any rubbish bin is clean and free from bad smell as well as ensuring vases are free from contamination in common or individual areas.',
              },


            ]
          } mainImage={secImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCardTwo>


      </PageComponent>

    </>
  )
}

export default HouseKeepingJob;