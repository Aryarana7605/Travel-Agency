import FlightDetailCard from "../Filters/FlightCardCon.jsx/FlightDetailCard";
import FlightPayOpt from "../Filters/FlightCardCon.jsx/FlightPayOpt";
import FlightsPriceCard from "../Filters/FlightCardCon.jsx/FlightsPriceCard"
import Fnav from "../flights/Fnav"
import { IoIosArrowForward } from "react-icons/io";
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"
import BookingLogin from "../Filters/FlightCardCon.jsx/BookingLogin";
import PayCardSelection from "../Filters/FlightCardCon.jsx/PayCardSelection";


const BookingDetails = () => {
  const userLogin = false;
  return (
    <div>
      <Fnav/>

      <div className="w-[90%] mx-auto">

      <div className="path flex items-center text-sm mb-6">    
    <span className="text-[#ff8286]">Turkey</span><span><IoIosArrowForward/></span><span  className="text-[#ff8286]">Istanbul</span><span><IoIosArrowForward/></span><span>CVK Park Bosphorus Hotel Istanbul</span>
      </div>


<div className="flex flex-col lg:flex-row justify-between items-start gap-8">

      <div className="lg:w-4/5">
        <FlightDetailCard/>
        <FlightPayOpt/>
       {userLogin && <BookingLogin/>}
       <PayCardSelection/>
      </div>
      <div className="mb-8">
       <FlightsPriceCard/>      
       </div>
       
       
</div>
      </div>
       <LpSubscribe/>
       <LpFooter/>
    </div>
  )
}

export default BookingDetails
