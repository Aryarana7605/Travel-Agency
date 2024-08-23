import React from "react";
import "../components/lpStyle.css"
import paperPlane from "../icons/paperPlane.png"
import "../index.css"



const LpMainOfferings = () =>{
return (
    <div className="main-offerings">

    <div className="flight-offering">
<div className="offering-con">
    <h2 className="text-4xl font-bold">Flights</h2>
    <p>Search Flights & Places Hire to our most popular destinations</p>
    <button className="common-btn"> <img src={paperPlane} alt="paper plane"/> Show Flights</button>
</div>
    </div>

    <div className="hotel-offering">
<div className="offering-con">
    <h2 className="text-4xl font-bold">Hotels</h2>
    <p>Search Flights & Places Hire to our most popular destinations</p>
    <button className="common-btn"> <img src={paperPlane} alt="paper plane"/> Show Hotels</button>
</div>
    </div>

    </div>
)
}

export default LpMainOfferings;