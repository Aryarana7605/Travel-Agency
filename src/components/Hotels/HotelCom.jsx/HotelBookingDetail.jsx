import cvkLogo from "../HotelCom.jsx/HotelsImg/cvkLogo.png";
import { ImLocation2 } from "react-icons/im";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const HotelBookingDetail = () => {
  return (
    <div className="shadow p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h1 className="text-lg lg:text-3xl font-semibold">
          Superior room - 1 double bed or 2 twin beds
        </h1>
        <h1 className="text-lg lg:text-3xl text-[#ff8682] font-semibold mt-4 lg:mt-0">
          $240 <span className="text-sm lg:text-lg">/night</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-[90%] mx-auto p-4 border border-[#8dd3bb] my-6 rounded-lg">
        <img src={cvkLogo} alt="cvkImg" className="h-16 md:h-20" />
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-semibold">
            CVK Park Bosphorus Hotel Istanbul
          </h1>
          <p className="text-gray-600 mt-2 flex items-center justify-center md:justify-start gap-2 text-sm">
            <ImLocation2 />
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-lg md:text-xl font-semibold">Thursday, Dec 8</h1>
          <p className="text-sm text-gray-400">Check-in</p>
        </div>

        <div className="text-5xl lg:text-6xl">
          <HiMiniBuildingOffice2 />
        </div>

        <div>
          <h1 className="text-lg md:text-xl font-semibold">Thursday, Dec 8</h1>
          <p className="text-sm text-gray-400">Check-out</p>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingDetail;
