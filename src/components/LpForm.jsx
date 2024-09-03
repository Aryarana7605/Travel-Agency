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
<div className="lp-flight-details w-full lg:w-4/5 m-auto shadow p-8 rounded-2xl bg-white lg:absolute bottom-40 left-48" >

     <div className="lpform-tabs flex mb-8">
         <i className='flex items-center'><IoAirplane /><a className='flight-tag font-bold ml-2 font-sans' href=".">Flights</a></i>
         <span className='bar border-2 border-black ml-8'></span>
         <i className='flex items-center ml-8'><IoBed /><a className='font-bold ml-2 font-sans' href=".">Stays</a></i>
     </div>

    <Box component="form" className='mb-8'>
      <div className='lg:flex justify-evenly'>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Lahore - Karachi"
          style={{width:"20%"}}
          />
          <TextField
          select
          label="Trip"
          value={pick}
          defaultValue="Return"
          onChange={pickHandler}
          style={{width:"10%"}}
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
          defaultValue="07 Nov 22 - 13 Nov 22" style={{width:"20%"}}/>
        <TextField
          required
          id="outlined-required"
          label="Passenger - Class"
          defaultValue="1 Passenger, Economy" style={{width:"20%"}}/>
      </div>
    </Box>
    <div className="promo-code flex justify-end items-center">
  <a href="." className='promo-code-type mr-8 flex items-center'> <span className='mr-2'><FaPlus/></span> Add Promo Code</a>
  <a className='common-btn' href="."><span className='flex items-center mr-2'><FaPaperPlane /></span> Show Flights</a>
    </div>
    </div>
  );
}
