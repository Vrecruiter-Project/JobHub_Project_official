import { Box, Card, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './GlobalSwiper.css';

const GlobalSwiper = ({ content, sx, addImg}) => {
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.setTransition(150); // Set transition speed to 500ms
      swiperRef.current.slideNext();
      setTimeout(() => {
        swiperRef.current.setTransition(1000); // Reset transition speed to 1000ms
      }, 150);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.setTransition(150); // Set transition speed to 500ms
      swiperRef.current.slidePrev();
      setTimeout(() => {
        swiperRef.current.setTransition(1000); // Reset transition speed to 1000ms
      }, 150);
    }
  };

  return (
    <Grid2 container sx={{ height: "auto" }}>
      <Grid2 item className="swiper-container" xs={12}>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          preventClicks={false}
          preventClicksPropagation={false}
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          style={{
            margin: "8%",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <Card sx={sx}>
                {item.element || (addImg && (
                  <Box
                    sx={{
                      position: 'relative',
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={`swiper-slide-${index}`}
                      sx={{ width: "100%", height: "100%", objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        textAlign: 'center',
                        padding: '8px',
                      }}
                    >
                      <Typography variant="h6" component="div">
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination and Navigation Buttons */}
        <Box className="swiper-pagination" sx={{ margin: 2, display: { xs: "none", md: "block" } }}></Box>
        <Box className="swiper-button-prev" onClick={handlePrevClick}></Box>
        <Box className="swiper-button-next" onClick={handleNextClick}></Box>
      </Grid2>
    </Grid2>
  );
};

export default GlobalSwiper;