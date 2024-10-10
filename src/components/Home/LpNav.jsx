import whiteGolobeLogo from '../../assets/whiteGolobeLogo.png';
import { IoBed } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosAirplane } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io"; 
import { useState } from 'react';

const LpNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);  
  const toggleMenu = () => {
    setIsOpen(!isOpen);  
  };

  return (
    <nav className="nav bg-transparent flex justify-between items-center py-2 px-6 relative">
      
      
      <ul className="hidden lg:flex text-white items-center">
        <li className="flex items-center cursor-pointer" onClick={() => navigate("/flights")}>
          <span className="text-3xl"><IoIosAirplane /></span>
          <button className="lg:ml-2 font-semibold">Find Flight</button>
        </li>
        <li className="flex lg:ml-4 items-center cursor-pointer" onClick={() => navigate("/hotels")}>
          <span className="text-xl"><IoBed /></span>
          <button className="lg:ml-2 font-semibold">Find Stays</button>
        </li>
      </ul>

      
      <img className="logo h-8" src={whiteGolobeLogo} alt="logo" onClick={()=>navigate("/")} />

      
      <ul className="hidden lg:flex items-center">
        <li className="header-login-btn text-white cursor-pointer font-semibold lg:mr-4" onClick={() => navigate("/login")}>
          Login
        </li>
        <li className="header-signup-btn text-base font-semibold bg-white p-2 rounded-lg cursor-pointer" onClick={() => navigate("/signup")}>
          Sign up
        </li>
      </ul>

      
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl text-white">
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-6 p-4 mt-12">
          <li className="flex items-center cursor-pointer" onClick={() => { navigate("/flights"); toggleMenu(); }}>
            <span className="text-3xl"><IoIosAirplane /></span>
            <button className="ml-2 font-semibold">Find Flight</button>
          </li>
          <li className="flex items-center cursor-pointer" onClick={() => { navigate("/hotels"); toggleMenu(); }}>
            <span className="text-xl"><IoBed /></span>
            <button className="ml-2 font-semibold">Find Stays</button>
          </li>
          <li className="header-login-btn text-black cursor-pointer font-semibold" onClick={() => { navigate("/login"); toggleMenu(); }}>
            Login
          </li>
          <li className="header-signup-btn text-base font-semibold bg-black text-white p-2 rounded-lg cursor-pointer" onClick={() => { navigate("/signup"); toggleMenu(); }}>
            Sign up
          </li>
        </ul>
      </div>

      
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </nav>
  );
}

export default LpNav;
