import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/DeliveryImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import DeliveryCat from './components/DeliveryCat';
import firImg from '../../../../../assets/Images/DeliveryImages/first1.png';
import secImg from '../../../../../assets/Images/DeliveryImages/second1.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';





const DeliveryJob = () => {

  const navigate = useNavigate();

  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Deli<span style={{ color: "green" }}>very</span>
          </>}
          subText="Efficiently managed client interactions, ensuring timely and accurate resolution of inquiries to boost satisfaction and retention."
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
        <DeliveryCat />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCardOne
          title={"Delivery"}
          subtitle={"Delivery entails the proper and appropriate transfer of products or services to specified recip ients at required intervals. They include meeting set program work deadlines, confirming orders,delivering high calibre customer relations, implementing safety measures and requirements, and documentation regarding their operations."}
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Delivery Driver:</strong> Makes sure the goods are delivered safely and withthe required speed by picking up goods from places, following the routes, and taking care of handled items, update customers as wellas collect proofs and take care of the delivery vehicle.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Delivery Manager : </strong>Delivery Manager: Planes delivery operations by making schedules,managing staff, resolving problems, enforcing compliance, keeping records, giving inputs in the teams to enhance processes.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Delivery Coordinator :</strong>Schedules deliveries, tracks shipments,resolves problems, assures that documentation is accurate andworks with navigation planning to aide with liaison between drivers,customers and teams.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Logistics and Delivery Associate:</strong> Coordinates pickups and optimizesroutes; tracks schedules, uses technology for reporting, and analyzes data to improve supply chain transport efficiency.',
              },


            ]} mainImage={firImg}


        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Definition:</strong> Goods/service will always be delivered on Time Delivery to elaborate that will always deliver in the exact time it was supposed to be delivered and it is also a reflection of the reliability and management of logistical activities.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Customer Satisfaction: </strong>Timely delivery builds trust and customer satisfaction because a customer will have an expectation or a smooth operation, so by delivering in time the delivery supports that expectation or smooth operation, or at least customer experience.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Business Impact:</strong> Some examples of such delivery schedules are guaranteed delivery schedules, which relieve penalties or delays, a better image for the company through better customer service, increased repeat business and clients loyalty.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Operational Efficiency:</strong> It simplifies supply chain operation free of inefficiencies like technologies are introduced to achieve on time delivery, effective coordination, optimized routes and real time tracking.',
              },


            ]
          } title={""} mainImage={secImg}
        />





      </PageComponent>
    </>
  )
}

export default DeliveryJob;