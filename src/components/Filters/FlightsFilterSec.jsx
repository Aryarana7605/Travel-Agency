import AirlinesFilter from "./AirlinesFilter"
import DtimeFilter from "./DtimeFilter"
import FlightsPriceFilter from "./FlightsPriceFilter"
import FlightsRatingsFilter from "./FlightsRatingsFilter."
import TripsFilter from "./TripsFilter"

const FlightsFilterSec = () => {
  return (
    <div className="mt-4">
      <h1 className="mb-2 text-2xl font-semibold">Filters</h1>
      <FlightsPriceFilter/>
      <DtimeFilter/>
      <FlightsRatingsFilter/>
      <AirlinesFilter/>
      <TripsFilter/>
    </div>
  )
}

export default FlightsFilterSec ;
