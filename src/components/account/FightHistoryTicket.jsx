import emiratesLogo from "./accountImg/emiratesLogo.png"
import { FaCalendarAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi2";
import { FaDoorClosed } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const FlightDetails = [
    {
        name : "Newark",
        date:"12-11-24",
        seat:"123"
    },
    {
        name : "Newark",
        date:"12-11-24",
        seat:"123"
    },
    {
        name : "Newark",
        date:"12-11-24",
        seat:"123"
    },
]


const FlightHistoryTicket = () => {
  return (
    <div>
    {FlightDetails.map((FD)=>(
      <div className="bg-white p-6 rounded-lg shadow-lg w-full flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={emiratesLogo} alt="Emirates" className="w-20 h-auto mr-4 rounded-md p-2 border-2 border-gray-100" /> 
          <div>
            <p className="text-gray-500 font-semibold">Newark (EWR)</p>
            <p className=" text-2xl font-medium">12:00 pm</p>
          </div>
          <span className="mx-4 text-black">—</span>
          <div>
            <p className="text-gray-500 font-semibold">Newark (EWR)</p>
            <p className="text-2xl font-medium ">6:00 pm</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-center">
            <span className="material-icons text-xl mr-2 p-1 bg-green-100 rounded-md"><FaCalendarAlt/></span>
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-semibold">{FD.date}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-xl  mr-2 p-1 bg-green-100 rounded-md"><FaDoorClosed/></span>
            <div>
              <p className="text-gray-500">Flight time</p>
              <p className="font-semibold">Newark (EWR)</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-xl mr-2 p-1 bg-green-100 rounded-md"><HiClock/></span>
            <div>
              <p className="text-gray-500">Seat no.</p>
              <p className="font-semibold">{FD.seat}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-xl mr-2 p-1 bg-green-100 rounded-md"><MdAirlineSeatReclineNormal/></span>
            <div>
              <p className="text-gray-500">Gate</p>
              <p className="font-semibold">A12</p>
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

export default FlightHistoryTicket;
