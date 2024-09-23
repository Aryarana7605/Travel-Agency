import React from 'react'
import './lpStyle.css'
import Mailbox from '../../assets/mailbox.png'


const LpSubscribe = () => {
  return (
    <div className="subscribe-section-p lg:relative w-full mb-4">
    <div className='subscribe-section w-full lg:w-4/5 lg:mt-20 lg:pb-0 lg:mx-auto p-4 lg:pt-4 px-6 rounded-3xl flex justify-between bg-[#cdeae1] relative lg:absolute lg:top-[-1rem] lg:left-40'>

    <div className="subscribe-content">
        <h2 className=' text-3xl lg:text-5xl font-semibold'>Subscribe</h2>
        <h2 className=' text-3xl lg:text-5xl font-semibold'>Newsletter</h2>
        <h4 className='font-semibold text-xl lg:text-2xl text-black lg:mt-4'>The Travel</h4>
        <p className='font-semibold text-[#374a3b]'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
        <form className=''>
            <input className='sub-input mt-6 p-2 lg:py-4 px-1 w-64 lg:w-96 pl-4 border-none rounded-md text-base ' type="text" placeholder='Your email address'/> 
            <button className='sub-btn font-semibold p-2 lg:p-4 text-white bg-[#112211] ml-2 rounded-lg border-none'>Subscribe</button>
        </form>
    </div>
      
    <div className="mailbox hidden lg:block ">
        <img src={Mailbox} alt="mailbox"/>
    </div>

    </div>
    </div>
  )
}

export default LpSubscribe


