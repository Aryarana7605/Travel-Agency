import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Divider, IconButton } from '@mui/material';
import axios from 'axios';  // Import Axios
import logoImg from "../../assets/golobeLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  // POST API call for login using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post("https://your-api-endpoint.com/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Login successful:", response.data);      
      navigate("/account");

    } catch (err) {
     
      if (err.response) {
        
        setError(err.response.data.message || "Login failed. Please check your credentials.");
      } else if (err.request) {
        
        setError("Network error. Please try again later.");
      } else {
        
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="login-form bg-white lg:p-20 lg:px-36 flex justify-between w-full text-center lg:text-left" style={{ height: "100vh" }}>
      <div className="login-section w-full lg:w-2/5 flex-col p-4 lg:p-12 lg:leading-10 my-auto">
        <img src={logoImg} className="h-10 mx-auto lg:mx-0" alt="logo" />
        <Typography variant="h4" fontWeight="bold" mt={4}>
          Login
        </Typography>
        <Typography mb={2}>Login to access your Golobe account.</Typography>

        <Box
          className="w-full"
          sx={{ display: 'flex', flexDirection: 'column' }}
          component="form"
          onSubmit={handleSubmit}  
          autoComplete='off'
        >
          <TextField
  required
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  fullWidth
  margin="normal"
  autoComplete="new-email" 
/>
<TextField
  required
  label="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  fullWidth
  margin="normal"
  autoComplete="new-password" 
/>


          {error && <Typography color="error" mt={2}>{error}</Typography>} {/* Display error if any */}

          <Box display="flex" justifyContent="space-between" my={2}>
            <label>
              <input type="checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
            <Typography
              color="primary"
              className="cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ backgroundColor: "rgb(141, 211, 187)" }}
          >
            Login
          </Button>

          <Box display="flex" justifyContent="center" my={2}>
            <Typography>Don't have an account?</Typography>
            <Button color="error" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </Box>

          <Divider sx={{ my: 2 }}>Or login with</Divider>

          <Box display="flex" justifyContent="space-around" mt={2}>
            <IconButton style={{ border: "1px solid rgb(141,211,187" }}>
              <FaFacebook color="blue" />
            </IconButton>
            <IconButton style={{ border: "1px solid rgb(141,211,187" }}>
              <FcGoogle />
            </IconButton>
            <IconButton style={{ border: "1px solid rgb(141,211,187" }}>
              <FaApple />
            </IconButton>
          </Box>
        </Box>
      </div>

      <div className="login-swiper-sec w-3/6 px-10 py-0 hidden lg:block">
        <LogSwiper />
      </div>
    </div>
  );
};

export default Login;
