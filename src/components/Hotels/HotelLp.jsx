import HotelHeader from "./HotelCom.jsx/HotelHeader"
import LoginNav from "./HotelCom.jsx/LoginNav"
import RecentSearchesHotels from "./HotelCom.jsx/RecentSearchesHotels"
// import ProfileMenu from "./HotelCom.jsx/ProfileMenu"
import FtravelCardSec from "../flights/FtravelCardSec"
import FbookSec from "../flights/FbookSec"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"
import HotelsSearchForm from "./HotelCom.jsx/HotelsSearchForm"

const HotelLp = () => {
  return (
    <div>
      <LoginNav />
      {/* <ProfileMenu/> */}
      <HotelHeader/>
      <HotelsSearchForm/>
      <RecentSearchesHotels/>
      <FtravelCardSec/>
      <FbookSec/>
      <LpSubscribe/>
      <LpFooter/>
    </div>
  )
}

export default HotelLp
