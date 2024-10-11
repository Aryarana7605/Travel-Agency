import React, { useState } from 'react';

const FlightPayOpt = () => {
  const [selectedOption, setSelectedOption] = useState('full');
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="p-4 w-full mx-auto bg-white rounded-lg shadow-md">
      <div 
        className={`p-4 rounded-lg mb-4 ${selectedOption === 'full' ? 'bg-green-200' : 'bg-white'} flex justify-between items-center cursor-pointer`} 
        onClick={() => setSelectedOption('full')}
      >
        <div>
          <h3 className="font-semibold text-lg">Pay in full</h3>
          <p className="text-sm">Pay the total and you are all set</p>
        </div>
        <input 
          type="radio" 
          checked={selectedOption === 'full'} 
          className="w-6 h-6"
          readOnly 
        />
      </div>

      <div 
        className={`p-4 rounded-lg mb-4 ${selectedOption === 'part' ? 'bg-green-200' : 'bg-white'} flex justify-between items-center cursor-pointer`} 
        onClick={() => setSelectedOption('part')}
      >
        <div >
          <h3 className="font-semibold text-lg">Pay part now, part later</h3>
          <p className="text-sm mr-1">Pay $207.43 now, and the rest ($207.43) will be automatically charged on Nov 14, 2022.</p>
        </div>
        <input 
          type="radio" 
          checked={selectedOption === 'part'} 
          className="w-6 h-6"
          readOnly 
        />
      </div>

      <button
        className="text-sm text-green-600 mt-2"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore ? 'Less info' : 'More info'}
      </button>

      {readMore && (
        <div className="mt-2">
          <p className="text-sm">
            No extra fees will be charged for splitting your payment. You can always update your payment method before the second payment is due.
          </p>
        </div>
      )}
    </div>
  );
};

export default FlightPayOpt;
