import React, { useState } from "react";

const HotelsSorting = () => {
  const [activeTab, setActiveTab] = useState("Hotels");

  return (
    <div className="flex justify-center items-center bg-white shadow-lg rounded-lg w-full mx-auto p-2 border-2 border-gray-200">
      
      <div
        onClick={() => setActiveTab("Hotels")}
        className={`cursor-pointer flex flex-col items-center w-1/3 p-2 ${
          activeTab === "Hotels" ? "text-black font-semibold" : "text-gray-400"
        }`}
      >
        <span>Hotels</span>
        <span className="text-sm">{activeTab === "Hotels" ? "257 places" : "257 places"}</span>
        {activeTab === "Hotels" && (
          <div className="h-1 w-full bg-[#8dd3bb] rounded-t-md mt-2"></div>
        )}
      </div>

        
      <div className="w-px h-full bg-gray-200"></div>

    
      <div
        onClick={() => setActiveTab("Motels")}
        className={`cursor-pointer flex flex-col items-center w-1/3 p-2 ${
          activeTab === "Motels" ? "text-black font-semibold" : "text-gray-400"
        }`}
      >
        <span>Motels</span>
        <span className="text-sm">{activeTab === "Motels" ? "51 places" : "51 places"}</span>
        {activeTab === "Motels" && (
          <div className="h-1 w-full bg-[#8dd3bb] rounded-t-md mt-2"></div>
        )}
      </div>

      
      <div className="w-px h-full bg-gray-200"></div>

      
      <div
        onClick={() => setActiveTab("Resorts")}
        className={`cursor-pointer flex flex-col items-center w-1/3 p-2 ${
          activeTab === "Resorts" ? "text-black font-semibold" : "text-gray-400"
        }`}
      >
        <span>Resorts</span>
        <span className="text-sm">{activeTab === "Resorts" ? "72 places" : "72 places"}</span>
        {activeTab === "Resorts" && (
          <div className="h-1 w-full bg-[#8dd3bb] rounded-t-md mt-2"></div>
        )}
      </div>
    </div>
  );
};

export default HotelsSorting;
