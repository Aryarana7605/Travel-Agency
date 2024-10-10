import FlightsPriceFilter from "../../Filters/FlightsPriceFilter"
import FlightsRatingsFilter from "../../Filters/FlightsRatingsFilter."
import HotelAmenities from "./HotelAmenities"
import HotelFreebiesFilter from "./HotelFreebiesFilter"


const HotelFilters = () => {
  return (
    <div>
       <FlightsPriceFilter/>
          <FlightsRatingsFilter/>
          <HotelFreebiesFilter/>
          <HotelAmenities/>      
    </div>
  )
}

export default HotelFilters
