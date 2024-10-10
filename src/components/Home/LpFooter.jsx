import footerLogo from '../../assets/footer logo.png'
import "./lpStyle.css"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";

const LpFooter = () => {
  return (
<div className="footer bg-[#8dd3bb] p-6 lg:p-20 lg:mt-60 lg:pt-52 pb-8 lg:pb-6 max-h-max">
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-20 pb-6">
    
    <div className="footer-sec footer-sec-1 flex flex-col items-center lg:items-start">
      <img className="logo h-10" src={footerLogo} alt="golobeLogo" />
      <ul className="footer-social-logos text-2xl mt-2 flex">
        <li><a href="."><TiSocialFacebookCircular /></a></li>
        <li className="ml-2"><a href="."><TiSocialTwitter /></a></li>
        <li className="ml-2"><a href="."><FaYoutube /></a></li>
        <li className="ml-2"><a href="."><TiSocialInstagram /></a></li>
      </ul>
    </div>

    
    <div className="footer-sec flex flex-col">
      <h4 className="text-lg font-semibold">Our Destinations</h4>
      <ul className="mt-2 space-y-1">
        <li className="list-none">Alaska</li>
        <li className="list-none">France</li>
        <li className="list-none">Iceland</li>
        <li className="list-none">Canada</li>
      </ul>
    </div>

    
    <div className="footer-sec flex flex-col">
      <h4 className="text-lg font-semibold">Our Activities</h4>
      <ul className="mt-2 space-y-1">
        <li className="list-none">Alaska</li>
        <li className="list-none">Canada</li>
        <li className="list-none">France</li>
        <li className="list-none">Iceland</li>
      </ul>
    </div>

    
    <div className="footer-sec flex flex-col">
      <h4 className="text-lg font-semibold">Travel Blogs</h4>
      <ul className="mt-2 space-y-1">
        <li className="list-none">Canada</li>
        <li className="list-none">Alaska</li>
        <li className="list-none">France</li>
        <li className="list-none">Iceland</li>
      </ul>
    </div>

    
    <div className="footer-sec flex flex-col">
      <h4 className="text-lg font-semibold">About Us</h4>
      <ul className="mt-2 space-y-1">
        <li className="list-none">Canada</li>
        <li className="list-none">Alaska</li>
      </ul>
    </div>

    
    <div className="footer-sec flex flex-col">
      <h4 className="text-lg font-semibold">Contact Us</h4>
      <ul className="mt-2 space-y-1">
        <li className="list-none">Canada</li>
        <li className="list-none">Alaska</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default LpFooter