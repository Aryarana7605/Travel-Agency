import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png"
import { FaFacebook } from "react-icons/fa";
import googleIcon from "../../icons/gogole G icon.png"
import { FaApple } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';
// import "./register.css"

const Login = () => {
  const navigate = useNavigate()

const [email , setEmail] = useState("Johndoe@gmail.com")
const [password , setPassword] = useState("")


const emailHandler = text =>{
  setEmail(text.target.value)
}

const passwordHandler = event=>{
  setPassword(event.target.value)
}

  return (
    <div className='login-form bg-white lg:p-20  lg:px-36 flex justify-between max-w-max' style={{height:"100vh"}}>

      <div className="login-section w-full lg:w-2/5 flex-col p-4 lg:p-12 lg:leading-10 my-auto">
      <img src={logoImg} className='h-10 mx-auto lg:mx-0' alt="logo" />
      <h1 className='text-4xl font-semibold lg:mt-16'>Login</h1>
      <p className='mb-6'>Login to access your golobe account.</p>

      <div className="login-fields flex items-center" >
      <Box
      className='w-full'
      style={{display:"flex", flexDirection:"column"}}
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

      <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          onChange={passwordHandler}
          value={password}
          // defaultValue="password"
          style={{width:"100%"}}
        />

         <div className="login-pass-help flex justify-between mb-6">
          <label><input type="checkbox"/> <span className='ml-2'>Remember me</span></label>
          <p className='text-red-500 cursor-pointer' onClick={()=>navigate("/forgot-password")} >Forgot Password</p>
         </div>

         <button className='login-btn text-center py-2 rounded font-semibold text-lg' style={{background:"rgb(141, 211, 187)"}}>Login</button>

         <div className="new-reg-login flex justify-center mb-4">
          <p>Don't have an account?</p>
          <button className='text-red-500 ml-2' onClick={()=>navigate("/signup")}>Sign up</button>
         </div>
         
         <div className="login-devider-hr flex justify-between items-center">
          <span className='border w-32 lg:w-40 h-0'></span>
          <p className='p-0 m-0'>Or login with</p>
          <span className='border w-32 lg:w-40 h-0'></span>
         </div>

         <div className="alt-login-icons flex justify-between mt-6  ">
          <span className='rounded p-2 px-14 text-blue-600 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaFacebook/></span>
          <span className='rounded p-2 px-10 lg:px-14' style={{border:"1px solid rgb(141,211,187"}}><img className='h-6' src={googleIcon} alt="" /></span>
          <span className='rounded p-2 px-14 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaApple/></span>
         </div>

      </Box>
      </div>

      </div>

      <div className="login-swiper-sec w-3/6 px-10 py-0 hidden lg:block">
        <LogSwiper/>
      </div>
    </div>
  )
}

export default Login
