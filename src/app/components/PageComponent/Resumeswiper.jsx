import React from 'react';

export default function Resumeswiper() {
  const repeatCount = 300;



  return (
    <>
      <div className="resume-swiper" style={{
        background: 'linear-gradient(to right, white,#25D366)',
        borderBottom: '5px solid green',
        paddingTop: '10px'



      }}>
        <marquee>
          {Array.from({ length: repeatCount }, (_, index) => (
            <span key={index}
              style={{
                marginRight: '30px',
                fontSize: '40px',
              }}>
              <a href='https://resume-creator.jobhub.world/' alt='_blank'> Build Your Dream Resume Now!</a>
            </span>
          ))}
        </marquee>
      </div >

      <style>
        {`

       @import url('https://fonts.googleapis.com/css2?family=Agu+Display&family=Bebas+Neue&display=swap');

        .resume-swiper{
          font-family: "Bebas Neue", serif;
          
         }
        `}
      </style>

    </>
  );
}
