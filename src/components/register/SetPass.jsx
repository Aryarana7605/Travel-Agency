import React, { useState } from 'react'
import "../../index.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png"
import { FaAngleLeft } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';

const SetPass = () => {

const [code , setCode] = useState("7789BM6X")

const codeHandler = text =>{
  setCode(text.target.value)
}

const navigate = useNavigate()
  return (
    <div className='forgot-pass bg-white p-4 lg:p-20 lg:px-36 lg:flex justify-between' style={{height:"100vh", padding:"5rem"}}>

      <div className="forgot-pass-section max-w-max lg:w-3/6 flex-col lg:p-14">
      <img src={logoImg} className='h-10 lg:h-10 mb-16' alt="logo" />
      <p className='flex items-center cursor-pointer mb-4' onClick={()=>navigate("/")} ><span className='text-2xl'><FaAngleLeft/></span> Back to home</p>
      <h1 className='text-4xl font-semibold mb-4'>Set Password</h1>
      <p className='mb-10'>An authentication code has been sent to your email.</p>

      <div className="verify-code-fields lg:flex " >
      <Box
      className='w-full'
      style={{display:"flex", flexDirection:"column", alignItems:"center"}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          value={code}
          onChange={codeHandler}
          style={{width:"100%"}}
          />
      <TextField
          required
          id="outlined-required"
          label="Confirmed - Password"
          type="password"
          value={code}
          onChange={codeHandler}
          style={{width:"100%"}}
          />


         <button className='forgot-pass-btn w-full text-center py-2 rounded font-semibold text-lg mt-6' style={{background:"rgb(141, 211, 187)"}}>Set Password</button>

      </Box>
      </div>
      </div>

      <div className="login-swiper-sec hidden lg:block w-2/5">
        <LogSwiper/>
      </div>
    </div>
  )
}

export default SetPass

