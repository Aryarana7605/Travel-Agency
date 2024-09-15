import Fnav from "./Fnav"
import FlightSearchRow from './FlightSearchRow'
import FlightsFilterSec from "../Filters/FlightsFilterSec"

const FlightsBooking = () => {
  return (
    <div>

      <Fnav/>

      <div className='lg:mt-20 p-4 lg:w-[90%] mx-auto pt-12 pr-12 rounded-xl' style={{boxShadow:"0px 0px 10px gray"}}>
      <FlightSearchRow/>
      </div>
      <div className="lg:w-[90%] mx-auto">
       <FlightsFilterSec/>
      </div>
      </div>

  )
}

export default FlightsBooking
