import React from 'react'
import '../components/lpStyle.css'
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
            <img src={hotel.image} alt={hotel.name} />
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