import React from "react";
import { AnimatedTestimonials } from './Testimoniallogic';
import { Box } from "@mui/material";

import KartikKhurana from '../../../assets/Images/TestimonialImages/Kartik-Khurana.png'
import PriyankSharma from '../../../assets/Images/TestimonialImages/Shashank-Agniotri.png'
import VaishaliDevadi from '../../../assets/Images/TestimonialImages/Vaishali-Devadi.png'
import VishalShastri from '../../../assets/Images/TestimonialImages/Vishal-Shastri.png'


export function AnimatedTestimonialsDemo() {

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Kartik Khurana",
      designation: "Product Manager at TechFlow",
      src: KartikKhurana,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Shashank Agniotri",
      designation: "CTO at InnovateSphere",
      src:PriyankSharma
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Vaishali Devadi",
      designation: "Operations Director at CloudScale",
      src:VaishaliDevadi
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Vishal Shastri",
      designation: "Engineering Lead at DataPro",
      src:VishalShastri
    },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];

  return (
    <Box sx={{ p: { xs: 0, sm: 8 } }}>
  <AnimatedTestimonials testimonials={testimonials} />
</Box>


  );
}
