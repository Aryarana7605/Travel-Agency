import FlightSearchRow from './FlightSearchRow'
import FlightsFilterSec from "../Filters/FlightsFilterSec"
import FlightsCard from "../Filters/FlightsCards"
import FlightsSorting from "../Filters/FlightsSorting"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"
import ShowingPlaces from "../Filters/ShowingPlaces"  
import LoginNav from "../Hotels/HotelCom.jsx/LoginNav"

const FlightsBooking = () => {
  
  return (
    <div>
       <div>
      <LoginNav/>
       </div>

      <div className='lg:mt-20 p-4 lg:w-[90%] mx-auto lg:pt-12 lg:pr-12 rounded-xl' style={{boxShadow:"0px 0px 10px gray"}}>
      <FlightSearchRow/>
      </div>

      <div className="lg:flex mx-auto w-[90%] mt-8">
      <div className="lg:w-[30%] mx-auto">
       <FlightsFilterSec/>
      </div>
        <div className="flights-card w-full lg:w-[70%] mt-4">
          <FlightsSorting/>
          <ShowingPlaces/>
          <FlightsCard/>
        </div>
      </div>

        <LpSubscribe/>
        <LpFooter/>  

      </div>

  )
}

export default FlightsBooking
