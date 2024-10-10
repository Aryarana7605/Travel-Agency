import React, { useState } from 'react';
import AccountInfo from './AccountInfo';
import PaymentMethods from './PaymentMethods';
import TicketHistory from './TicketHistory';


const AccountTabs = () => {
  const [activeTab, setActiveTab] = useState('Accounts');

  return (
    <div className=" mx-auto p-2 w-full">
        <h1 className='text-2xl font-semibold'>Favourites</h1>
      
      <div  className="flex justify-between border-b  rounded-lg shadow-md mt-8 bg-white pt-8 ">
        <button
          onClick={() => setActiveTab('Accounts')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'Accounts' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
        <p>Accounts</p>
        </button>

        <button
          onClick={() => setActiveTab('Tickets/Bookings')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'Tickets/Bookings' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
          <p>Tickets/Bookings</p>
        </button>
        <button
          onClick={() => setActiveTab('PaymentMethods')}
          className={`w-1/2 text-center py-2 ${
            activeTab === 'PaymentMethods' ? 'border-b-4 border-green-400 text-black' : 'text-gray-500'
          }`}
        >
          <p>Payment methods</p>
        </button>
      </div>

      
      <div className="mt-4 p-8">
        {activeTab === 'Accounts' && (
          <div>
            <AccountInfo/>
          </div>
        )}

        {activeTab === 'Tickets/Bookings' && (
          <div>
            <TicketHistory/>
          </div>
        )}

        {activeTab === 'PaymentMethods' && (
          <div>
            <PaymentMethods/>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountTabs;
