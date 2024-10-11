import { RiEditBoxFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";

const AccountInfo = () => {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Account</h1>

      <div className="flex flex-col gap-4">
        

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-2 md:mb-0">
            <p className="text-gray-500">Name</p>
            <p className="font-semibold">John Doe</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2 mt-2 md:mt-0">
            <RiEditBoxFill /> Change
          </button>
        </div>


        <div className="flex flex-col gap-2 md:flex-row justify-between w-full">
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold">john.doe@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 mt-2 md:mt-0">
            <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2">
              <IoIosAddCircle /> Add another email
            </button>
            <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2">
              <RiEditBoxFill /> Change
            </button>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-2 md:mb-0">
            <p className="text-gray-500">Password</p>
            <p className="font-semibold">************</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2 mt-2 md:mt-0">
            <RiEditBoxFill /> Change
          </button>
        </div>


        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-2 md:mb-0">
            <p className="text-gray-500">Phone number</p>
            <p className="font-semibold">+1 000-000-0000</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2 mt-2 md:mt-0">
            <RiEditBoxFill /> Change
          </button>
        </div>


        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-2 md:mb-0">
            <p className="text-gray-500">Address</p>
            <p className="font-semibold">
              St 32 main downtown, Los Angeles, California, USA
            </p>
          </div>
          <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2 mt-2 md:mt-0">
            <RiEditBoxFill /> Change
          </button>
        </div>


        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-2 md:mb-0">
            <p className="text-gray-500">Date of birth</p>
            <p className="font-semibold">01-01-1992</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-[#8dd3bb] rounded-md p-2 mt-2 md:mt-0">
            <RiEditBoxFill /> Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
