import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start at 1 for centered position
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Create extended array for infinite loop effect
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Software Engineer, Pune",
      quote: "JobHub helped me land first developer job within two weeks! Job filters made it so easy to apply. Highly recommended for freshers.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Priya Iyer",
      role: "HR Manager, Chennai",
      quote: "As an employer, JobHub's dashboard made shortlisting candidates fast and accurate. The smart filters saved me a lot of time in hiring.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
    {
      name: "Ravi Verma",
      role: "Marketing Executive, Delhi",
      quote: "JobHub is the most user-friendly job portal I've ever used. It's clean, simple, and really helped me understand salary expectations and apply confidently.",
      src: "https://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie-thumbnail.png",
    },
  ];

  // Create extended array for seamless looping
  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  // Infinite loop effect
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= extendedTestimonials.length - 2) {
          // Reset to 1 (not 0) for smooth transition
          setTimeout(() => setCurrentSlide(1), 50);
          return prev + 1;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, extendedTestimonials.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index + 1); // +1 to account for the prepended item
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <Box sx={{ 
      width: "100%", 
      display: "flex", 
      justifyContent: "center",
      padding: "20px 0",
      position: "relative",
      top: "700px",
      zIndex: 2,
    }}>
      <Box sx={{ 
        width: "100%",
        maxWidth: "1200px",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Slider Container */}
        <Box sx={{
          display: "flex",
          width: "100%",
          transition: "transform 0.5s ease",
          transform: `translateX(calc(50% - ${currentSlide * (100 / 3)}%))`,
        }}>
          {extendedTestimonials.map((testimonial, index) => (
            <Box key={index} sx={{
              flex: "0 0 calc(95% / 3)",
              padding: "0 15px",
              boxSizing: "border-box",
              transition: "all 0.3s ease",
              transform: currentSlide === index ? "scale(0.95)" : "scale(0.90)",
              opacity: currentSlide === index ? 1 : 0.8,
            }}>
              <Box sx={{
                padding: "30px",
                height: "auto",
                backgroundColor: "white",
                borderRadius: "5px",
                // border: currentSlide === index ? "3px solid #008000" : "1px solid #ddd",
                boxShadow: currentSlide === index ? "0 5px 15px rgba(0,0,0,0.1)" : "none",
              }}>
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                  <img style={{
                    width: "40px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }} src={testimonial.src} alt={testimonial.name} />
                  <Box sx={{ fontWeight: "bold", mt: 1 }}>{testimonial.name}</Box>
                  <Box sx={{ color: "text.secondary", fontSize: "0.875rem" }}>{testimonial.role}</Box>
                </Box>
                <Box sx={{ fontStyle: "italic", mt: 2 }}>"{testimonial.quote}"</Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Dots Indicator */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "10px", 
          marginTop: "20px" 
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                background: currentSlide === index + 1 ? "#008000" : "#ccc",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;