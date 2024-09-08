import React from 'react'
import HOTELS from '../Details'



const Lpplaces = () => {
  return (
    <div className='places-section mb-8 lg:w-4/5 mx-auto lg:mt-48'>
           <div className="places-nav lg:mb-8 lg:flex justify-between items-center p-4">
            <div className="places-nav-con leading-10">
                <h2 className='text-4xl'>Plan your perfect trip</h2>
                <p className='text-xl'>Search flights and places hire to our most popular destinations.</p>
            </div>
            <button className='places-nav-btn mt-2 lg:mt-0 text-base p-4 bg-transparent border-2 border-[#8dd3bb] rounded'>See more places</button>
           </div>
<div className="places-card-row-p"> 

    <div className="places-card-row lg:grid md:grid  lg:grid-flow-row md:grid-flow-row lg:grid-cols-3 md:grid-cols-2 lg:gap-6">
        {HOTELS.map((hotel)=>(
            
        <div className="place-card mx-auto flex items-center p-4 m-2 rounded-lg shadow-2xl border max-w-max">
            <img src={hotel.image} alt={hotel.name} />
            <div className="place-con ml-8">
                <p className='text-[#797575] font-semibold text-xl'>{hotel.name}</p>
                <ul className="place-features flex items-center mt-2">
                  <li className='list-none mr-2 lg:mr-6'>{hotel.features[0]}</li>
                  <span className="dot h-1 border-2 border-black rounded-full mr-2 lg:mr-6"></span>
                  <li className='list-none mr-2 lg:mr-6'>{hotel.features[1]}</li>
                  <span className="dot h-1 border-2 border-black rounded-full mr-2 lg:mr-6"></span>
                  <li className='list-none mr-2 lg:mr-6'>{hotel.features[2]}</li>
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