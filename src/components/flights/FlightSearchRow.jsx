import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FlightSearchRow = () => {

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
      
      const [pick , setPick] = useState('Return')

      const pickHandler = (event)=>{
        setPick(event.target.value) 
      }
  return (
    <div className="f-searcg-row lg:mx-auto lg:flex items-start justify-between">
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

<div className='bg-[#8dd3bb] text-3xl p-4 rounded-xl'>
<FaSearch/>
</div>
  
    </div>
  )
}

export default FlightSearchRow
