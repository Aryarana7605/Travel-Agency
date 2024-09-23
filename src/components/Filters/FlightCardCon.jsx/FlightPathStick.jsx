import { IoIosArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FlightPathDetails = () => {
  const navigate = useNavigate()
  return (
    <div className="flights-path-details lg:w-[90%] lg:mx-auto mt-4 lg:mt-12 p-4" >
      <div className="path flex items-center text-sm mb-6">    
    <span className="text-[#ff8286]">Turkey</span><span><IoIosArrowForward/></span><span  className="text-[#ff8286]">Istanbul</span><span><IoIosArrowForward/></span><span>CVK Park Bosphorus Hotel Istanbul</span>
      </div>
      <div className="con flex-col lg:flex-row flex justify-between items-end shadow-lg p-2 rounded-md lg:p-0 lg:shadow-none">
        <div>
            <h1 className="font-semibold text-2xl">Emirates A380 Airbus</h1>
            <p className="flex-col lg:flex-row flex lg:items-center text-lg lg:text-base mt-4"> <IoLocation/>  Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            <p className="flex items-center text-base mt-2"><span className="mr-2 p-2 border-2 border-[#8dd3bb] rounded-lg">4.2</span><span className="font-semibold text-base mr-2">Very Good</span> 54 reviews</p>
        </div>
        <div className="price-book">
        <h1 className="text-base text-end text-[#ff8286] font-semibold mb-4 lg:text-3xl">$240</h1>
        <div className="book-btn flex items-center ">
            <span className="mr-2 p-2 border-2 border-[#8dd3bb] rounded-lg">
            <CiHeart />
            </span>
            <span className="mr-2 p-2 border-2 border-[#8dd3bb] rounded-lg">
            <IoMdShare/>
            </span>

            <button className="bg-[#8dd3bb] p-2 rounded-md" onClick={()=>navigate("/booking-details")}>Book now</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FlightPathDetails
