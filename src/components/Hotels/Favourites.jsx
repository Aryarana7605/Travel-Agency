import FavouriteTabs from "./HotelCom.jsx/FavouriteTabs"
import LoginNav from "./HotelCom.jsx/LoginNav"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"


const Favourites = () => {
  return (
    <div>
    <LoginNav/>      
    <div className="lg:w-4/5 w-full mx-auto">
    <FavouriteTabs/>
    </div>
    <LpSubscribe/>
    <LpFooter/>
    </div>
  )
}

export default Favourites
