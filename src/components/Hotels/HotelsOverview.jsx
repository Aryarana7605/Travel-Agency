import Amenities from "./HotelCom.jsx/Amenities"
import AvailableRooms from "./HotelCom.jsx/AvailableRooms"
import HotelLocation from "./HotelCom.jsx/HotelLocation"
import HotelReviewHead from "./HotelCom.jsx/HotelReviewHead"
import LoginNav from "./HotelCom.jsx/LoginNav"
import OverviewNote from "./HotelCom.jsx/OverviewNote"
import PlaceStick from "./HotelCom.jsx/PlaceStick"
import ReviewCard from "./HotelCom.jsx/ReviewCard"
import RoomFeature from "./HotelCom.jsx/RoomFeature"
import RoomOfferPanel from "./HotelCom.jsx/RoomOfferPanel"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"


const HotelsOverview = () => {
  return (
    <div>
      <LoginNav/>

      <div className="w-[90%] mx-auto">
      <PlaceStick/>    
      <RoomOfferPanel/>
      <RoomFeature/>
      <div className="divider border-t border-gray-400 my-12"></div>
      <OverviewNote/>
      <div className="divider border-t border-gray-400 my-12"></div>
      <AvailableRooms/>
      <div className="divider border-t border-gray-400 my-12"></div>
      <HotelLocation/>  
      <div className="divider border-t border-gray-400 my-12"></div>
      <Amenities/>
      <div className="divider border-t border-gray-400 my-12"></div>
      <HotelReviewHead/>
      <div className="divider border-t border-gray-400 my-12"></div>
      <ReviewCard/>
      </div>

    <LpSubscribe/>
    <LpFooter/>
    </div>
  )
}

export default HotelsOverview
