import React from 'react'
import airplane from '../icons/airplane.png'
import bed from '../icons/bed.png'
import sideArrows from '../icons/sideArrows.png'
import addSign from '../icons/addSign.png'
import paperPlane from '../icons/paperPlane.png'
import "../components/lpStyle.css";

const Lpselection = () => {
  return (
    <div className='selection-panel'>
      
      <div className="flight-stay-tabs mb">
        <div className="flights">
          <div className="plane"><img src={airplane} alt="airplane icon"/></div>
          <a href=".">Flights</a>
        </div>
        <span className="bar"></span>
        <div className="stays">
        <div className="bed"><img src={bed} alt="bed icon"/></div>
          <a href=".">Stays</a>
        </div>
      </div>
        
      <div className="flights-details mb">

        <div className="destination">
          <div className="flight-label">From - To</div>
        <div className="flight-destination-input">
      <input type="text" placeholder="Delhi - Chennai" />
      <div className="side-arrows"><img src={sideArrows} alt="side arrows" /></div>
        </div>
        </div>


      <div className="flight-ways">
      <div className="flight-label">Trip</div>
        <select name="flight-ways-select" >
          <option value="return">Return</option>
          <option value="One-way">One-way</option>
        </select>
      </div>

      <div className="depart-return-date">
      <div className="flight-label">Depart - Return</div>
         <input type="date" />
      </div>

     <div className="passenger-class">
     <div className="flight-label">Passenger - Class</div>
      <input type="text" placeholder='1 Passenger - Economy' />
     </div>

      </div>

<div className="promo-code mb">
  <a href="." className='promo-code-type'><img src={addSign} alt="addSign" /> Add Promo Code</a>
  <a className='common-btn' href="."><img src={paperPlane} alt="paper plane icon"/> Show Flights</a>
</div>

    </div>
  )
}

export default Lpselection
