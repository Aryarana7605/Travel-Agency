import LoginNav from "./HotelCom.jsx/LoginNav"
import HotelsSearchStick from "./HotelsFilters/HotelsSearchStick"
import HotelsSorting from "./HotelsFilters/HotelsSorting"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"
import HotelFilters from "./HotelsFilters/HotelFilters"
import ShowingPlaces from "../Filters/ShowingPlaces"
import HotelCard from "./HotelsFilters/HotelCard"


const HotelsListing = () => {
  return (
    <div>
          <LoginNav/>      
          <HotelsSearchStick/>
          <div className="lg:w-[90%] w-full lg:mx-auto mt-8">
            <div className="flex-col flex lg:flex-row justify-between gap-4 h-full">
                <div className="p-4">
            <h1 className="mb-2 text-2xl font-semibold">Filters</h1>
          <HotelFilters/>
                </div>
                <div className="lg:w-[65%] w-full p-2 lg:p-0">
           <HotelsSorting/>
           <ShowingPlaces/>
           <HotelCard/>
                </div>
            </div>
          </div>

<LpSubscribe/>
<LpFooter/>

    </div>
  )
}

export default HotelsListing
