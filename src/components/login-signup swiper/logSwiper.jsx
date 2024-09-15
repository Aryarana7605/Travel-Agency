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
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}      
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="text-center bg-white flex justify-center items-center"><img className="border-3xl block w-full h-full object-fit" src={logImg1} alt="" /></SwiperSlide>
        <SwiperSlide className="text-center bg-white flex justify-center items-center"><img className="border-3xl block w-full h-full object-fit" src={logImg2} alt="" /></SwiperSlide>
        <SwiperSlide className="text-center bg-white flex justify-center items-center"><img className="border-3xl block w-full h-full object-fit" src={logImg1} alt="" /></SwiperSlide>
      </Swiper>
  );
}