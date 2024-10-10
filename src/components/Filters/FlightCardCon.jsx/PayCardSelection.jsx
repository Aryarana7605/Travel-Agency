import React, { useState } from 'react';
import { FaCcVisa } from "react-icons/fa";
import AddNewCardModal from './AddNewCardModal';

const PayCardSelection = () => {
  const [selectedCard, setSelectedCard] = useState('visa');

  const [isModalOpen, setIsModalOpen] = useState(false);

  
   const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 w-full mt-8 mx-auto bg-white rounded-lg shadow-md">
      
      <div 
        className={`p-4 rounded-lg border ${selectedCard === 'visa' ? 'bg-green-200 border-green-400' : 'border-gray-300'}`}
        onClick={() => setSelectedCard('visa')}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaCcVisa className="h-6 w-10 mr-4"/>
            <span className="font-bold text-lg">**** 4321</span>
            <span className="text-sm text-gray-600 ml-2">02/27</span>
          </div>
          <div className="ml-4">
            <input
              type="radio"
              name="card"
              checked={selectedCard === 'visa'}
              onChange={() => setSelectedCard('visa')}
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>

      
      <div 
        className={`p-4 mt-4 border-2 border-dashed rounded-lg ${selectedCard === 'new' ? 'border-green-400' : 'border-gray-300'}`}
        onClick={() => setSelectedCard('new')}
      >
        <div className="flex flex-col items-center justify-center text-center" onClick={openModal}>
          <div className="flex items-center justify-center h-12 w-12 rounded-full border border-[#8dd3bb] text-[#8dd3bb]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="mt-2 text-sm text-gray-600">Add a new card</p>
        </div>
      </div>
      {isModalOpen && <AddNewCardModal onClick={closeModal} />}
    </div>
  );
};

export default PayCardSelection;