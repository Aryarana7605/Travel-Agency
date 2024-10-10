import { useNavigate } from "react-router-dom"
import hotelImg from "../HotelCom.jsx/HotelsImg/billingHotel.png"

const HotelPriceCard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 w-[40%] border-2 border-gray-400 rounded-xl lg:mt-0 mt-8 max-h-max">

        <div className="c1 flex gap-6 max-w-max">
            <img src={hotelImg} alt="emirateImg"/>
            <div className="con ">
                <p className="text-lg font-medium text-gray-500">CVK Park Bosphorus...</p>
                <h2 className="text-xl font-semibold">Superior room - 1 double bed or 2 twin beds</h2>
                <div className="rev flex gap-4 mt-4 items-center">
                   <span className="border-2 border-[#8dd3bb] p-2 text-sm rounded-lg">4.2</span>
                   <span className="text-xl font-semibold">Very Good</span>
                   <span className="text-xl font-medium">54 reviews</span>
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
          <p className="leading-10 text-xl font-medium flex justify-between">Base Fare <span className="text-xl font-semibold">$240</span></p>
          <p className="leading-10 text-xl font-medium flex justify-between">Discount <span className="text-xl font-semibold">$0</span></p>
          <p className="leading-10 text-xl font-medium flex justify-between">Taxes <span className="text-xl font-semibold">$20</span></p>
          <p className="leading-10 text-xl font-medium flex justify-between">Service Fee <span className="text-xl font-semibold">$5</span></p>
        </div>
        <div className="divider border-t-2 mx-auto mt-4 w-full"></div>
          <p className="leading-10 text-xl font-medium flex justify-between">Total <span className="text-xl font-semibold">$265</span></p>

              <div>
                <button className="bg-[#8dd3bb] rounded-lg w-full text-lg font-semibold py-2" onClick={()=>navigate("/booking-invoice")} >Book Now</button>
              </div>
    </div>
  )
}

export default HotelPriceCard
