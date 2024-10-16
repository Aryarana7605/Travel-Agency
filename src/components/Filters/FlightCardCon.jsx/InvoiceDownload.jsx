import React from "react";
import { FiShare2 } from "react-icons/fi";

const FlightInfoSection = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row items-end lg:items-center justify-between p-4 bg-white rounded-md shadow-md  mx-auto">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Emirates A380 Airbus</h3>
        <p className="text-sm text-gray-500 flex items-center">      
          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
        </p>
      </div>

      
      <div className="flex-col flex items-end max-w-max">
        <p className="text-2xl font-bold text-gray-900">$240</p>


      <div className="flex gap-4 items-center">
        <button className="p-2 border border-[#8dd3bb] rounded-md hover:bg-green-100 transition">
          <FiShare2 className=" w-5 h-5" />
        </button>
        <button className="bg-[#8dd3bb] font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition">
          Download
        </button>
        </div>

      </div>
      
    </div>
  );
};

export default FlightInfoSection;
