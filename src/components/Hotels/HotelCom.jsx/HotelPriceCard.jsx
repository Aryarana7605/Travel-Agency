import { useNavigate } from "react-router-dom";
import hotelImg from "../HotelCom.jsx/HotelsImg/billingHotel.png";

const HotelPriceCard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 w-full lg:w-[40%] border-2 border-gray-400 rounded-xl mt-8 lg:mt-0 max-h-max">
      
      
      <div className="c1 flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-full">
        <img src={hotelImg} alt="Hotel" className="w-full sm:w-auto h-auto" />
        <div className="con">
          <p className="text-md sm:text-lg font-medium text-gray-500">
            CVK Park Bosphorus...
          </p>
          <h2 className="text-lg sm:text-xl font-semibold">
            Superior room - 1 double bed or 2 twin beds
          </h2>
          <div className="rev flex gap-2 sm:gap-4 mt-2 sm:mt-4 items-center">
            <span className="border-2 border-[#8dd3bb] p-1 sm:p-2 text-sm rounded-lg">
              4.2
            </span>
            <span className="font-semibold">Very Good</span>
            <span className="font-medium">54 reviews</span>
          </div>
        </div>
      </div>

      
      <div className="divider border-t-2 mx-auto mt-4 w-full"></div>

      
      <div className="c2 mt-4">
        <p className="text-md sm:text-xl font-medium">
          Your booking is protected by{" "}
          <span className="font-semibold">golobe</span>
        </p>
      </div>

      
      <div className="divider border-t-2 mx-auto mt-4 w-full"></div>

      
      <div className="c3">
        <h1 className="leading-8 sm:leading-10 text-lg sm:text-xl font-semibold">
          Price Details
        </h1>
        <p className="leading-8 sm:leading-10 text-lg sm:text-xl font-medium flex justify-between">
          Base Fare <span className="text-lg sm:text-xl font-semibold">$240</span>
        </p>
        <p className="leading-8 sm:leading-10 text-lg sm:text-xl font-medium flex justify-between">
          Discount <span className="text-lg sm:text-xl font-semibold">$0</span>
        </p>
        <p className="leading-8 sm:leading-10 text-lg sm:text-xl font-medium flex justify-between">
          Taxes <span className="text-lg sm:text-xl font-semibold">$20</span>
        </p>
        <p className="leading-8 sm:leading-10 text-lg sm:text-xl font-medium flex justify-between">
          Service Fee <span className="text-lg sm:text-xl font-semibold">$5</span>
        </p>
      </div>

      
      <div className="divider border-t-2 mx-auto mt-4 w-full"></div>
      
      
      <p className="leading-8 sm:leading-10 text-lg sm:text-xl font-medium flex justify-between">
        Total <span className="text-lg sm:text-xl font-semibold">$265</span>
      </p>

      
      <div className="mt-4">
        <button
          className="bg-[#8dd3bb] rounded-lg w-full text-lg font-semibold py-2"
          onClick={() => navigate("/booking-invoice")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelPriceCard;
