import React from "react";
import "./lpStyle.css"
import paperPlane from "../../icons/paperPlane.png"



const LpMainOfferings = () =>{
return (
    <div className="main-offerings mb-4 lg:w-4/5 lg:mx-auto lg:mt-12 lg:flex lg:h-[30rem] ">

    <div className="flight-offering mx-2 bg-no-repeat bg-center bg-cover lg:mr-4 rounded-2xl flex items-end ">
<div className="offering-con flex-col justify-center  items-center text-center text-white py-4 lg:px-20 px-20">
    <h2 className="text-4xl   font-bold">Flights</h2>
    <p className="mt-2 text-sm">Search Flights & Places Hire to our most popular destinations</p>
    <button className="common-btn flex items-center border-none text-sm bg-[#8dd3bb] text-black font-semibold rounded-md mx-auto mt-4  p-4"> <img src={paperPlane} alt="paper plane"/> Show Flights</button>
</div>
    </div>

    <div className="hotel-offering mt-4 lg:mt-0 mx-2 bg-no-repeat bg-center bg-cover lg:mr-4 rounded-2xl lg:flex items-end">
<div className="offering-con flex-col justify-center  items-center text-center text-white py-4 lg:px-20 px-20">
    <h2 className="text-4xl   font-bold">Hotels</h2>
    <p className="mt-2 text-sm">Search Flights & Places Hire to our most popular destinations</p>
    <button className="common-btn flex items-center border-none text-sm bg-[#8dd3bb] text-black font-semibold rounded-md mx-auto  mt-4 p-4"> <img src={paperPlane} alt="paper plane"/> Show Hotels</button>
</div>
    </div>

    </div>
)
}

export default LpMainOfferings;