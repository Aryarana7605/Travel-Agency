import cvkLogo from "../HotelCom.jsx/HotelsImg/cvkLogo.png"
import { ImLocation2 } from "react-icons/im";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";


const HotelBookingDetail = () => {
  return (
    <div  className="shadow p-8">
        <div className="flex items-center justify-between">
            <h1 className=" lg:text-3xl font-semibold">Superior room - 1 double bed or 2 twin beds</h1>
            <h1 className=" lg:text-3xl text-[#ff8682] font-semibold">$240 <span className="text-lg">/night</span></h1>
        </div>      

        <div className="flex items-center gap-8 w-[90%] mx-auto p-4 border border-[#8dd3bb] my-8 rounded-lg">
            <img src={cvkLogo} alt="cvkImg" className="h-20" />
            <div>
                <h1 className="text-3xl font-semibold">CVK Park Bosphorus Hotel Istanbul</h1>
                <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm">
            <ImLocation2/>
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
            </div>
        </div>      

        <div className="flex items-center justify-between">
          <div >
            <h1 className="text-xl font-semibold">Thursday, Dec 8</h1>
            <p className="text-sm text-gray-400">Check-in</p>
          </div>

          <div className="text-6xl">
        <HiMiniBuildingOffice2/>
          </div>

          <div >
            <h1 className="text-xl font-semibold">Thursday, Dec 8</h1>
            <p className="text-sm text-gray-400">Check-in</p>
          </div>
        </div>      
    </div>
  )
}

export default HotelBookingDetail
