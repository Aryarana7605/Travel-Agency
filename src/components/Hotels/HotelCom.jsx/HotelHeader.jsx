import HotelHeaderImg from "../HotelCom.jsx/HotelsImg/HotelHeader.png"

const HotelHeader = () => {
  return (

        <div className="h-[60vh]" >
          <div className="  w-full h-[57vh] relative">
            <img className="z-0 absolute" src={HotelHeaderImg} alt="" style={{height:"100%", width:"100%", objectFit:"cover"}}/>
            <h1 className="relative z-10 top-24 left-14 lg:top-16 lg:left-20 text-3xl lg:text-4xl text-white w-4/5 lg:w-3/12 font-semibold">Make your travel wishlist, we'll do the rest</h1>
            <p className="relative z-10 top-24 left-14 lg:top-16 lg:left-20 text-base lg:text-lg mt-2 text-white max-w-max" >Special offers to suit your plan</p>
          </div>
    </div>      
    
  )
}

export default HotelHeader
