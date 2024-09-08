// import whiteGolobeLogo from '../assets/whiteGolobeLogo.png';
import "../components/lpStyle.css";
// import airplane from '../icons/white airplane.png'
// import bed from '../icons/white bed.png'  
import "../index.css"
import LpNav from "./LpNav";

// import { useNavigate } from 'react-router-dom';

const Lpheader = () => {
  // const navigate = useNavigate()
  return (

    // style={{backgroundImage:"url(../assets/LPheadbg.png)"}}

    <div className='lp-header bg-center bg-no-repeat bg-cover h-[65vh] rounded border-b-4 border-gray-600 lg:border-none lg:rounded-3xl p-6 mx-auto mb-8' >
      <div>
        <LpNav/>
      </div>
       <div className="lp-header-content  text-center text-white mt-20 h-full ">
        <div className="">
        <h1 className='ho font-semibold text-4xl lg:text-5xl '>Helping Others</h1>
        <h1 className='lt font-semibold text-5xl lg:text-8xl'>LIVE & TRAVEL</h1>
        <p className="lg:text-3xl text-xl">Special offers to suit your plan</p>
        </div>
       </div>

       
    </div>
  )
}

export default Lpheader
