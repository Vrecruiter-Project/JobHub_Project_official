import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .slider {
    margin-top: 70px;
    padding: 2em 0;
    overflow: hidden;
    position: relative;
    width: 100%; /* Full width container */
  }

  .slide-track {
    display: flex;
    gap: 2em;
    animation: scroll 30s linear infinite;
    width: calc(2 * ${props => props.companyItems.length} * 150px); /* Double the content for seamless loop */
  }

  .slide {
    flex: 0 0 auto;
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-${props => props.companyItems.length} * 150px));
    }
  }
`;

const CompanySwiper = ({ companyItems }) => {
  const duplicatedItems = [...companyItems, ...companyItems];

  return (
    <Container companyItems={companyItems}>
      <div className="slider">
        <div className="slide-track">
          {duplicatedItems.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.image} alt={`Company logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CompanySwiper;
