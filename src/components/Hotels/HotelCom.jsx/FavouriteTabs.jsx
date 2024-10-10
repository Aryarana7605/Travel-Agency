import React, { useState } from 'react';
import HotelCard from '../HotelsFilters/HotelCard';

const FavouriteTabs = () => {
  const [activeTab, setActiveTab] = useState('Flights');

  return (
    <div className=" mx-auto p-4 w-full">
        <h1 className='text-2xl font-semibold'>Favourites</h1>
      
      <div className="flex justify-between border-b  rounded-lg shadow-md mt-8">
        <button
          onClick={() => setActiveTab('Flights')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'Flights' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
          <p>Flights</p>
          <p className="text-sm text-gray-400">2 marked</p>
        </button>

        <button
          onClick={() => setActiveTab('Places')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'Places' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
          <p>Places</p>
          <p className="text-sm text-gray-400">4 marked</p>
        </button>
      </div>

      
      <div className="mt-4">
        {activeTab === 'Flights' && (
          <div>
            <h2 className="text-lg font-semibold">Flights Content</h2>
            <p className="text-gray-500">This is the Flights panel where you can see your marked flights.</p>
          </div>
        )}

        {activeTab === 'Places' && (
          <div>
            <HotelCard/>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouriteTabs;
