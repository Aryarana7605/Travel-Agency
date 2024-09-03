import logImg1 from "../../assets/register/logImg1.png"
import logImg2 from "../../assets/register/logImg2.png"
import "./logSwiper.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function LogSwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}      
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={logImg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logImg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logImg1} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}