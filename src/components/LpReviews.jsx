import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Reviewers from '../reviewer';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';


const SwiperCarousel = () => {
    return (
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {Reviewers.map((reviewer) => (
            <SwiperSlide key={reviewer.id}>
              <img src={reviewer.img} alt="." style={{ width: '100%' }} />
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                {reviewer.name}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };
  
  export default SwiperCarousel;
