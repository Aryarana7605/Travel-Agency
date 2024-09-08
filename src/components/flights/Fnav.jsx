import blackGolobeLogo from '../../assets/golobeLogo.png';
import { IoBed } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosAirplane } from "react-icons/io";

const Fnav = () => {
    const navigate = useNavigate()
  return (
    <div className="">
      <nav className="nav bg-transparent flex justify-between items-center py-4 px-4 lg:px-6">
        <ul className="text-black flex items-center">
          <li
            className="flex items-center text-black"
            onClick={() => navigate("/flights")}
          >
            <span className="text-2xl lg:text-3xl">
              <IoIosAirplane />
            </span>
            <button
              className="ml-2 font-semibold text-sm lg:text-base"
              href="."
            >
              Find Flight
            </button>
          </li>
          <li className="flex ml-4 lg:ml-6 items-center text-black">
            <span className="text-xl">
              <IoBed />
            </span>
            <a className="ml-2 font-semibold text-sm lg:text-base" href=".">
              Find Stays
            </a>
          </li>
        </ul>

        <img
          className="logo h-6 lg:h-8 mx-auto lg:mx-0"
          src={blackGolobeLogo}
          alt="logo"
        />

        <ul className="flex items-center">
          <li
            className="header-login-btn text-black cursor-pointer font-semibold mr-2 lg:mr-4 text-sm lg:text-base"
            onClick={() => navigate("/login")}
          >
            Login
          </li>
          <li
            className="header-signup-btn font-semibold text-white bg-black py-1 px-3 rounded-lg cursor-pointer text-sm lg:text-base"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Fnav
