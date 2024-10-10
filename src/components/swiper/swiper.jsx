import googleLogo from '../../icons/google logo.png';
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import revImg1 from "../../assets/reviews places/review place 1.png";
import revImg2 from "../../assets/reviews places/review place 2.png";
import revImg3 from "../../assets/reviews places/reviewplace3.png";

const reviews = [
  {
    name: "Olga",
    text: "“A real sense of community, nurtured”",
    feedback: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
    location: "Weave Studios - Kai Tak",
    image: revImg1,
  },
  {
    name: "Thomas",
    text: "“A real sense of community, nurtured”",
    feedback: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
    location: "Weave Studios - Kai Tak",
    image: revImg2,
  },
  {
    name: "Eliot",
    text: "“A real sense of community, nurtured”",
    feedback: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
    location: "Weave Studios - Kai Tak",
    image: revImg3,
  },
  {
    name: "John Doe",
    text: "“A real sense of community, nurtured”",
    feedback: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
    location: "Weave Studios - Kai Tak",
    image: revImg1,
  }
];

const ReviewCard = ({ review }) => {
  return (
    <div className="slider-card w-full p-4 rounded-3xl bg-slate-200 text-left flex flex-col items-center justify-center">
      <h2 className='text-lg lg:text-2xl mt-4'>{review.text}</h2>
      <p className='lg:text-lg text-base text-gray-500'>{review.feedback}</p>
      <div className="view-more-btn flex justify-end w-full">
        <button className='font-semibold'>View more</button>
      </div>
      <div className='text-left'>
      <div className="stars text-2xl mb-4 text-yellow-300 flex">
        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
      </div>
      <h3 className='text-3xl'>{review.name}</h3>
      <p className='text-gray-500 font-semibold mb-2'>{review.location}</p>
      <img className='mb-8 object-contain' src={googleLogo} alt="Google logo" />
      <img className='w-full h-auto object-cover rounded-xl' src={review.image} alt={review.name} />
      </div>
    </div>
  );
};

export default function Swiperz() {
  return (
    <div className="swiper-p p-8 m-4 mt-6 relative h-full">
      <div className="swiper-header flex justify-between items-center">
        <div className="swiper-head-con">
          <h1 className='text-3xl font-semibold mb-2'>Reviews</h1>
          <p className='text-base mb-2'>What people say about Golobe facilities.</p>
        </div>
        <button className='places-nav-btn mt-2 lg:mt-0 text-base px-4 max-h-max bg-transparent border-2 border-[#8dd3bb] rounded'>
          See All
        </button>
      </div>

      <Swiper
        slidesPerView={1}  
        spaceBetween={20}   
        breakpoints={{
        
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}  
        className="mySwiper w-full h-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
