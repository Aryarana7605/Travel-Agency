import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HotelsSearchStick = () => {
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
   
<div className="lp-flight-details mb-4 w-full lg:w-[90%] m-auto shadow p-4 lg:p-4 lg:pb-2 lg:pt-4 rounded-2xl bg-white lg:mt-8">

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

    <button onClick={()=>navigate("/hotels-listing")} className='p-2 px-4 border-none bg-[#8dd3bb] text-black font-semibold rounded-md text-2xl' >
      <IoIosSearch/>
    </button>
    
    </div>
  </Box>

  
</div>

  )
}

export default HotelsSearchStick