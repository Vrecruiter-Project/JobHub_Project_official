
// import React from 'react';
// import styled from 'styled-components';
// import { Box, Typography } from '@mui/material';

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
//           <div className="wheel" />
//           <div className="hamster">
//             <div className="hamster__body">
//               <div className="hamster__head">
//                 <div className="hamster__ear" />
//                 <div className="hamster__eye" />
//                 <div className="hamster__nose" />
//               </div>
//               <div className="hamster__limb hamster__limb--fr" />
//               <div className="hamster__limb hamster__limb--fl" />
//               <div className="hamster__limb hamster__limb--br" />
//               <div className="hamster__limb hamster__limb--bl" />
//               <div className="hamster__tail" />
//             </div>
//           </div>
//           <div className="spoke" />
//           <Typography className='wait'>
//             Please wait...
//           </Typography>
//         </div>
//       </Box>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`

// .wait{

// margin-top:11em;
// margin-left:2.5em;
// }

// .wheel-and-hamster {
//   --dur: 1s;
//   position: relative;
//   width: 12em;
//   height: 12em;
//   font-size: 14px;
// }

// .wheel,
// .hamster,
// .hamster div,
// .spoke {
//   position: absolute;
// }

// .wheel,
// .spoke {
//   border-radius: 50%;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// .wheel {
//   background: radial-gradient(100% 100% at center, hsla(0,0%,60%,0) 47.8%, hsl(0,0%,60%) 48%);
//   z-index: 2;
// }

// .hamster {
//   animation: hamster var(--dur) ease-in-out infinite;
//   top: 50%;
//   left: calc(50% - 3.5em);
//   width: 7em;
//   height: 3.75em;
//   transform: rotate(4deg) translate(-0.8em,1.85em);
//   transform-origin: 50% 0;
//   z-index: 1;
// }

// .hamster__head {
//   animation: hamsterHead var(--dur) ease-in-out infinite;
//   background: hsl(120,90%,40%); /* Dark Green */
//   border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
//   box-shadow: 0 -0.25em 0 hsl(120,90%,60%) inset, /* Medium Green */
//     0.75em -1.55em 0 hsl(120,90%,70%) inset; /* Light Green */
//   top: 0;
//   left: -2em;
//   width: 2.75em;
//   height: 2.5em;
//   transform-origin: 100% 50%;
// }

// .hamster__ear {
//   animation: hamsterEar var(--dur) ease-in-out infinite;
//   background: hsl(120,90%,70%); /* Light Green */
//   border-radius: 50%;
//   box-shadow: -0.25em 0 hsl(120,90%,40%) inset;
//   top: -0.25em;
//   right: -0.25em;
//   width: 0.75em;
//   height: 0.75em;
//   transform-origin: 50% 75%;
// }

// .hamster__eye {
//   animation: hamsterEye var(--dur) linear infinite;
//   background-color: hsl(0,0%,0%);
//   border-radius: 50%;
//   top: 0.375em;
//   left: 1.25em;
//   width: 0.5em;
//   height: 0.5em;
// }

// .hamster__nose {
//   background: hsl(0,90%,75%);
//   border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
//   top: 0.75em;
//   left: 0;
//   width: 0.2em;
//   height: 0.25em;
// }

// .hamster__body {
//   animation: hamsterBody var(--dur) ease-in-out infinite;
//   background: hsl(120,90%,50%); /* Green */
//   border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
//   box-shadow: 0.1em 0.75em 0 hsl(120,90%,40%) inset, /* Darker Green */
//     0.15em -0.5em 0 hsl(120,90%,60%) inset; /* Medium Green */
//   top: 0.25em;
//   left: 2em;
//   width: 4.5em;
//   height: 3em;
//   transform-origin: 17% 50%;
//   transform-style: preserve-3d;
// }

// .hamster__limb--fr,
// .hamster__limb--fl {
//   clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
//   top: 2em;
//   left: 0.5em;
//   width: 1em;
//   height: 1.5em;
//   transform-origin: 50% 0;
// }

// .hamster__limb--fr {
//   animation: hamsterFRLimb var(--dur) linear infinite;
//   background: linear-gradient(hsl(120,90%,50%) 80%, hsl(120,90%,40%) 80%);
//   transform: rotate(15deg) translateZ(-1px);
// }

// .hamster__limb--fl {
//   animation: hamsterFLLimb var(--dur) linear infinite;
//   background: linear-gradient(hsl(120,90%,60%) 80%, hsl(120,90%,50%) 80%);
//   transform: rotate(15deg);
// }

// .hamster__limb--br,
// .hamster__limb--bl {
//   border-radius: 0.75em 0.75em 0 0;
//   clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
//   top: 1em;
//   left: 2.8em;
//   width: 1.5em;
//   height: 2.5em;
//   transform-origin: 50% 30%;
// }

// .hamster__limb--br {
//   animation: hamsterBRLimb var(--dur) linear infinite;
//   background: linear-gradient(hsl(120,90%,50%) 90%, hsl(120,90%,40%) 90%);
//   transform: rotate(-25deg) translateZ(-1px);
// }

// .hamster__limb--bl {
//   animation: hamsterBLLimb var(--dur) linear infinite;
//   background: linear-gradient(hsl(120,90%,60%) 90%, hsl(120,90%,50%) 90%);
//   transform: rotate(-25deg);
// }

// .hamster__tail {
//   animation: hamsterTail var(--dur) linear infinite;
//   background: hsl(120,90%,60%);
//   border-radius: 0.25em 50% 50% 0.25em;
//   box-shadow: 0 -0.2em 0 hsl(120,90%,50%) inset;
//   top: 1.5em;
//   right: -0.5em;
//   width: 1em;
//   height: 0.5em;
//   transform: rotate(30deg) translateZ(-1px);
//   transform-origin: 0.25em 0.25em;
// }

// .spoke {
//   animation: spoke var(--dur) linear infinite;
//   background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
// 		linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
// }
// @keyframes hamster {
//   from, to {
//     transform: rotate(4deg) translate(-0.8em,1.85em);
//   }

//   50% {
//     transform: rotate(0) translate(-0.8em,1.85em);
//   }
// }

// @keyframes hamsterHead {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(0);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(8deg);
//   }
// }

// @keyframes hamsterEye {
//   from, 90%, to {
//     transform: scaleY(1);
//   }

//   95% {
//     transform: scaleY(0);
//   }
// }

// @keyframes hamsterEar {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(0);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(12deg);
//   }
// }

// @keyframes hamsterBody {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(0);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(-2deg);
//   }
// }

// @keyframes hamsterFRLimb {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(50deg) translateZ(-1px);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(-30deg) translateZ(-1px);
//   }
// }

// @keyframes hamsterFLLimb {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(-30deg);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(50deg);
//   }
// }

// @keyframes hamsterBRLimb {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(-60deg) translateZ(-1px);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(20deg) translateZ(-1px);
//   }
// }

// @keyframes hamsterBLLimb {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(20deg);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(-60deg);
//   }
// }

// @keyframes hamsterTail {
//   from, 25%, 50%, 75%, to {
//     transform: rotate(30deg) translateZ(-1px);
//   }

//   12.5%, 37.5%, 62.5%, 87.5% {
//     transform: rotate(10deg) translateZ(-1px);
//   }
// }

// @keyframes spoke {
//   from {
//     transform: rotate(0);
//   }

//   to {
//     transform: rotate(-1turn);
//   }
// }

// `;

// export default Loader;





//Old loader 

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (

    <StyledWrapper>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="hourglassBackground">
          <div className="hourglassContainer">
            <div className="hourglassCurves" />
            <div className="hourglassCapTop" />
            <div className="hourglassGlassTop" />
            <div className="hourglassSand" />
            <div className="hourglassSandStream" />
            <div className="hourglassCapBottom" />
            <div className="hourglassGlass" />
           
          </div>
           <div className='wait'>please wait...</div>
        </div>
      </div> </StyledWrapper>

  );
}

const StyledWrapper = styled.div`
.wait{

margin-top:9em;
margin-left:1.5em;
}

  .hourglassBackground {
    position: relative;
    background-color: rgb(7, 197, 102);
    height: 130px;
    width: 130px;
    border-radius: 50%;
    margin: 30px auto;
  }

  .hourglassContainer {
    position: absolute;
    top: 30px;
    left: 40px;
    width: 50px;
    height: 70px;
    -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
    animation: hourglassRotate 2s ease-in 0s infinite;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .hourglassContainer div,
  .hourglassContainer div:before,
  .hourglassContainer div:after {
    transform-style: preserve-3d;
  }

  @-webkit-keyframes hourglassRotate {
    0% {
      transform: rotateX(0deg);
    }

    50% {
      transform: rotateX(180deg);
    }

    100% {
      transform: rotateX(180deg);
    }
  }

  @keyframes hourglassRotate {
    0% {
      transform: rotateX(0deg);
    }

    50% {
      transform: rotateX(180deg);
    }

    100% {
      transform: rotateX(180deg);
    }
  }

  .hourglassCapTop {
    top: 0;
  }

  .hourglassCapTop:before {
    top: -25px;
  }

  .hourglassCapTop:after {
    top: -20px;
  }

  .hourglassCapBottom {
    bottom: 0;
  }

  .hourglassCapBottom:before {
    bottom: -25px;
  }

  .hourglassCapBottom:after {
    bottom: -20px;
  }

  .hourglassGlassTop {
    transform: rotateX(90deg);
    position: absolute;
    top: -16px;
    left: 3px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: #999999;
  }

  .hourglassGlass {
    perspective: 100px;
    position: absolute;
    top: 32px;
    left: 20px;
    width: 10px;
    height: 6px;
    background-color: #999999;
    opacity: 0.5;
  }

  .hourglassGlass:before,
  .hourglassGlass:after {
    content: '';
    display: block;
    position: absolute;
    background-color: #999999;
    left: -17px;
    width: 44px;
    height: 28px;
  }

  .hourglassGlass:before {
    top: -27px;
    border-radius: 0 0 25px 25px;
  }

  .hourglassGlass:after {
    bottom: -27px;
    border-radius: 25px 25px 0 0;
  }

  .hourglassCurves:before,
  .hourglassCurves:after {
    content: '';
    display: block;
    position: absolute;
    top: 32px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #333;
    animation: hideCurves 2s ease-in 0s infinite;
  }

  .hourglassCurves:before {
    left: 15px;
  }

  .hourglassCurves:after {
    left: 29px;
  }

  @-webkit-keyframes hideCurves {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 0;
    }

    30% {
      opacity: 0;
    }

    40% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes hideCurves {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 0;
    }

    30% {
      opacity: 0;
    }

    40% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  .hourglassSandStream:before {
    content: '';
    display: block;
    position: absolute;
    left: 24px;
    width: 3px;
    background-color: white;
    -webkit-animation: sandStream1 2s ease-in 0s infinite;
    animation: sandStream1 2s ease-in 0s infinite;
  }

  .hourglassSandStream:after {
    content: '';
    display: block;
    position: absolute;
    top: 36px;
    left: 19px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    animation: sandStream2 2s ease-in 0s infinite;
  }

  @-webkit-keyframes sandStream1 {
    0% {
      height: 0;
      top: 35px;
    }

    50% {
      height: 0;
      top: 45px;
    }

    60% {
      height: 35px;
      top: 8px;
    }

    85% {
      height: 35px;
      top: 8px;
    }

    100% {
      height: 0;
      top: 8px;
    }
  }

  @keyframes sandStream1 {
    0% {
      height: 0;
      top: 35px;
    }

    50% {
      height: 0;
      top: 45px;
    }

    60% {
      height: 35px;
      top: 8px;
    }

    85% {
      height: 35px;
      top: 8px;
    }

    100% {
      height: 0;
      top: 8px;
    }
  }

  @-webkit-keyframes sandStream2 {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    51% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    91% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes sandStream2 {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    51% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    91% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  .hourglassSand:before,
  .hourglassSand:after {
    content: '';
    display: block;
    position: absolute;
    left: 6px;
    background-color: white;
    perspective: 500px;
  }

  .hourglassSand:before {
    top: 8px;
    width: 39px;
    border-radius: 3px 3px 30px 30px;
    animation: sandFillup 2s ease-in 0s infinite;
  }

  .hourglassSand:after {
    border-radius: 30px 30px 3px 3px;
    animation: sandDeplete 2s ease-in 0s infinite;
  }

  @-webkit-keyframes sandFillup {
    0% {
      opacity: 0;
      height: 0;
    }

    60% {
      opacity: 1;
      height: 0;
    }

    100% {
      opacity: 1;
      height: 17px;
    }
  }

  @keyframes sandFillup {
    0% {
      opacity: 0;
      height: 0;
    }

    60% {
      opacity: 1;
      height: 0;
    }

    100% {
      opacity: 1;
      height: 17px;
    }
  }

  @-webkit-keyframes sandDeplete {
    0% {
      opacity: 0;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    1% {
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    24% {
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    25% {
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    50% {
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    90% {
      opacity: 1;
      top: 41px;
      height: 0;
      width: 10px;
      left: 20px;
    }
  }

  @keyframes sandDeplete {
    0% {
      opacity: 0;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    1% {
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    24% {
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    25% {
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    50% {
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    }

    90% {
      opacity: 1;
      top: 41px;
      height: 0;
      width: 10px;
      left: 20px;
    }
  }`;

export default Loader;


