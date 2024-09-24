import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillAirplaneFill } from "react-icons/bs";
import TriangleLines from "../../flights/FlightsImg/trianleLines.png"
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaDoorClosed } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";


const BoardingPass = () => {
  return (
    <div className="mt-8 mx-auto bg-white rounded-lg flex justify-between">

        <div className="flex w-full rounded-2xl border-2 border-gray-500">
      
      <div className="flex flex-col items-start rounded-2xl justify-between bg-green-50 p-6 w-1/4">
        <div className="text-center">
          <p className="text-2xl font-bold">12:00 pm</p>
          <p className="text-gray-600">Newark(EWR)</p>
        </div>
        <div className="flex-col gap-4 flex items-center justify-center">
          <img src={TriangleLines} alt="." />
        <BsFillAirplaneFill className="text-xl"/>
          <img src={TriangleLines} alt="." className="rotate-180" />
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">12:00 pm</p>
          <p className="text-gray-600">Newark(EWR)</p>
        </div>
      </div>

      
      <div className="flex-grow flex flex-col justify-between bg-white rounded-2xl">
        <div className="flex items-center justify-between  bg-[#8dd3bb] p-6 ">
        
          <div className="flex items-center space-x-4">
            <FaUser className="w-12 h-12 rounded-full"/>
            <div>
              <p className="font-semibold text-gray-900">James Doe</p>
              <p className="text-sm text-gray-500">Boarding Pass N°123</p>
            </div>
          </div>

        
          <p className="text-xl font-semibold">Business Class</p>
        </div>

        
        <div className="flex items-center justify-between mt-6 p-6">
          <div className=" flex items-center space-x-2">
            <FaCalendarAlt className="text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]"/>
            <div className="flex flex-col"><p className="font-semibold text-gray-400">Date</p><p className="font-medium">Newark(EWR)</p></div>
          </div>
          <div className=" flex items-center space-x-2">
            <FaClock className="text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]"/>
            <div className="flex flex-col"><p className="font-semibold text-gray-400">Flight Time</p><p className="font-medium">12:00</p></div>
          </div>
          <div className=" flex items-center space-x-2">
            <FaDoorClosed className="text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]"/>
            <div className="flex flex-col"><p className="font-semibold text-gray-400">Gate</p><p className="font-medium">A12</p></div>
          </div>
          <div className=" flex items-center space-x-2">
            <MdAirlineSeatReclineNormal className="text-5xl bg-green-50 p-2 rounded-sm text-[#8dd3bb]"/>
            <div className="flex flex-col"><p className="font-semibold text-gray-400">Seat</p><p className="font-medium">128</p></div>
          </div>
        </div>

        
        <div className="flex items-center justify-between mt-6 p-6">
          <div>
            <p className="font-semibold text-gray-900 text-xl">EK</p>
            <p className="text-sm text-gray-500">ABC12345</p>
          </div>
          <div className="flex items-center">
            <img
              src=""
              alt="Barcode"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      </div>

      
      <div className="w-1/4 p-6 flex items-center justify-center bg-green-50 border-2 border-gray-500 rounded-2xl">
        
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
