import FbImg1 from "../../assets/flights/FbImg1.png"
import FbImg2 from "../../assets/flights/FbImg2.png"
import FbImg3 from "../../assets/flights/FbImg3.png"
import FbImg4 from "../../assets/flights/FbImg4.png"


const FbookSec = () => {
  return (
<div className='F-book-sec w-full lg:w-4/5 mx-auto px-4'>
  <div className="f-book-sec-nav lg:flex justify-between items-center p-4 lg:p-0">
    <div className="f-travel-card-sec-nav-con leading-8 lg:leading-10">
      <h2 className='text-2xl lg:text-4xl font-bold'>Fall into travel</h2>
      <p className='text-sm lg:text-base w-full lg:w-4/5 mt-2'>
        Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
      </p>
    </div>
    <button className='f-travel-card-sec-nav-btn mt-4 lg:mt-0 text-sm lg:text-base px-4 py-2 bg-transparent border-2 border-[#8dd3bb] rounded'>
      See All
    </button>
  </div>

  <div className="f-book-sec-card p-4 lg:p-0 lg:flex lg:justify-between flex-col lg:flex-row">
    <div className="main-card w-full lg:w-2/5 bg-[#8dd3bb] rounded-2xl p-6 flex flex-col justify-between mb-6 lg:mb-0">
      <div className="card-content flex flex-col mb-4">
        <div className="heading-tag-p flex justify-between mb-4">
          <div className="heading">
            <h1 className="font-semibold text-3xl lg:text-5xl">Backpacking</h1>
            <h1 className="font-semibold text-3xl lg:text-5xl mt-2">Sri Lanka</h1>
          </div>
          <div className="price-tag text-right">
            <p className="font-semibold text-lg">From</p>
            <h2 className="font-semibold text-xl lg:text-2xl">$700</h2>
          </div>
        </div>
        <p className="text-sm lg:text-base">
          Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
        </p>
      </div>
      <div className="card-btn">
        <button className="bg-white font-semibold w-full rounded py-2 text-sm lg:text-base">Book Flight</button>
      </div>
    </div>

    <div className="f-book-img grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
      <img className="w-full rounded-lg" src={FbImg1} alt="" />
      <img className="w-full rounded-lg" src={FbImg2} alt="" />
      <img className="w-full rounded-lg" src={FbImg3} alt="" />
      <img className="w-full rounded-lg" src={FbImg4} alt="" />
    </div>
  </div>
</div>

  )
}

export default FbookSec
