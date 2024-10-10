import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FaPlus } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HotelsSearchForm = () => {
  const [pickRoom , setPickRoom] = useState('1 room, 2 guests')

const options = [
  {
      value : "1 room, 2 guests", 
      id : 1
  },
  {
      value : "2 room, 4 guests",
      id : 2
  }
]

const pickHandler = (event)=>{
  setPickRoom(event.target.value) 
}

const navigate = useNavigate()
  return (
   
<div className="lp-flight-details mb-4 w-full lg:w-4/5 m-auto shadow p-4 lg:p-4 rounded-2xl bg-white lg:absolute lg:bottom-24 lg:left-40">

<h1 className='text-2xl font-semibold lg:ml-12 mb-4'>Where are you flying?</h1>

  <Box component="form" className='mb-8 w-full h-full'>
    <div className='flex flex-col lg:flex-row lg:justify-evenly w-full h-full space-y-4 lg:space-y-0'>
      <TextField
        required
        id="outlined-required"
        label="Enter Destination"
        defaultValue="Istanbul, Turkey"
        className="w-full lg:w-1/5"
      />
      
      <TextField
        required
        id="outlined-required"
        label="Check In"
        defaultValue="Fri 12/2"
        className="w-full lg:w-1/5"
      />
      <TextField
        required
        id="outlined-required"
        label="Check Out"
        defaultValue="Sun 12/4"
        className="w-full lg:w-1/5"
      />
      <TextField
        select
        label="Rooms & Guests"
        value={pickRoom}
        defaultValue="1 room, 2 guests"
        onChange={pickHandler}
        className="w-full lg:w-1/5"
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </div>
  </Box>

  <div className="promo-code flex flex-col lg:flex-row justify-center lg:justify-end items-center space-y-4 lg:space-y-0">
    <button  className='promo-code-type flex items-center mr-4'>
      <span className='mr-2'><FaPlus/></span> Add Promo Code
    </button>
    <button onClick={()=>navigate("/hotels-listing")} className='common-btn flex items-center p-2 border-none bg-[#8dd3bb] text-black font-semibold rounded-md text-base' >
      <span className='flex items-center mr-2'><FaPaperPlane /></span> Show Places
    </button>
  </div>
</div>

  )
}

export default HotelsSearchForm