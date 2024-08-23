import React from 'react'
import footerLogo from '../assets/footer logo.png'
import "./lpStyle.css"
import "../index.css"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";

const LpFooter = () => {
  return (
    <div className='footer'>
<div className="footer-sec footer-sec-1">
    <img className='logo' src={footerLogo} alt="golobeLogo"/>
    <ul className="footer-social-logos text-2xl mt-2">
    <li><a href="."><TiSocialFacebookCircular /></a></li>
    <li className='ml-2'><a href="."><TiSocialTwitter /></a></li>
    <li className='ml-2'><a href="."><FaYoutube /></a></li>
    <li className='ml-2'><a href="."><TiSocialInstagram /></a></li>
    </ul>
</div>
<div className="footer-sec">
        <h4 className='text-8 font-semibold'>Our Destinations</h4>
        <li>Canada</li>
        <li>Alaksa</li>
        <li>France</li>
        <li>Iceland</li>
</div>
<div className="footer-sec">
<h4 className='text-8 font-semibold'>Our Activities</h4>
        <li>Canada</li>
        <li>Alaksa</li>
        <li>France</li>
        <li>Iceland</li>
</div>
<div className="footer-sec">
<h4 className='text-8 font-semibold'>Travel Blogs</h4>
        <li>Canada</li>
        <li>Alaksa</li>
        <li>France</li>
        <li>Iceland</li>
</div>
<div className="footer-sec">
<h4 className='text-8 font-semibold'>About Us</h4>
        <li>Canada</li>
        <li>Alaksa</li>
</div>
<div className="footer-sec">
<h4 className='text-8 font-semibold'>Contact Us</h4>
        <li>Canada</li>
        <li>Alaksa</li>
</div>
    </div>
  )
}

export default LpFooter