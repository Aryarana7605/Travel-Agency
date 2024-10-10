import blackGolobeLogo from '../../../assets/golobeLogo.png';
import { IoBed } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosAirplane } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io"; 
import JohnD from "../HotelCom.jsx/HotelsImg/JohnD.png";
import { useState } from 'react';

const LoginNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Users = [
    {
      userName: "John D.",
      userImg: JohnD
    }
  ];

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <nav className="nav bg-transparent flex justify-between items-center py-4 px-4 lg:px-12">
        
        {/* Large screen links */}
        <ul className="hidden lg:flex text-black items-center">
          <li
            className="flex items-center text-black cursor-pointer"
            onClick={() => navigate("/flights")}
          >
            <span className="text-2xl lg:text-3xl">
              <IoIosAirplane />
            </span>
            <button className="ml-2 font-semibold text-sm lg:text-base">
              Find Flight
            </button>
          </li>
          <li
            className="flex ml-4 lg:ml-6 items-center text-black cursor-pointer"
            onClick={() => navigate("/hotels")}
          >
            <span className="text-xl">
              <IoBed />
            </span>
            <button className="ml-2 font-semibold text-sm lg:text-base">
              Find Stays
            </button>
          </li>
        </ul>

        {/* Logo */}
        <img
          className="logo h-6 lg:h-8 mx-auto lg:mx-0"
          src={blackGolobeLogo}
          alt="logo"
          onClick={() => navigate("/")}
        />

        {/* Large screen user account section */}
        {Users.map((user) => (
          <ul className="hidden lg:flex items-center">
            <li
              className="header-login-btn text-black cursor-pointer font-semibold mr-2 lg:mr-4 text-sm lg:text-base flex items-center gap-2"
              onClick={() => navigate("/favourites")}
            >
              <span><FaHeart /></span> Favourite
            </li>
            <div className="h-4 border-2 border-black"></div>
            <li
              className="header-signup-btn font-semibold py-1 px-3 rounded-lg cursor-pointer text-sm lg:text-base"
              onClick={() => navigate("/account")}
            >
              <div className="flex items-center gap-2">
                <img src={user.userImg} alt="User" className="w-8 h-8 rounded-full" />
                <p className="text-black font-semibold">{user.userName}</p>
              </div>
            </li>
          </ul>
        ))}

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      {/* Side menu for mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          <li
            className="flex items-center text-black cursor-pointer"
            onClick={() => {
              navigate("/flights");
              toggleMenu();
            }}
          >
            <span className="text-2xl">
              <IoIosAirplane />
            </span>
            <button className="ml-2 font-semibold text-sm">Find Flight</button>
          </li>
          <li
            className="flex items-center text-black cursor-pointer"
            onClick={() => {
              navigate("/hotels");
              toggleMenu();
            }}
          >
            <span className="text-xl">
              <IoBed />
            </span>
            <button className="ml-2 font-semibold text-sm">Find Stays</button>
          </li>
          <li
            className="flex items-center text-black cursor-pointer"
            onClick={() => {
              navigate("/favourites");
              toggleMenu();
            }}
          >
            <span><FaHeart /></span>
            <button className="ml-2 font-semibold text-sm">Favourite</button>
          </li>
          <li
            className="flex items-center text-black cursor-pointer"
            onClick={() => {
              navigate("/account");
              toggleMenu();
            }}
          >
            <img src={Users[0].userImg} alt="User" className="w-8 h-8 rounded-full" />
            <span className="ml-2 font-semibold">{Users[0].userName}</span>
          </li>
        </ul>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default LoginNav;
