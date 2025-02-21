import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/WarehouseImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';
import FirImg from '../../../../../assets/Images/WarehouseImages/first.png';
import SecImg from '../../../../../assets/Images/WarehouseImages/second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import WareHouseCat from './Components/WareHouseCat';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';




const WarehouseStaffJob = () => {

  const navigate = useNavigate();
 const imgoneStyle = {
    maxWidth: '85%',
  }
  const imgTwoStyle = {
     
  }
 

  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Warehouse <span style={{ color: "green" }}>Staff</span>
          </>}
          subText="Efficient in inventory management, order processing, and maintaining smooth warehouse operations."
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
        <WareHouseCat />
        <JobDetails />
        {/* First Desc */}
        <GlobalJobCard1 content={
          [
            {
              icon: tickImg,
              description:
                '<strong>Inventory Management:  :</strong> Record and control inventory effectively in a way that would help the organization to avoid either overstock or out of stock situations and at the same time improve operation effectiveness.',
            },

            {
              icon: tickImg,
              description:
                '<strong>Receiving and Shipping:</strong>  Ensure correct receipt and categorization of items received, correct storage and correct and accurate order dispatching with minimal errors.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Order Fulfillment:</strong>Order organizing and labeling, selecting which products to pack and ensure that the orders arrive on schedule with minimal possible delay to make the customer contented.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Equipment Handling:</strong> Regular checks and maintenance of equipment like forklifts and pallet jacks ensure smooth warehouse operations.'
            },
            {
              icon: tickImg,
              description:
                '<strong>Safety and Cleanliness:</strong>  Properties must be safe and compliant with company policies to protect workers and adhere to regulations.'
            },

          ]} mainImage={FirImg}
          title={"Warehouse Staff"}
          subtitle={"A warehouse on the other hand is a large structured space for the storage of goods and material. It is used for storage of new and returned products in addition to receiving and dispatching products. Proper organizational and safety measures and transportation, storage or any operational procedures are critical to have."}
          mainImageStyle={imgoneStyle}


        />

        {/* Second Desc */}
        <GlobaljobCard2
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong> Receiving and Shipping Process :</strong> The receiving and shipping process is crucial in warehouse operations.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Quality and Accuracy Checks :</strong> Producers must inspect delivered products thoroughly for quality and accuracy, noting any defects..',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Proper Item Storage :</strong> Items should be arranged in the correct sections to minimize search time when needed.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Packing and Labeling Orders:</strong> Orders should be properly packed and labeled.'
              },
              {
                icon: tickImg,
                description:
                  '<strong>Precision to Avoid Delays:</strong>Precision is essential to avoid delays that could lead to customer complaints.'
              },


            ]
          } title={" Efficient Receiving and Shipping Processes"} mainImage={SecImg} mainImageStyle={imgTwoStyle}

        ></GlobaljobCard2>
      </PageComponent>

    </>
  )
}

export default WarehouseStaffJob;