import React, { useState } from 'react';
import { FaCcVisa } from "react-icons/fa";
import AddNewCardModal from '../Filters/FlightCardCon.jsx/AddNewCardModal';
import { MdDeleteForever } from "react-icons/md";


const PaymentMethods = () => {
  const [selectedCard, setSelectedCard] = useState('visa');

  const [isModalOpen, setIsModalOpen] = useState(false);

  
   const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 w-full lg:h-60 mt-8 mx-auto bg-white rounded-lg shadow-md flex justify-normal gap-6">
      
      <div 
        className={`p-4 lg:w-[30%] rounded-lg bg-[#8dd3bb] flex flex-col justify-between`}
        onClick={() => setSelectedCard('visa')}
        onChange={selectedCard}
      >
        
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg flex flex-col">**** **** ****<span>4321</span></div>
            <div className='text-2xl'><MdDeleteForever/></div>
          </div>
          <div className="flex justify-between">
           <p className='flex flex-col'>Valid Thru <span className='font-semibold'> 02/27</span></p>
            <FaCcVisa className="h-6 w-10 "/>
          </div>
      
      </div>

      
      <div 
        className={`p-4 lg:flex justify-center  lg:w-[30%] border-2 border-dashed rounded-lg border-[#8dd3bb]`}
        onClick={() => setSelectedCard('new')}
      >
        <div className="flex flex-col items-center justify-center text-center" onClick={openModal}>
          <div className="flex items-center justify-center h-16 w-16 rounded-full border border-[#8dd3bb] text-[#8dd3bb]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
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

export default PaymentMethods;