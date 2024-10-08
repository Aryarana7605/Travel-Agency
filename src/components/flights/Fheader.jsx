
import "./flights.css"
import bgImg from "../../assets/flights/airplanebg.png"
import LoginNav from "../Hotels/HotelCom.jsx/LoginNav"

const Fheader = () => {
  return (
    <div className="fheader h-[65vh]" >
          <div className="bg-white ">
            <LoginNav/>
          </div>
          <div className="  w-full h-[57vh] relative">
            <img className="z-0 absolute" src={bgImg} alt="" style={{height:"100%", width:"100%", objectFit:"cover"}}/>
            <h1 className="relative z-10 top-24 left-14 lg:top-16 lg:left-20 text-3xl lg:text-4xl text-white w-4/5 lg:w-3/12 font-semibold">Make your travel wishlist, we'll do the rest</h1>
            <p className="relative z-10 top-24 left-14 lg:top-16 lg:left-20 text-base lg:text-lg mt-2 text-white" >Special offers to suit your plan</p>
          </div>
    </div>
  )
}

export default Fheader
