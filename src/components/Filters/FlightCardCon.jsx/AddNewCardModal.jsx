import React, { useState } from "react";

const AddNewCardModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expDate: "",
    cvc: "",
    nameOnCard: "",
    country: "United States",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Information Submitted", formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
       
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Add a new Card</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="4321 4321 4321 4321"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="absolute right-3 top-3 h-5 w-auto"
              />
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Exp. Date
              </label>
              <input
                type="text"
                name="expDate"
                value={formData.expDate}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="02/27"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="123"
              />
            </div>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="John Doe"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country or Region
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>

         
          <div className="flex items-center">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="ml-2 text-sm text-gray-700">
              Securely save my information for 1-click checkout
            </label>
          </div>

        
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Card
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddNewCardModal;
