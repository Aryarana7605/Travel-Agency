import { useNavigate } from "react-router-dom"
import emirates from "../../flights/FlightsImg/emirateSmPlane.png"

const FlightsPriceCard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 max-w-max border-2 border-gray-400 rounded-xl">

        <div className="c1 flex gap-6 max-w-max">
            <img src={emirates} alt="emirateImg"/>
            <div className="con ">
                <p className="text-lg font-medium text-gray-500">Economy</p>
                <h2 className="text-2xl font-semibold">Emirates A380 Airbus</h2>
                <div className="rev flex gap-4 mt-4 items-center">
                   <span className="border-2 border-[#8dd3bb] p-2 text-sm rounded-lg">4.2</span>
                   <span className="lg:text-base text-sm font-semibold">Very Good</span>
                   <span className="lg:text-base text-sm font-medium">54 reviews</span>
                </div>
            </div>
        </div>

        <div className="divider border-t-2 mx-auto mt-4 w-full"></div>

        <div className="c2 mt-4">
          <p className="text-xl font-medium ">Your booking is protected by <span className="font-semibold">golobe</span></p>
        </div>
      
        <div className="divider border-t-2 mx-auto mt-4 w-full"></div>

        <div className="c3 ">
          <h1 className="leading-10 text-xl font-semibold">Price Details</h1>
          <p className="leading-10 text-xl font-medium flex justify-between">Base Fare <span className="text-xl font-semibold">$400</span></p>
          <p className="leading-10 text-xl font-medium flex justify-between">Discount <span className="text-xl font-semibold">$400</span></p>
          <p className="leading-10 text-xl font-medium flex justify-between">Taxes <span className="text-xl font-semibold">$400</span></p>
          <p className="leading-10 text-xl font-medium flex justify-between">Service Fee <span className="text-xl font-semibold">$400</span></p>
        </div>
        <div className="divider border-t-2 mx-auto mt-4 w-full"></div>
          <p className="leading-10 text-xl font-medium flex justify-between">Total <span className="text-xl font-semibold">$400</span></p>

              <div>
                <button className="bg-[#8dd3bb] rounded-lg w-full text-lg font-semibold py-2" onClick={()=>navigate("/booking-invoice")} >Book Now</button>
              </div>
    </div>
  )
}

export default FlightsPriceCard
