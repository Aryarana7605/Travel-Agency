import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { ImLocation2 } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const  RoomOfferPanel = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-white rounded-lg shadow-lg overflow-hidden mt-8 border-2 border-gray-200">
      
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-6">CVK Park Bosphorus Hotel Istanbul <span className="flex items-center  text-[#ff8682]"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <span className="text-black ml-4 font-medium text-sm">5 Star Hotel</span></span> </h2>
          <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm">
            <ImLocation2/>
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
        </div>
        <div className="mt-2">
          <div className="flex items-center">
            <div className="border-2 border-[#8dd3bb] p-2 rounded-md font-bold text-base">4.2</div>
            <div className="text-sm ml-2 text-gray-600">Very Good</div>
            <div className="text-sm ml-1 text-gray-600">(371 reviews)</div>
          </div>
        </div>
      </div>

      
      <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-center p-4">
        <div className="text-xl text-[#ff8682] font-bold">$240/night</div>
        <div className="flex space-x-2 mt-2">
          <button className="p-2 border-2 rounded-lg border-[#8dd3bb] hover:bg-gray-100">
            <CiHeart/>
          </button>
          <button className="p-2 border-2 rounded-lg border-[#8dd3bb] hover:bg-gray-100">
            <IoMdShare/>
          </button>
          <button className="p-2 bg-[#8dd3bb] rounded-lg hover:bg-[#8dd]" onClick={()=>navigate("/hotel-billing")}>
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomOfferPanel;
