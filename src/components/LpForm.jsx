import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IoAirplane } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import MenuItem from '@mui/material/MenuItem';
import { FaPlus } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";



export default function LpForm(){
    
const [pick , setPick] = useState('Return')

const options = [
  {
      value : "Return",
      id : 1
  },
  {
      value : "One-way",
      id : 2
  }
]

const pickHandler = (event)=>{
  setPick(event.target.value) 
}

      return (
<div className="lp-flight-details mb-4 w-full lg:w-4/5 m-auto shadow p-4 lg:p-8 rounded-2xl bg-white lg:absolute lg:bottom-40 lg:left-48">
  
  <div className="lpform-tabs flex mb-8 justify-around lg:justify-start">
    <i className='flex items-center p-2 bg-[#8dd3bb] rounded lg:bg-transparent text-xl'>
      <IoAirplane />
      <a className='flight-tag font-bold ml-2 font-sans' href=".">Flights</a>
    </i>
    <span className='hidden lg:inline-block bar border-2 border-gray-400 mx-4 lg:mx-8 rounded'></span>
    <i className='flex items-center p-2 bg-[#8dd3bb] rounded lg:bg-transparent text-xl'>
      <IoBed />
      <a className='font-bold ml-2 font-sans' href=".">Stays</a>
    </i>
  </div>

  <Box component="form" className='mb-8 w-full h-full'>
    <div className='flex flex-col lg:flex-row lg:justify-evenly w-full h-full space-y-4 lg:space-y-0'>
      <TextField
        required
        id="outlined-required"
        label="From - To"
        defaultValue="Lahore - Karachi"
        className="w-full lg:w-1/5"
      />
      <TextField
        select
        label="Trip"
        value={pick}
        defaultValue="Return"
        onChange={pickHandler}
        className="w-full lg:w-1/5"
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        id="outlined-required"
        label="Depart - Return"
        defaultValue="07 Nov 22 - 13 Nov 22"
        className="w-full lg:w-1/5"
      />
      <TextField
        required
        id="outlined-required"
        label="Passenger - Class"
        defaultValue="1 Passenger, Economy"
        className="w-full lg:w-1/5"
      />
    </div>
  </Box>

  <div className="promo-code flex flex-col lg:flex-row justify-center lg:justify-end items-center space-y-4 lg:space-y-0">
    <button  className='promo-code-type flex items-center mr-4'>
      <span className='mr-2'><FaPlus/></span> Add Promo Code
    </button>
    <a className='common-btn flex items-center p-4 border-none bg-[#8dd3bb] text-black font-semibold rounded-md' href=".">
      <span className='flex items-center mr-2'><FaPaperPlane /></span> Show Flights
    </a>
  </div>
</div>

  );
}
