import React from 'react'
import '../components/lpStyle.css'
// import IstanbulImg from "../assets/places/Rectangle 3.png"
// import SydneyImg from "../assets/places/Rectangle 3-1.png"
// import BakuImg from "../assets/places/Rectangle 3-2.png"
// import MaleImg from "../assets/places/Rectangle 3-3.png"
// import ParisImg from "../assets/places/Rectangle 3-4.png"
// import NewYorkImg from "../assets/places/Rectangle 4.png"
// import LondonImg from "../assets/places/Rectangle 4-1.png"
// import TokyoImg from "../assets/places/Rectangle 4-2.png"
// import DubaiImg from "../assets/places/Rectangle 4-3.png"
import HOTELS from '../Details'



const Lpplaces = () => {
  return (
    <div className='places-section mb'>
           <div className="places-nav mb">
            <div className="places-nav-con">
                <h2>Plan your perfect trip</h2>
                <p>Search flights and places hire to our most popular destinations.</p>
            </div>
            <button className='places-nav-btn'>See more places</button>
           </div>
<div className="places-card-row-p"> 

    <div className="places-card-row mb">
        {HOTELS.map((hotel)=>(
            
        <div className="place-card">
            <img src={hotel.img} alt="." />
            <div className="place-con">
                <p>{hotel.name}</p>
                <ul className="place-features">
                  <li>{hotel.features[0]}</li>
                  <span className="dot"></span>
                  <li>{hotel.features[1]}</li>
                  <span className="dot"></span>
                  <li>{hotel.features[2]}</li>
                </ul>
            </div>
        </div>
        ))}
    </div>
 </div>
    </div>
  )
}

export default Lpplaces