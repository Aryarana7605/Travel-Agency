import whiteGolobeLogo from '../assets/whiteGolobeLogo.png';
import "../components/lpStyle.css";
import airplane from '../icons/white airplane.png'
import bed from '../icons/white bed.png'  
import "../index.css"
import { useNavigate } from 'react-router-dom';

const Lpheader = () => {
  const navigate = useNavigate()
  return (
    <div className='lp-header '>

      <nav className='lp-nav '>
        <ul className='text-white lp-booking-nav-ul-1'>
          <li><img src={airplane} alt="airplane" className='airplane'/><a className='ml-2 font-semibold' href=".">Find Flight</a></li>
          <li><img src={bed} alt="bed" className='bed'/><a className='ml-2 font-semibold' href=".">Find Stays</a></li>
        </ul>
        <img className='logo' src={whiteGolobeLogo} alt="logo"/>
        <ul className='lp-booking-nav-ul-2'>
          <li className='header-login-btn text-white cursor-pointer font-semibold' onClick={()=>navigate("/login")}>Login</li>
          <li className='header-signup-btn' onClick={()=>navigate("/signup")} >Sign up</li>
        </ul>
{/* <div class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 bg-transparent">
  <nav class="max-w-[85rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between">
    <a class="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href=".">Brand</a>
    <div class="sm:order-3 flex items-center gap-x-2">
      <button type="button" class="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
        <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <span class="sr-only">Toggle</span>
      </button>
    </div>
    <div id="hs-navbar-alignment" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
      <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
        <a class="font-medium text-blue-500 focus:outline-none" href="." aria-current="page">Landing</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href=".">Account</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href=".">Work</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href=".">Blog</a>
      </div>
    </div>
  </nav>
</div> */}


      </nav>
       
       <div className="lp-header-content">
        <h1 className='ho'>Helping Others</h1>
        <h1 className='lt'>LIVE & TRAVEL</h1>
        <p>Special offers to suit your plan</p>
       </div>
       
    </div>
  )
}

export default Lpheader
