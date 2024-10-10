import FlightPathDetails from "./FlightCardCon.jsx/FlightPathStick"
import EmirateAirplaneImg from "../flights/FlightsImg/emiratePlane.png"
import FlightFeatures from "./FlightCardCon.jsx/FlightFeatures"
import FlightPolicies from "./FlightCardCon.jsx/FlightPolicies"
import FlightDetailCard from "./FlightCardCon.jsx/FlightDetailCard"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"
import LoginNav from "../Hotels/HotelCom.jsx/LoginNav"

const FlightsCardDetail = () => {
  return (
    <div >

<div className="shadow-lg">
    <LoginNav/>
</div>
<div>
    <FlightPathDetails/>
</div>

<div className="w-[90%] mx-auto">

<div className="image mx-auto mt-4 lg:mt-12">
    <img src={EmirateAirplaneImg} alt="airplane" className="h-full w-full object-cover" />
</div>
<FlightFeatures/>

<FlightPolicies/>

<FlightDetailCard/> 
<FlightDetailCard/> 
</div>
<LpSubscribe/>
<LpFooter/>

    </div>
  )
}

export default FlightsCardDetail
