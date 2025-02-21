import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../..//assets/Images/FrontOfficeImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import FrontCategories from './Components/FrontCategories';

import FirImg from '../../../../../assets/Images/FrontOfficeImages/first .png';
import SecImg from '../../../../../assets/Images/FrontOfficeImages/second.gif';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';



const FrontOfficeJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {

    // maxHeight: '60%',
    maxWidth: '60%',

  }
  const imgtwoStyle = {

    maxHeight: '90%',
    background: 'linear-gradient(to bottom, #ffffff05, #35a335)',
    borderRadius: "2%"
  };
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Front<span style={{ color: "green" }}>Office</span>
          </>}
          subText="The Front Office Executive serves as the first point of contact for visitors and clients, ensuring a welcoming ."
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

        <FrontCategories />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCard1
          title={"Front Office"}
          subtitle={"A Receptionist is responsible for the first contact an organization has with its visitors and customersand ensures that the organization’s image, whether breached or formal, is maintained. Front deskstaff has an explicit function to perform in order to maintain proper spiraling and serve as the first line of touch points."} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong>Front Desk Management :</strong> Respond to inquiries from visitors, clients, and employees  professionally.Field, filter, and transfer telephone calls to appropriate departments.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Administrative Support: </strong>Handle incoming and outgoing communications such as emails, parcels, and letters.Maintain schedules and calendars for appointments.Book and prepare meeting rooms for scheduled gatherings.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Customer Service:</strong>Provide prompt and courteous answers to questions via in-person interactions, email, or phone calls.',
              },

              {
                icon: tickImg,
                description:
                  'Share details about the company’s profile, services, and any applicable privacy and security policies.',
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
                  '<strong>Visitor Coordination:</strong>Welcome visitors with professionalism, ensuring they sign in and receive necessary identification or passes.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Record Keeping:</strong>Maintain accurate logs of visitor entries, incoming deliveries, and outgoing correspondence for reference and security purposes.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Technology Proficiency:</strong> Utilize office software and equipment for efficient scheduling, data entry, and communication tasks.'
              },
              {
                icon: tickImg,
                description:
                  '<strong>Emergency Preparedness:</strong> Provide assistance during emergency situations by following safety protocols and directing visitors and employees to appropriate actions or exits.',
              },




            ]
          } title={"Essential Duties"} mainImage={SecImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCard2>


      </PageComponent>
    </>
  )
}

export default FrontOfficeJob;