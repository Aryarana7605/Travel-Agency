import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaSpa } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { FaWineGlassAlt } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";

const Amenities = () => {
  return (
    <div className="lg:w-[45%] w-full">
        <h1 className="text-2xl font-semibold">Amenities</h1>
        <div className="flex justify-between items-start leading-8">
      <ul className="font-semibold">
        <li className="flex items-center gap-2"><LiaSwimmingPoolSolid/> Outdoor pool </li>
        <li className="flex items-center gap-2"><LiaSwimmingPoolSolid/> Indoor pool </li>
        <li className="flex items-center gap-2"> <FaSpa/> Spa and wellness center </li>
        <li className="flex items-center gap-2"> <MdOutlineRestaurant/> Restaurant</li>
        <li className="flex items-center gap-2"> <MdRoomService/> Room service</li>
      </ul>
      <ul className="font-semibold">
        <li className="flex items-center gap-2"> <IoIosFitness/> Fitness center</li>
        <li className="flex items-center gap-2"> <FaWineGlassAlt/> Bar/Lounge</li>
        <li className="flex items-center gap-2"> <IoWifi/> Free Wi-Fi</li>
        <li className="flex items-center gap-2"> <FaCoffee/> Tea/coffee machine</li>
        <li className="text-[#ff8682]">+24 more</li>
      </ul>
      </div>
    </div>
  )
}

export default Amenities
