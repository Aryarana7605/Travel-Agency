import React from 'react'
import '../components/lpStyle.css'
import Mailbox from '../assets/mailbox.png'


const LpSubscribe = () => {
  return (
    <div className="subscribe-section-p">
    <div className='subscribe-section'>

    <div className="subscribe-content">
        <h2>Subscribe</h2>
        <h2>Newsletter</h2>
        <h4>The Travel</h4>
        <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
        <form>
            <input className='sub-input' type="text" /> <button className='sub-btn'>Subscribe</button>
        </form>
    </div>
      
    <div className="mailbox">
        <img src={Mailbox} alt="mailbox"/>
    </div>

    </div>
    </div>
  )
}

export default LpSubscribe


