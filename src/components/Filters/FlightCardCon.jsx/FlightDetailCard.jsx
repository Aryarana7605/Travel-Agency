import emirates from "../../flights/FlightsImg/emirates.png"
import { IoAirplaneSharp } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { IoStopwatch } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";



const FlightDetailCard = () => {
  return (
    <div className="parent lg:mb-12 mb-4 p-6 border-2 border-gray-400 rounded-xl">
        
        <div className="head flex justify-between ">
            <h1 className="text-xl lg:text-2xl font-semibold">Return Web, Dec 8</h1> 
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-500">2h 28m</h1> 
        </div>

        <div className="c1 mt-6 flex-col lg:flex-row flex justify-between items-center">
            <div className="flight-logo flex gap-8 border-2 border-gray-400 p-4 rounded-xl max-w-max">
                 <img src={emirates} alt    ="" className="h-14" />
                 <div>
                    <h1 className="text-xl font-semibold ">Emirates</h1>
                    <p className="text-sm font-semibold text-gray-500">Airbus A320</p>
                 </div>
            </div>
            <div className="icons flex lg:gap-8 gap-4 mt-4 lg:mt-0 text-2xl">
               <IoAirplaneSharp/>
               <span className="border-2 border-l-0 border-gray-400 h-6"></span>
               <IoWifi/>
               <span className="border-2 border-l-0 border-gray-400 h-6"></span>
               <IoStopwatch/>
               <span className="border-2 border-l-0 border-gray-400 h-6"></span>
               <IoFastFood/>
               <span className="border-2 border-l-0 border-gray-400 h-6"></span>
               <MdAirlineSeatReclineNormal/>
            </div>
        </div>

        <div className="c2 mt-8 lg:flex-row flex-col flex items-center lg:justify-between w-4/5 mx-auto" >

        <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">12:00 pm</h1>
            <p className="text-sm text-gray-500 font-semibold">Newark(EWR)</p>
        </div>

        <div className="flex items-center">
            <span className="w-10 border-2 border-black"></span>
            <span className="text-6xl"><IoAirplaneSharp/></span>
            <span className="w-10 border-2 border-black"></span>
            
        </div>
        <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">12:00 pm</h1>
            <p className="text-sm text-gray-500 font-semibold">Newark(EWR)</p>
        </div>


        </div>
      
    </div>
  )
}

export default FlightDetailCard
