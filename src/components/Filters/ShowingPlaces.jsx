import React, { useState } from "react";

const ShowingPlaces = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between p-4">
     
      <div className="lg:text-lg text-base">
        Showing <span className="font-semibold">4</span> of{" "}
        <span className="text-red-500 font-semibold">257 places</span>
      </div>

      
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="font-semibold text-base lg:text-lg flex items-center"
        >
         <span className="hidden lg:block"> Sort by</span> Recommended <span className="ml-1">▼</span>
        </button>

        
        {isOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Recommended
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cheapest
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Best
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Quickest
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShowingPlaces;
