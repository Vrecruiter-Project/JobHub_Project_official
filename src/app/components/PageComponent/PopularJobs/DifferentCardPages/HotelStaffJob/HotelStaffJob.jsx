import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HotelImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import HotelCat from './components/HotelCat';

import FirImg from '../../../../../assets/Images/HotelImages/first.png';
import SecImg from '../../../../../assets/Images/HotelImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';

const HotelStaffJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {
     maxHeight: '80%'

  }
  const imagetwostyle = {
     maxHeight: '75%'
  }

  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Hotel<span style={{ color: "green" }}> Staff</span>
          </>}
          subText="Hotel staff offering exceptional customer support, assisting with inquiries, and ensuring a memorable stay by enhancing guest satisfaction."
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

        <HotelCat />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCardOne
          title={"Hotel Staff "}
          subtitle={"Hotel employees are responsible for guest satisfaction by offering services like registration, accommodation cleaning services, food service and offering response to guests to improve satisfaction."}
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong> Guest Assistance:</strong> Also meet the guests needs in cases like answering their questions, or helping them with the check-ins/outs and in fact fending for the guests comfort.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Housekeeping:</strong>Clean the rooms and official places which are part of guest rooms and other areas accessible to the guests.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Dining Services:</strong>Please guests by bringing the orders, taking reservations and offering to guests in so far as meals are concerned.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Problem Resolution:</strong>Attend to customers and solve their complaints and other related concerns in a manner which meets hotel quality.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Safety and Security:</strong> Writing, practicing, put into action safety protocols and basically creating a favorable environment for safe keeping both staffs and guests.',
              },



            ]} mainImage={FirImg} mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Clerical Desk Services:</strong>  Employees handle guest registration, check-in, check-out, and address all guest inquiries.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Housekeeping:</strong> Staff maintain clean rooms to ensure guests enjoy a hygienic and comfortable environment.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Catering and Dining:</strong> Cottages prepare and serve first-class meals, adhering to dining standards and providing excellent service.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Information and Baggage Services:</strong>  Staff assist with guest information and manage baggage services efficiently.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Repair Services:</strong>   The maintenance team addresses any machinery issues to ensure smooth operations.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Security:</strong> The security department handles all safety and security concerns to ensure guest safety.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Organizational Goal:</strong> All departments work together to ensure guest comfort, hospitality, and overall satisfaction.',
              },


            ]
          } title={""} mainImage={SecImg} mainImageStyle={imagetwostyle}
        />








      </PageComponent>
    </>
  )
}

export default HotelStaffJob;