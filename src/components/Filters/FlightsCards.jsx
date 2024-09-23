import { useNavigate } from "react-router-dom";
import FlightsCardDetails from "./FligtsCardDetail";
import { CiHeart } from "react-icons/ci";

const FlightsCard = () => {

  const navigate = useNavigate()

  return (
    <div className='flights-card w-full'>
      

      {FlightsCardDetails.map((fd)=>(
      <div className="card-con p-6 max-h-max flex-col flex lg:flex-row  justify-between mt-4 rounded-lg" style={{boxShadow:"0px 0px 5px gray"}}>
        
      

        <div className="card-img">
            <img src={fd.img} alt="" />
        </div>

        <div className="card-content mt-6">
          <div className="review">
            <p className="font-semibold"><span className="p-2 border-2 border-[#8dd3bb] rounded-lg mr-4">4.2</span> <span>Very Good</span> <span>54 reviews</span></p>
          </div>

          <div className="Flights-schedule flex justify-between mt-6">
            <div className="time">
              <div className="font-semibold" ><input type="checkbox" /> {fd.time}</div>
              <p className="text-gray-300">{fd.flightName}</p>
            </div>
            <div className="schedule">
              <h4 className='lg:mx-6 font-semibold text-gray-300'>{fd.schedule}</h4>
            </div>
            <div className="duration">
            <h4 className=" font-semibold text-gray-600">{fd.duration}</h4>
            <h4 className=" font-semibold text-gray-300">{fd.ewr}</h4>
            </div>
          </div>
         
          <div className="Flights-schedule flex justify-between mt-6">
            <div className="time">
              <div className="font-semibold" ><input type="checkbox" /> {fd.time}</div>
              <p className="text-gray-300">{fd.flightName}</p>
            </div>
            <div className="schedule">
              <h4 className='lg:mx-6 font-semibold text-gray-300'>{fd.schedule}</h4>
            </div>
            <div className="duration">
            <h4 className=" font-semibold text-gray-600">{fd.duration}</h4>
            <h4 className=" font-semibold text-gray-300">{fd.ewr}</h4>
            </div>
          </div>

          <div className="divider"></div>
          <div className="flex items-center">
            <div className="text-xl p-2 border-2 border-[#8dd3bb] rounded-lg mr-4 mt-2 cursor-pointer ">
            <CiHeart/>
            </div>
      <button className="w-full bg-[#8dd3bb] rounded-lg py-2 mt-2" onClick={()=>navigate("/flight-path")}>View Deals</button>
      </div>
         </div>
        
        <div className="price mt-4 lg:mt-0">  
          <p >Starting From</p>
          <h2 className="text-[#ff8683] text-2xl font-semibold">{fd.price}</h2>
          </div> 
      </div>
    ))}

    <button className="p-2 bg-black w-full text-center text-white mt-4 lg:mb-0 mb-4 rounded-lg">Show more results</button>
        
    </div>
  );
};

export default FlightsCard;