import emiratesLogo from "./accountImg/emiratesLogo.png";
import { FaCalendarAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi2";
import { FaDoorClosed } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const FlightDetails = [
  {
    name: "Newark",
    date: "12-11-24",
    seat: "123",
  },
  {
    name: "Newark",
    date: "12-11-24",
    seat: "123",
  },
  {
    name: "Newark",
    date: "12-11-24",
    seat: "123",
  },
];

const FlightHistoryTicket = () => {
  return (
    <div>
      {FlightDetails.map((FD, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg w-full flex flex-col md:flex-row justify-between items-center mb-4"
        >          
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
            <img
              src={emiratesLogo}
              alt="Emirates"
              className="w-16 h-auto mr-4 rounded-md p-2 border-2 border-gray-100 mb-4 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-500 font-semibold">Newark (EWR)</p>
              <p className="text-2xl font-medium">12:00 pm</p>
            </div>
            <span className="hidden md:inline-block mx-4 text-black">—</span>
            <div className="flex flex-col items-center md:items-start md:ml-4">
              <p className="text-gray-500 font-semibold">Newark (EWR)</p>
              <p className="text-2xl font-medium">6:00 pm</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex items-center">
              <span className="text-xl mr-2 p-1 bg-green-100 rounded-md">
                <FaCalendarAlt />
              </span>
              <div>
                <p className="text-gray-500">Date</p>
                <p className="font-semibold">{FD.date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2 p-1 bg-green-100 rounded-md">
                <FaDoorClosed />
              </span>
              <div>
                <p className="text-gray-500">Flight time</p>
                <p className="font-semibold">Newark (EWR)</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2 p-1 bg-green-100 rounded-md">
                <HiClock />
              </span>
              <div>
                <p className="text-gray-500">Seat no.</p>
                <p className="font-semibold">{FD.seat}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2 p-1 bg-green-100 rounded-md">
                <MdAirlineSeatReclineNormal />
              </span>
              <div>
                <p className="text-gray-500">Gate</p>
                <p className="font-semibold">A12</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0 md:ml-4">
            <button className="p-2 bg-[#8dd3bb] rounded-md w-full md:w-auto">
              Download Ticket
            </button>
            <button className="border-2 border-[#8dd3bb] p-2 rounded-md">
              <FaAngleRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightHistoryTicket;
