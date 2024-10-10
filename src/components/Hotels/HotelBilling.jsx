import BookingLogin from "../Filters/FlightCardCon.jsx/BookingLogin"
import FlightPayOpt from "../Filters/FlightCardCon.jsx/FlightPayOpt"
import PayCardSelection from "../Filters/FlightCardCon.jsx/PayCardSelection"
import LpFooter from "../Home/LpFooter"
import LpSubscribe from "../Home/LpSubscribe"
import LoginNav from "../Hotels/HotelCom.jsx/LoginNav"
import HotelBookingDetail from "./HotelCom.jsx/HotelBookingDetail"
import HotelPriceCard from "./HotelCom.jsx/HotelPriceCard"
import PlaceStick from "./HotelCom.jsx/PlaceStick"

const HotelBilling = () => {
  const userLogin = false;
  return (
    <div>
        <LoginNav/>     
        <div className="w-[90%] mx-auto">
            <PlaceStick/>
        </div>

        <div className="w-[90%] mx-auto flex flex-col lg:flex-row mt-8 justify-between gap-8">
            <div className="w-full">
            <HotelBookingDetail/>
            <div className="mt-12">
            <FlightPayOpt/>
            </div>
            {userLogin && <BookingLogin/> }
            <PayCardSelection/>
            
            </div>
            <HotelPriceCard/>
        </div> 

<LpSubscribe/>
<LpFooter/>

    </div>
  )
}

export default HotelBilling
