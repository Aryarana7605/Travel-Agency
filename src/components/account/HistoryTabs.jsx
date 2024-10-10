import React, { useState } from 'react'
import { FaPlane } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import FlightHistoryTicket from './FightHistoryTicket';
import StayHistoryTicket from './StayHistoryTicket';


const HistoryTabs = () => {
    const [activeTab , setActiveTab] = useState("Flights")
  return (
    <div>
    <h1 className='text-3xl font-semibold'>Tickets/Bookings</h1>
      <div className='flex justify-center gap-4 bg-white rounded-md mt-8'>
      <button
          onClick={() => setActiveTab('Flights')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'Flights' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
        <p className='pl-4 flex justify-left items-center text-black font-semibold gap-2 text-xl'><FaPlane/> Flights</p>
        </button>
        <div className='border-r-2 border-gray-300'></div>
      <button
          onClick={() => setActiveTab('Stays')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'Stays' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
        <p  className=' flex justify-left items-center text-black font-semibold gap-2 text-xl'><IoBed/> Stays</p>
        </button>
        </div>

        <div className='mt-4 p-8'>
        {activeTab === "Flights" && (
            <FlightHistoryTicket/>
        )}
        {activeTab === "Stays" && (
            <StayHistoryTicket/>
        )}
        </div>                        

    </div>
  )
}

export default HistoryTabs
