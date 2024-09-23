import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; 

const FlightsSorting = () => {
  return (
    <div className="flex items-center justify-between bg-white p-2 lg:p-4 shadow-md rounded-lg w-full">
      
      <div className="flex space-x-2 lg:space-x-8 text-center">
      
        <div className="sort-option flex flex-col items-center">
          <span className="font-semibold">Cheapest</span>
          <span className="lg:text-sm text-xs text-gray-500">$99 . 2h 18m</span>
        </div>

      
        <div className="h-6 w-px bg-gray-300"></div>

      
        <div className="sort-option flex flex-col items-center">
          <span className="font-semibold">Best</span>
          <span className="lg:text-sm text-xs text-gray-500">$99 . 2h 18m</span>
        </div>

      
        <div className="h-6 w-px bg-gray-300"></div>

        
        <div className="sort-option flex flex-col items-center">
          <span className="font-semibold">Quickest</span>
          <span className="lg:text-sm text-xs text-gray-500">$99 . 2h 18m</span>
        </div>
      </div>

      
      <div className="flex items-center space-x-2">
        <AiOutlineMenu className="text-xl" />
        <span className="font-semibold hidden lg:block">Other sort</span>
      </div>
    </div>
  );
};

export default FlightsSorting;