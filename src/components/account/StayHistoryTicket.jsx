import CVK from "./accountImg/CVK.png"
import { HiClock } from "react-icons/hi2";
import { FaDoorClosed } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Stays = [
    {
        name : "Check-in",
        checkIn:"12:00 pm",
        checkOut:"6:00 pm"
    },
    {
        name : "Check-in",
        checkIn:"12:00 pm",
        checkOut:"6:00 pm"
    },
    {
        name : "Check-in",
        checkIn:"12:00 pm",
        checkOut:"6:00 pm"
    },
]


const StayHistoryTicket = () => {
  return (
    <div>
    {Stays.map((stay)=>(
      <div className="bg-white p-6 rounded-lg shadow-lg w-full flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={CVK} alt="Emirates" className="w-20 h-auto mr-4 rounded-md p-2 border-2 border-gray-100" /> 
          <div>
            <p className="text-gray-500 ">{stay.name} (EWR)</p>
            <p className=" text-2xl font-medium">{stay.checkIn}</p>
          </div>
          <span className="mx-4 text-black">—</span>
          <div>
            <p className="text-gray-500 ">Newark (EWR)</p>
            <p className="text-2xl font-medium ">{stay.checkOut}</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-center">
            <span className="material-icons mr-4 text-xl p-1 bg-green-100 rounded-md "><HiClock/></span>
            <div>
              <p className="text-gray-500">Check-in time</p>
              <p className="font-semibold text-lg">{stay.checkIn}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-icons  mr-4 text-xl p-1 bg-green-100 rounded-md"><FaDoorClosed/></span>
            <div>
              <p className="text-gray-500">Room no.</p>
              <p className="font-semibold">On arrival</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-icons mr-4 text-xl p-1 bg-green-100 rounded-md"><HiClock/></span>
            <div>
              <p className="text-gray-500">Check-in out</p>
              <p className="font-semibold">{stay.checkOut}</p>
            </div>
          </div>        
        </div>

    
        <div className="ml-4 flex items-center gap-4">
          <button className="p-2 bg-[#8dd3bb] rounded-md">Download Ticket</button>
          <button className="border-2 border-[#8dd3bb] p-2 rounded-md" ><FaAngleRight/></button>
        </div>
        
      </div>
      ))}
      </div>
    
  );
};

export default StayHistoryTicket;
