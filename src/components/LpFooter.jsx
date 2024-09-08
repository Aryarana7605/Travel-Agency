import footerLogo from '../assets/footer logo.png'
import "./lpStyle.css"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";

const LpFooter = () => {
  return (
    <div className='footer lg:mt-60 lg:p-20 lg:pt-60 bg-[#8dd3bb] lg:flex items-baseline justify-evenly lg:rounded-3xl p-4 grid grid-flow-row grid-cols-2'>
<div className="footer-sec footer-sec-1 flex-col justify-end items-center">
    <img className='logo h-10' src={footerLogo} alt="golobeLogo"/>
    <ul className="footer-social-logos text-2xl mt-2 flex">
    <li><a href="."><TiSocialFacebookCircular /></a></li>
    <li className='ml-2'><a href="."><TiSocialTwitter /></a></li>
    <li className='ml-2'><a href="."><FaYoutube /></a></li>
    <li className='ml-2'><a href="."><TiSocialInstagram /></a></li>
    </ul>
</div>
<div className="footer-sec flex-col justify-end items-baseline">
        <h4 className='text-8 font-semibold'>Our Destinations</h4>
        <li className='list-none flex items'>Alaksa</li>
        <li className='list-none flex items'>France</li>
        <li className='list-none flex items'>Iceland</li>
        <li className='list-none flex items'>Canada</li>
</div>
<div className="footer-sec flex-col justify-end items-baseline">
<h4 className='text-8 font-semibold'>Our Activities</h4>
        <li className='list-none flex items-center'>Alaksa</li>
        <li className='list-none flex items-center'>Canada</li>
        <li className='list-none flex items-center'>France</li>
        <li className='list-none flex items-center'>Iceland</li>
</div>
<div className="footer-sec flex-col justify-end items-baseline">
<h4 className='text-8 font-semibold'>Travel Blogs</h4>
        <li className='list-none flex items-center'>Canada</li>
        <li className='list-none flex items-center'>Alaksa</li>
        <li className='list-none flex items-center'>France</li>
        <li className='list-none flex items-center'>Iceland</li>
</div>
<div className="footer-sec flex-col justify-end items-baseline">
<h4 className='text-8 font-semibold'>About Us</h4>
        <li className='list-none flex items-center'>Canada</li>
        <li className='list-none flex items-center'>Alaksa</li>
</div>
<div className="footer-sec flex-col justify-end items-baseline">
<h4 className='text-8 font-semibold'>Contact Us</h4>
        <li className='list-none flex items-center'>Canada</li>
        <li className='list-none flex items-center'>Alaksa</li>
</div>
    </div>
  )
}

export default LpFooter