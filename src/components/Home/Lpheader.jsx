import "./lpStyle.css";
import LpNav from "./LpNav";

const Lpheader = () => {
  return (
    <div className='lp-header bg-center bg-no-repeat bg-cover h-[65vh] rounded border-b-4 border-gray-600 lg:border-none lg:rounded-3xl p-4 mx-auto mb-8'>
      <div>
        <LpNav/>
      </div>
       <div className="lp-header-content  text-center text-white mt-20 h-full ">
        <div className="headings">
        <h1 className='ho font-semibold text-4xl lg:text-4xl '>Helping Others</h1>
        <h1 className='lt font-semibold text-5xl lg:text-7xl'>LIVE & TRAVEL</h1>
        <p className="lg:text-2xl text-xl">Special offers to suit your plan</p>
        </div>
       </div>

       
    </div>
  )
}

export default Lpheader
