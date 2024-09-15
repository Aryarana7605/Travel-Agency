import googleLogo from '../../icons/google logo.png'
// import Reviewers from "../../reviewer"
import { IoIosStar } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./swiper.css"

// import required modules
// import { Pagination } from 'swiper/modules';
// images
import revImg1 from "../../assets/reviews places/review place 1.png"
import revImg2 from "../../assets/reviews places/review place 2.png"
import revImg3 from "../../assets/reviews places/reviewplace3.png"




export default function Swiperz() {
  return (

    <div className="swiper-p p-8 m-4 mt-6 relative h-full ">
<div className="swiper-header flex justify-between items-center">
    <div className="swiper-head-con">
<h1 className='text-3xl font-semibold mb-2'>Reviews</h1>
<p className='text-base mb-2'>What people says about Golobe facilities.</p>
</div>

<button className='places-nav-btn mt-2 lg:mt-0 text-base px-4 max-h-max bg-transparent border-2 border-[#8dd3bb] rounded'>See All</button>

</div>


      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className='text-left bg-slate-200 rounded-3xl mb-8 flex justify-center items-center'>


                {/* {Reviewers.map((rev)=>( */}
             <div className="slider-card w-full p-4 rounded-3xl">

                <h2 className='text-lg lg:text-2xl mt-4'>“A real sense of community, nurtured”</h2>
                <p className='lg:text-lg text-base text-gray-500'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..</p>
                <div className="view-more-btn flex justify-end">
                <button className='font-semibold'>View more</button>
                </div>

                <div className="stars text-2xl mb-4 text-yellow-300 flex"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                <h3 className='text-3xl text-left'>Olga</h3>
                <p className='text-gray-500 font-semibold mb-2'>Weave Studios - Kai Tak</p>
                <img className='mb-8 block object-cover h-full w-full' src={googleLogo} alt="google logo" />
                <img className='w-full  block object-cover h-full' src={revImg1} alt="places" />
            </div>
                {/* ))} */}
            </SwiperSlide>
        <SwiperSlide className='text-left bg-slate-200 rounded-3xl mb-8 flex justify-center items-center'>

                {/* {Reviewers.map((rev)=>( */}
             <div className="slider-card w-full p-4   rounded-3xl">

                <h2 className='text-lg lg:text-2xl mt-4'>“A real sense of community, nurtured”</h2>
                <p className='lg:text-lg text-base text-gray-500'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..</p>
                <div className="view-more-btn flex justify-end">
                <button className='font-semibold'>View more</button>
                </div>

                <div className="stars text-2xl mb-4 text-yellow-300 flex"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                <h3 className='text-3xl'>Thomas</h3>
                <p className='text-gray-500 font-semibold mb-2'>Weave Studios - Kai Tak</p>
                <img className='mb-8' src={googleLogo} alt="google logo" />
                <img className='w-full  block object-cover h-full ' src={revImg2} alt="places" />
            </div>
                {/* ))} */}
            </SwiperSlide>
        <SwiperSlide className='text-left bg-slate-200 rounded-3xl mb-8 flex justify-center items-center'>

                {/* {Reviewers.map((rev)=>( */}
             <div className="slider-card w-full p-4   rounded-3xl">

                <h2 className='text-lg lg:text-2xl mt-4'>“A real sense of community, nurtured”</h2>
                <p className='lg:text-lg text-base text-gray-500'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..</p>
                <div className="view-more-btn flex justify-end">
                <button className='font-semibold'>View more</button>
                </div>

                <div className="stars text-2xl mb-4 text-yellow-300 flex"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                <h3 className='text-3xl'>Eliot</h3>
                <p className='text-gray-500 font-semibold mb-2'>Weave Studios - Kai Tak</p>
                <img className='mb-8' src={googleLogo} alt="google logo" />
                <img className='w-full  block object-cover h-full rounded-xl' src={revImg3} alt="places" />
            </div>
                {/* ))} */}
            </SwiperSlide>
        <SwiperSlide className='text-left bg-slate-200 rounded-3xl mb-8 flex justify-center items-center'>

                {/* {Reviewers.map((rev)=>( */}
             <div className="slider-card w-full p-4   rounded-3xl">

                <h2 className='text-lg lg:text-2xl mt-4'>“A real sense of community, nurtured”</h2>
                <p className='lg:text-lg text-base text-gray-500'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..</p>
                <div className="view-more-btn flex justify-end">
                <button className='font-semibold'>View more</button>
                </div>

                <div className="stars text-2xl mb-4 text-yellow-300 flex"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                <h3 className='text-3xl'>John Doe</h3>
                <p className='text-gray-500 font-semibold mb-2'>Weave Studios - Kai Tak</p>
                <img className='mb-8' src={googleLogo} alt="google logo" />
                <img className='w-full  block object-cover h-full ' src={revImg1} alt="places" />
            </div>
                {/* ))} */}
            </SwiperSlide>
        
      </Swiper>
      </div>
  );
}
