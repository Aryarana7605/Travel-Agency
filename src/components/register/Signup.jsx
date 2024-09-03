import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png"
import { FaFacebook } from "react-icons/fa";
import googleIcon from "../../icons/gogole G icon.png"
import { FaApple } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className='signup-form bg-white lg:p-20 lg:flex justify-between max-w-max' style={{height:"100vh"}}>

<div className="signup-swiper-sec hidden lg:block w-2/6 ">
        <LogSwiper/>
      </div>

      <div className="signup-section p-4 lg:w-1/2 lg:pr-10 lg:flex-col lg:leading-10">
      <img src={logoImg} className='h-10 lg:h-10 mx-auto' alt="logo" />
      <h1 className='text-4xl font-semibold mt-16'>Sign up</h1>
      <p className='mb-6'>Let’s get you all st up so you can access your personal account.</p>

      <div className="signup-fields flex items-center" >
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

        {/* /////////////// */}
       
     <div className="registeration-fields flex-col">
        <div className="name flex">
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue="Johndoe@gmail.com"
          style={{width:"90%"}}
          />
           <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue="Johndoe@gmail.com"
          style={{width:"90%"}}
          />
        </div>
        <div className="contact flex">
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Johndoe@gmail.com"
          style={{width:"90%"}}
          />
           <TextField
          required
          id="outlined-required"
          label="Phone Number"
          defaultValue="Johndoe@gmail.com"
          style={{width:"90%"}}
          />
        </div>
     </div>

{/* ///////////////////// */}

      <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          defaultValue="Johndoe@gmail.com"
          style={{width:"98%"}}
          />

      <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          type="password"
          defaultValue="Johndoe@gmail.com"
          style={{width:"98%"}}
        />

         <div className="signup-terms mb-6">
          <label><input className='border-2 font-semibold' type="checkbox"/> <span className='ml-2'>I agree to all the <span className='text-red-500'>Terms</span> and <span className='text-red-500'>Privacy Policies</span> </span></label>
         </div>

         <button className='signup-btn text-center py-2 rounded font-semibold text-lg' style={{background:"rgb(141, 211, 187)"}}>Create Account</button>

         <div className="new-reg-signup flex justify-center mb-4">
          <p>Already have an account?</p>
          <button className='text-red-500 ml-2' onClick={()=>navigate("/login")} >Sign in</button>
         </div>
         
         <div className="login-devider-hr flex justify-between items-center">
          <span className='border w-32 lg:w-52 h-0'></span>
          <p className='p-0 m-0'>Or signup with</p>
          <span className='border w-32 lg:w-52 h-0'></span>
         </div>

         <div className="alt-signup-icons flex justify-between mt-6  ">
          <span className='rounded p-2 px-14 text-blue-600 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaFacebook/></span>
          <span className='rounded p-2 px-10 lg:px-14' style={{border:"1px solid rgb(141,211,187"}}><img className='h-6' src={googleIcon} alt="" /></span>
          <span className='rounded p-2 px-14 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaApple/></span>
         </div>

      </Box>
      </div>

      </div>

    </div>
  )
}

export default Signup
