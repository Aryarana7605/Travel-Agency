import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillAirplaneFill } from "react-icons/bs";
import TriangleLines from "../../flights/FlightsImg/trianleLines.png";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaDoorClosed } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const BoardingPass = () => {
  return (
    <div className="mt-8 mx-auto bg-white rounded-lg flex flex-col lg:flex-row justify-between">

      <div className="flex w-full lg:w-3/4 rounded-2xl border-2 border-gray-500 flex-col lg:flex-row">
        
        
        <div className="flex flex-col items-start rounded-2xl justify-between bg-green-50 p-4 lg:p-6 lg:w-1/4">
          <div className="text-center">
            <p className="text-xl lg:text-2xl font-bold">12:00 pm</p>
            <p className="text-gray-600">Newark (EWR)</p>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4 items-center justify-center">
            <img src={TriangleLines} alt="." className="w-10 lg:w-12" />
            <BsFillAirplaneFill className="text-xl lg:text-2xl" />
            <img src={TriangleLines} alt="." className="rotate-180 w-10 lg:w-12" />
          </div>
          <div className="text-center">
            <p className="text-xl lg:text-2xl font-bold">12:00 pm</p>
            <p className="text-gray-600">Newark (EWR)</p>
          </div>
        </div>

        
        <div className="flex-grow flex flex-col justify-between bg-white rounded-2xl">
          <div className="flex items-center justify-between bg-[#8dd3bb] p-4 lg:p-6 lg:rounded-tr-xl">
            <div className="flex items-center space-x-4">
              <FaUser className="w-8 h-8 lg:w-12 lg:h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-900">James Doe</p>
                <p className="text-sm text-gray-500">Boarding Pass N°123</p>
              </div>
            </div>
            <p className="text-lg lg:text-xl font-semibold">Business Class</p>
          </div>

          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 lg:mt-6 p-4 lg:p-6 space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-4xl lg:text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]" />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-400">Date</p>
                <p className="font-medium">Newark (EWR)</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-4xl lg:text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]" />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-400">Flight Time</p>
                <p className="font-medium">12:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaDoorClosed className="text-4xl lg:text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]" />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-400">Gate</p>
                <p className="font-medium">A12</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MdAirlineSeatReclineNormal className="text-4xl lg:text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]" />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-400">Seat</p>
                <p className="font-medium">128</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 lg:mt-6 p-4 lg:p-6 space-y-4 lg:space-y-0">
            <div>
              <p className="font-semibold text-gray-900 text-lg lg:text-xl">EK</p>
              <p className="text-sm text-gray-500">ABC12345</p>
            </div>
            <div className="flex items-center w-full lg:w-2/4">
              <img
                src=""
                alt="Barcode"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-1/4 p-4 lg:p-6 flex items-center justify-center bg-green-50 border-2 border-gray-500 rounded-2xl mt-4 lg:mt-0">
        <img
          src=""
          alt="Flight Path"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BoardingPass;
