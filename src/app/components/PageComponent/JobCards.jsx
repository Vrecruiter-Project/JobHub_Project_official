import { Box, Grid2, Typography } from '@mui/material';
import { React, useEffect } from 'react';
import JobCard from '../GlobalComponents/JobCard/JobCard';
import search from '../../assets/Images/jobCardIcons/Search.png';
import salary from '../../assets/Images/jobCardIcons/salary.png';
import frame from '../../assets/Images/jobCardIcons/Frame.png';
import quickApply from '../../assets/Images/jobCardIcons/quickApply.png';
import cardBg from '../../assets/Images/bgImages/cardBg.png';

const cards = [
  {
    imgSrc: search,
    text: "Find Your Dream Job",
  },
  {
    imgSrc: salary,
    text: "Compare Salaries",
  },
  {
    imgSrc: frame,
    text: "Research Companies",
  },
  {
    imgSrc: quickApply,
    text: "Quick Apply",
  },
];

const JobCards = () => {

    return (
        <>
<div className="w-full flex justify-center py-12 px-4">
      <div className="max-w-6xl w-full">
        <p className="text-center text-2xl mb-10">
          How <span className="text-green-600 font-bold">JOBHUB</span> works for you
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full sm:w-64 h-40 bg-gray-200 group overflow-hidden rounded-lg shadow-md"
            >
              <div className="absolute top-0 right-0 bg-green-500 rounded-bl-[999px] w-12 h-12 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>

              <div className="p-4 relative z-10 flex flex-col items-center justify-center h-full text-center">
                <img src={card.imgSrc} alt={`Step ${index + 1}`} className="mb-2 w-10 h-10" />
                <p className="text-lg text-gray-900 font-bold">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        </>
    )
}

export default JobCards