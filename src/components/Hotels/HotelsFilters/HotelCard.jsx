import { FaHeart } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { RiCupFill } from "react-icons/ri";
import HotelsCard from "./HotelsCardDetails";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const HotelCard = () => {
  const navigate = useNavigate()
  return (
    <div >
      {HotelsCard.map((hotel)=>(
    <div className=" flex lg:flex-row flex-col items-center justify-between gap-8 rounded-2xl border-2 border-gray-200 mt-6">

      <div className="img max-w-max lg:mt-0 mt-4">
        <img src={hotel.hotelImg} alt="hotel" className="h-full w-full lg:rounded-none rounded-lg" />
      </div>
 
      <div className="card-con w-full lg:p-4 px-4">

          <div className="flex lg:flex-row flex-col justify-between">

            <div className="leading-10 ">
            <h1 className="font-semibold text-xl">{hotel.hotelName}</h1>
            <p className="flex items-center text-sm"><ImLocation2/>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            <div className="flex gap-6 text-sm my-2">
              <span className="flex items-center gap-2 text-[#ff8682]"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <p className="text-black">5 Star Hotel</p></span> 
              <span className="flex items-center gap-2"> <RiCupFill className="text-2xl" /> <p className="font-semibold">20+ Ameninities</p> </span>
            </div>
            <div>
                <p><span className="border-2 border-[#8dd3bb] p-2 rounded-md">4.2</span> <span className="font-semibold text-sm">Very Good</span><span className="text-sm ml-2">375 reviews</span> </p>
            </div>

            </div>

            <div>
              <p className="text-sm">Starting from</p>
              <div className="flex flex-col items-end">
              <h2 className="text-3xl font-semibold text-[#ff8682]">$240 <span className="text-sm">/night</span></h2>
              <p className="text-sm">excl. tax</p>
              </div>
            </div>
          </div>

          <div className="divider border-t-2 border-gray-400 w-full my-4"></div>

          <div className="w-full flex items-center gap-4">
          <span className="p-2 border-[#8dd3bb] border-2 rounded-md text-xl"><FaHeart/></span>
            <button className="bg-[#8dd3bb] w-full rounded-md p-2 font-semibold text-xl" onClick={()=>navigate("/hotel-overview")} >View Place</button>
          </div>
      </div>
     
      </div>
      ))}
      <button className="p-2 bg-black w-full text-center text-white mt-4 lg:mb-0 mb-4 rounded-lg">Show more results</button>
    </div>
   
  )
};

export default HotelCard;
