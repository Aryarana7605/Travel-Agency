import whiteGolobeLogo from '../../assets/whiteGolobeLogo.png';
import { IoBed } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosAirplane } from "react-icons/io";
const LpNav = () => {
  const navigate = useNavigate()
  return (
    <nav className="nav bg-transparent flex lg:justify-between lg:items-center py-2 px-6">
    <ul className='text-white lg:flex items-center'>
    <li className='flex items-center' onClick={()=>navigate("/flights")}><span className='text-3xl'><IoIosAirplane/></span><button className='lg:ml-2 font-semibold' href=".">Find Flight</button></li>
    <li className='flex lg:ml-4 items-center' onClick={()=>navigate("/hotels")}><span className='text-xl'><IoBed/></span><button className='lg:ml-2 font-semibold' href=".">Find Stays</button></li>
  </ul>
  <img className='logo h-8' src={whiteGolobeLogo} alt="logo"/>
  <ul className='lp-booking-nav-ul-2 lg:flex items-center'>
    <li className='header-login-btn text-white cursor-pointer font-semibold lg:mr-4' onClick={()=>navigate("/login")}>Login</li>
    <li className='header-signup-btn text-base font-semibold bg-white p-2 rounded-lg cursor-pointer' onClick={()=>navigate("/signup")} >Sign up</li>
  </ul>
  </nav>
  )
  
}

export default LpNav
