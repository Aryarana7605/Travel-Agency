import React from 'react'
import '../components/lpStyle.css'
import Mailbox from '../assets/mailbox.png'


const LpSubscribe = () => {
  return (
    <div className="subscribe-section-p">
    <div className='subscribe-section'>

    <div className="subscribe-content">
        <h2 className='text-5xl font-semibold'>Subscribe</h2>
        <h2 className='text-5xl font-semibold'>Newsletter</h2>
        <h4 className='font-semibold text-2xl'>The Travel</h4>
        <p className='font-semibold'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
        <form className='mb-8'>
            <input className='sub-input pl-4' type="text" placeholder='Your email address'/> <button className='sub-btn font-semibold'>Subscribe</button>
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


