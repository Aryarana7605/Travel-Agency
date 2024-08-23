import React from 'react';
import golobeLogo from '../assets/golobeLogo.png';
import "../components/lpStyle.css";
import airplane from '../icons/white airplane.png'
import bed from '../icons/white bed.png'  

const Lpheader = () => {
  return (
    <div className='lp-header'>

      <nav className='lp-nav '>
        <ul className='lp-booking-nav-ul-1'>
          <li><img src={airplane} alt="airplane" className='airplane'/><a href=".">Find Flight</a></li>
          <li><img src={bed} alt="bed" className='bed'/><a href=".">Find Stays</a></li>
        </ul>
        <img className='logo' src={golobeLogo} alt="logo"/>
        <ul className='lp-booking-nav-ul-2'>
          <li><a href="." className='header-login-btn'>Login</a></li>
          <li className='header-signup-btn'><a href="." >Sign up</a></li>
        </ul>
      </nav>
       
       <div className="lp-header-content">
        <h1 className='ho'>Helping Others</h1>
        <h1 className='lt'>LIVE & TRAVEL</h1>
        <p>Special offers to suit your plan</p>
       </div>
       
    </div>
  )
}

export default Lpheader
