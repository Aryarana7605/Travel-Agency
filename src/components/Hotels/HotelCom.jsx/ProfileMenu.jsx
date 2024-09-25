import React from "react";
import { FaUser, FaWallet, FaCog, FaLifeRing} from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import JohnD from "./HotelsImg/JohnD.png"

const ProfileMenu = () => {

    const Users = [
        {
            userName:"John D.",
            userImg:JohnD
        }
    ]

  return (
    <div className="w-80 p-6 bg-white rounded-lg shadow-md mx-auto">
      
      {Users.map((user)=>(
      <div className="flex items-center space-x-4">
        <img
          src={user.userImg}
          alt="Profile"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.userName}</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
       ))}

      
      <div className="my-4 border-t border-gray-300"></div>

      
      <div className="space-y-4">
        
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-3">
            <FaUser  />
            <p className="text-gray-800">My account</p>
          </div>
          <FaAngleRight/>
        </div>

        
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-3">
            <FaWallet  />
            <p className="text-gray-800">Payments</p>
          </div>
          <FaAngleRight/>
        </div>

        
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-3">
            <FaCog  />
            <p className="text-gray-800">Settings</p>
          </div>
          <FaAngleRight/>
        </div>

        <div className="my-4 border-t border-gray-300"></div>

        
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-3">
            <FaLifeRing />
            <p className="text-gray-800">Support</p>
          </div>
          <FaAngleRight/>
        </div>

        
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-3">
            <IoExit/>
            <p className="text-gray-800">Logout</p>
          </div>
          <FaAngleRight/>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;