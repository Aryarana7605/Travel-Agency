import { IoMail } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const BookingLogin = () => {
  return (
    <div className="p-6 w-full mt-12 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login or Sign up to book</h2>
      
      <div className="mb-4">
        <input 
          type="tel" 
          id="phone-number" 
          placeholder="Phone Number" 
          className="w-full px-4 py-4 border border-gray-300 rounded-lg "
        />
        <p className="text-xs text-gray-600 mt-2">
          We'll call or text you to confirm your number. Standard message and data rates apply. 
          <button  className="font-semibold ml-2"> Privacy Policy</button>
        </p>
      </div>
      
      <button className="w-full bg-[#8dd3bb]  py-2 rounded-lg font-semibold">
        Continue
      </button>

      <div className="my-4 flex items-center">
        <hr className="flex-grow border-gray-300"/>
        <span className="px-4 text-sm">Or</span>
        <hr className="flex-grow border-gray-300"/>
      </div>

      <div className="flex justify-evenly mb-4">
        <button className="flex items-center justify-center w-1/4 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
          
          <IoLogoFacebook className="text-blue-600 text-xl"/>
        </button>
        <button className="flex items-center justify-center w-1/4 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
          <FcGoogle className="text-xl"/>
        </button>
        <button className="flex items-center justify-center w-1/4 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
          <FaApple className="text-xl"/>
        </button>
      </div>

      <button className="w-full border flex items-center justify-center border-[#8dd3bb] py-2 rounded-lg font-semibold hover:bg-green-100 transition duration-200">
        <IoMail className="mr-2"/> Continue with email
      </button>
    </div>
  );
};

export default BookingLogin;
