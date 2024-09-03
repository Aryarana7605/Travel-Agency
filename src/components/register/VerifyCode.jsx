import React, { useState } from 'react'
import "../../index.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png"
import { FaAngleLeft } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';
// import "./register.css"

const VerifyCode = () => {
  const navigate = useNavigate()

const [code , setCode] = useState("7789BM6X")

const codeHandler = text =>{
  setCode(text.target.value)
}

  return (
    <div className='forgot-pass bg-white p-4 lg:p-20 lg:px-36 w-full flex justify-between' style={{height:"100vh"}}>

      <div className="forgot-pass-section mx-auto max-w-max lg:w-2/5 flex-col lg:p-12 ">
      <img src={logoImg} className='h-10 mb-16 mx-auto' alt="logo" />
      <p className='flex items-center cursor-pointer mb-4' onClick={()=>navigate("/login")}><span className='text-2xl'><FaAngleLeft/></span> Back to login</p>
      <h1 className='text-4xl font-semibold mb-4' >Verify code</h1>
      <p className='mb-10'>An authentication code has been sent to your email.</p>  

      <div className="verify-code-fields flex " >
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
          label="Enter Code"
          type="text"
          value={code}
          onChange={codeHandler}
          style={{width:"100%"}}
          />
<div className="verify-code flex w-full">
           <span>Din't receive a code?</span>
          <p className='text-red-500 cursor-pointer ml-2'>Resend</p>
         </div>

         <button className='forgot-pass-btn w-full text-center py-2 rounded font-semibold text-lg mt-6' style={{background:"rgb(141, 211, 187)"}}>Verify</button>

      </Box>
      </div>
      </div>

      <div className="login-swiper-sec hidden lg:block lg:w-3/6">
        <LogSwiper/>
      </div>
    </div>
  )
}

export default VerifyCode