import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from "../../assets/golobeLogo.png"
import { FaAngleLeft } from "react-icons/fa6";
import LogSwiper from '../login-signup swiper/logSwiper';
import { useNavigate } from 'react-router-dom';

const AddPayment = () => {
  const navigate = useNavigate()
  return (
    <div className='add-payment-form bg-white p-4 lg:p-16 lg:px-36 flex justify-between' style={{height:"100vh"}}>

<div className="signup-swiper-sec hidden lg:block w-3/6 ">
        <LogSwiper/>
      </div>

      <div className="add-payment-method-section max-w-max lg:w-1/2 flex-col lg:p-16 lg:leading-10">
      <img src={logoImg} className='mx-auto h-10' alt="logo" />
      <p className='flex items-center cursor-pointer mt-16' onClick={()=>navigate("/")}><span className='text-2xl'><FaAngleLeft/></span>Home</p>
      <h1 className='text-4xl font-semibold '>Add a payment method</h1>
      <p className='mb-6'>Let’s go you all st up so you can access your personal account</p>

      <div className="add-payment-fields flex items-center" >
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
       
     <div className="add-payment-fields flex-col">
        <div className="name flex">
        <TextField
          required
          id="outlined-required"
          label="Card Number"
          defaultValue="4321 4321 4321 4321"
          style={{width:"100%"}}
          />
        </div>
        <div className="contact flex">
        <TextField
          required
          id="outlined-required"
          label="Exp. Date"
          defaultValue="02/28"
          style={{width:"90%"}}
          />
           <TextField
          required
          id="outlined-required"
          label="CVC"
          defaultValue="123"
          style={{width:"90%"}}
          />
        </div>
     </div>

{/* ///////////////////// */}

      <TextField
          required
          id="outlined-required"
          label="Name on Card"
          type="text"
          defaultValue="John doe"
          style={{width:"98%"}}
          />

      <TextField
          required
          id="outlined-required"
          label="Country or Region"
          type="text"
          defaultValue="United State"
          style={{width:"98%"}}
        />

         <div className="signup-terms mb-6">
          <label><input className='border-2 font-semibold' type="checkbox"/> <span className='ml-2'>Securely save my information for 1-click checkout </span></label>
         </div>

         <button className='login-btn text-center py-2 rounded font-semibold text-lg' style={{background:"rgb(141, 211, 187)"}}>Add payment method</button>

         <div className="new-reg-login flex justify-center mt-4">
          <p className='text-center'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
         </div>

      </Box>
      </div>

      </div>

    </div>
  )
}

export default AddPayment
