import React, { useState } from 'react'
import "../../index.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png"
import { FaFacebook } from "react-icons/fa";
import googleIcon from "../../icons/gogole G icon.png"
import { FaApple } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';
// import "./register.css"

const ForgotPass = () => {
  const navigate = useNavigate()

const [email , setEmail] = useState("Johndoe@gmail.com")

const emailHandler = text =>{
  setEmail(text.target.value)
}

  return (
    <div className='forgot-pass bg-white p-4 lg:p-20 lg:flex justify-between' style={{height:"100vh"}}>

      <div className="forgot-pass-section max-w-max lg:w-2/5 flex-col lg:pl-12 ">
      <img src={logoImg} className='mx-auto h-10 mb-16' alt="logo" />
      <p className='flex items-center cursor-pointer mb-4' onClick={()=>navigate('/login')} ><span className='text-2xl'><FaAngleLeft/></span> Back to login</p>
      <h1 className='text-4xl font-semibold mb-4'>Forgot your password?</h1>
      <p className='mb-10'>Don't worry, happens to all of us. Enter your email below to recover your password.</p>

      <div className="login-fields flex " >
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
          label="Email"
          type="email"
          value={email}
          onChange={emailHandler}
          // defaultValue="Johndoe@gmail.com"
          style={{width:"100%"}}
          />

         <button className='forgot-pass-btn w-full text-center py-2 rounded font-semibold text-lg mt-6' onClick={()=>navigate("/verify-code")} style={{background:"rgb(141, 211, 187)"}}>Submit</button>
         
         <div className="login-devider-hr flex justify-between items-center mt-4">
          <span className='border w-32 lg:w-52 h-0'></span>
          <p className='p-0 m-0'>Or login with</p>
          <span className='border w-32 lg:w-52 h-0'></span>
         </div>

         <div className="alt-login-icons flex justify-between mt-6  ">
          <span className='rounded p-2 px-14 text-blue-600 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaFacebook/></span>
          <span className='rounded p-2 px-10 lg:px-14' style={{border:"1px solid rgb(141,211,187"}}><img className='h-6' src={googleIcon} alt="" /></span>
          <span className='rounded p-2 px-14 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaApple/></span>
         </div>


      </Box>
      </div>

      </div>

      <div className="login-swiper-sec hidden lg:block lg:w-3/6 px-12">
        <LogSwiper/>
      </div>
    </div>
  )
}

export default ForgotPass

