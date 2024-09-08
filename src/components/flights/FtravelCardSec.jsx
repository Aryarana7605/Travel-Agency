import React from 'react'
import "./flights.css"

const FtravelCardSec = () => {
  return (
    <div className='f-travel-card-sec w-full lg:w-4/5 mx-auto mt-4 p-4 h-auto lg:h-[70vh]'>
  
  <div className="f-travel-card-sec-nav lg:mb-8 lg:flex justify-between items-center p-4 lg:p-0">
    <div className="f-travel-card-sec-nav-con leading-8 lg:leading-10">
      <h2 className='text-2xl lg:text-4xl font-bold'>Fall into travel</h2>
      <p className='text-sm lg:text-base w-full lg:w-4/5 mt-2'>
        Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
      </p>
    </div>
    <button className='f-travel-card-sec-nav-btn mt-4 lg:mt-0 text-sm lg:text-base px-4 py-2 bg-transparent border-2 border-[#8dd3bb] rounded'>
      See All
    </button>
  </div>

  <div className="f-travel-cards-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-3/4">
    
    <div className="f-travel-card t-card-1 rounded-xl flex p-4 items-end justify-center bg-cover bg-center w-full border-2 h-64 lg:h-auto" >
      <div className="travel-card-con w-full">
        <div className="travel-card-head text-white flex justify-between items-end">
          <div className="description">
            <h2 className='text-xl lg:text-3xl font-semibold'>Melbourne</h2>
            <p className='text-sm lg:text-base font-semibold'>An amazing journey</p>
          </div>
          <div className="price">
            <h2 className='font-semibold text-xl lg:text-3xl'>$700</h2>
          </div>
        </div>
        <button className='w-full p-2 rounded mt-2 border-none bg-[#8dd3bb] text-sm lg:text-base'>
          Book Flight
        </button>
      </div>
    </div>

    <div className="f-travel-card t-card-2 rounded-xl flex p-4 items-end justify-center bg-cover bg-center w-full border-2 h-64 lg:h-auto" >
      <div className="travel-card-con w-full">
        <div className="travel-card-head text-white flex justify-between items-end">
          <div className="description">
            <h2 className='text-xl lg:text-3xl font-semibold'>Melbourne</h2>
            <p className='text-sm lg:text-base font-semibold'>An amazing journey</p>
          </div>
          <div className="price">
            <h2 className='font-semibold text-xl lg:text-3xl'>$700</h2>
          </div>
        </div>
        <button className='w-full p-2 rounded mt-2 border-none bg-[#8dd3bb] text-sm lg:text-base'>
          Book Flight
        </button>
      </div>
    </div>

    <div className="f-travel-card t-card-3 rounded-xl flex p-4 items-end justify-center bg-cover bg-center w-full border-2 h-64 lg:h-auto" >
      <div className="travel-card-con w-full">
        <div className="travel-card-head text-white flex justify-between items-end">
          <div className="description">
            <h2 className='text-xl lg:text-3xl font-semibold'>Melbourne</h2>
            <p className='text-sm lg:text-base font-semibold'>An amazing journey</p>
          </div>
          <div className="price">
            <h2 className='font-semibold text-xl lg:text-3xl'>$700</h2>
          </div>
        </div>
        <button className='w-full p-2 rounded mt-2 border-none bg-[#8dd3bb] text-sm lg:text-base'>
          Book Flight
        </button>
      </div>
    </div>

    <div className="f-travel-card t-card-4 rounded-xl flex p-4 items-end justify-center bg-cover bg-center w-full border-2 h-64 lg:h-auto" >
      <div className="travel-card-con w-full">
        <div className="travel-card-head text-white flex justify-between items-end">
          <div className="description">
            <h2 className='text-xl lg:text-3xl font-semibold'>Melbourne</h2>
            <p className='text-sm lg:text-base font-semibold'>An amazing journey</p>
          </div>
          <div className="price">
            <h2 className='font-semibold text-xl lg:text-3xl'>$700</h2>
          </div>
        </div>
        <button className='w-full p-2 rounded mt-2 border-none bg-[#8dd3bb] text-sm lg:text-base'>
          Book Flight
        </button>
      </div>
    </div>
    
  </div>
</div>

  )
}

export default FtravelCardSec
