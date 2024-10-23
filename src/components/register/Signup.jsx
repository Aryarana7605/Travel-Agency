import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png";
import { FaFacebook } from "react-icons/fa";
import googleIcon from "../../icons/gogole G icon.png";
import { FaApple } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { useState } from 'react'; 

const Signup = () => {
  const navigate = useNavigate();
  
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();     
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      
      const response = await axios.post('https://your-api-endpoint.com/signup', formData);
      if (response.status === 200) {
        alert("Account created successfully!");
        navigate('/account');
      }
    } catch (error) {
      console.error("Signup error: ", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className='signup-form bg-white lg:p-20 lg:flex justify-between max-w-max' style={{height:"100vh"}}>

      <div className="signup-swiper-sec hidden lg:block w-2/6 ">
        <LogSwiper/>
      </div>

      <div className="signup-section p-4 lg:w-1/2 lg:pr-10 lg:flex-col lg:leading-10">
        <img src={logoImg} className='h-10 lg:h-10 mx-auto' alt="logo" />
        <h1 className='text-4xl font-semibold mt-16'>Sign up</h1>
        <p className='mb-6'>Let’s get you all set up so you can access your personal account.</p>

        <div className="signup-fields flex items-center">
          <Box
            className='w-full'
            style={{display:"flex", flexDirection:"column"}}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit} 
          >
            <div className="registeration-fields flex-col">
              <div className="name flex">
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  style={{width:"90%"}}
                  autoComplete='first-name'
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange} 
                  style={{width:"90%"}}
                  autoComplete='last-name'
                />
              </div>
              <div className="contact flex">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  style={{width:"90%"}}
                  autoComplete='new-email'
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Phone Number"
                  name="phoneNumber" 
                  value={formData.phoneNumber}
                  onChange={handleChange} 
                  style={{width:"90%"}}
                  autoComplete='new-number'
                />
              </div>
            </div>

            <TextField
              required
              id="outlined-required"
              label="Password"
              name="password" 
              type="password"
              value={formData.password}
              onChange={handleChange}
              style={{width:"98%"}}
              autoComplete='new-password'
            />

            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              name="confirmPassword" 
              type="password"
              value={formData.confirmPassword} 
              onChange={handleChange} 
              style={{width:"98%"}}
              autoComplete='Confirm-password'
            />

            <div className="signup-terms mb-6">
              <label>
                <input className='border-2 font-semibold' type="checkbox"/> 
                <span className='ml-2'>I agree to all the <span className='text-red-500'>Terms</span> and <span className='text-red-500'>Privacy Policies</span> </span>
              </label>
            </div>

            <button className='signup-btn text-center py-2 rounded font-semibold text-lg' style={{background:"rgb(141, 211, 187)"}} type="submit">Create Account</button>

            <div className="new-reg-signup flex justify-center mb-4">
              <p>Already have an account?</p>
              <button className='text-red-500 ml-2' onClick={()=>navigate("/login")}>Sign in</button>
            </div>

            <div className="login-devider-hr flex justify-between items-center">
              <span className='border w-32 lg:w-52 h-0'></span>
              <p className='p-0 m-0'>Or signup with</p>
              <span className='border w-32 lg:w-52 h-0'></span>
            </div>

            <div className="alt-signup-icons flex justify-between mt-6">
              <span className='rounded p-2 px-14 text-blue-600 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaFacebook/></span>
              <span className='rounded p-2 px-10 lg:px-14' style={{border:"1px solid rgb(141,211,187"}}><img className='h-6' src={googleIcon} alt="" /></span>
              <span className='rounded p-2 px-14 text-2xl' style={{border:"1px solid rgb(141,211,187"}}><FaApple/></span>
            </div>

          </Box>
        </div>

      </div>

    </div>
  );
};

export default Signup;
