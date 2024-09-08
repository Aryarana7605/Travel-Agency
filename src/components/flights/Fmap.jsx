import mp1 from "../../assets/flights/mp1.png"
import mp2 from "../../assets/flights/mp2.png"
import mp3 from "../../assets/flights/mp3.png"
import mp4 from "../../assets/flights/mp4.png"
import mp5 from "../../assets/flights/mp5.png"
import darrow from "../../icons/darrow.png"
import darrowLup from "../../icons/darrowLup.png"
import darrowRd from "../../icons/darrowRd.png"



const Fmap = () => {
  return (
    <div className="flights-map lg:mt-48 mx-auto w-full mt-6">
  <div className="fmap-nav lg:mb-8 lg:flex justify-between items-center p-4 w-full lg:w-4/5 mx-auto">
    <div className="fmap-nav-con leading-10">
      <h2 className="text-3xl lg:text-4xl">Let's go places together</h2>
      <p className="text-lg lg:text-xl">Discover the latest offers and news and start planning your next trip with us.</p>
    </div>
    <button className="fmap-nav-btn mt-2 lg:mt-0 text-sm lg:text-base px-4 py-2 bg-transparent border-2 border-[#8dd3bb] rounded">See All</button>
  </div>

  <d96iv className="fmap-places h-[60vh] lg:h-[70vh] relative px-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-none">
    {/* Cards */}
    <div className="mp mp-1 flex justify-between max-w-full border-2 items-center lg:max-w-max gap-4 bg-white rounded-md p-2 hover:h-48 lg:absolute lg:top-[15%] lg:left-[20%]">
      <img src={mp1} alt="James Doe" className="w-16 h-16 lg:w-auto lg:h-auto" />
      <div className="mp-con">
        <h1 className="font-semibold text-sm lg:text-base">James Doe</h1>
        <p className="text-xs">Boarding Pass N'123</p>
      </div>
    </div>
    <img className="a1 hidden lg:block lg:absolute lg:top-[25%] lg:left-[23%]" src={darrowLup} alt="" />

    <div className="mp mp-2 flex justify-between max-w-full border-2 items-center lg:max-w-max gap-4 bg-white rounded-md p-2 lg:absolute lg:bottom-[30%] lg:left-[32.5%]">
      <img src={mp2} alt="James Doe" className="w-16 h-16 lg:w-auto lg:h-auto" />
      <div className="mp-con">
        <h1 className="font-semibold text-sm lg:text-base">James Doe</h1>
        <p className="text-xs">Boarding Pass N'123</p>
      </div>
    </div>
    <img className="a2 hidden lg:block lg:absolute lg:bottom-[23.2%] lg:left-[32%]" src={darrow} alt="" />

    <div className="mp mp-3 flex justify-between max-w-full border-2 items-center lg:max-w-max gap-4 bg-white rounded-md p-2 lg:absolute lg:bottom-[34%] lg:right-[36%]">
      <img src={mp3} alt="James Doe" className="w-16 h-16 lg:w-auto lg:h-auto" />
      <div className="mp-con">
        <h1 className="font-semibold text-sm lg:text-base">James Doe</h1>
        <p className="text-xs">Boarding Pass N'123</p>
      </div>
    </div>
    <img className="a3 hidden lg:block lg:absolute lg:bottom-[43%] lg:right-[43%]" src={darrowRd} alt="" />

    <div className="mp mp-4 flex justify-between max-w-full border-2 items-center lg:max-w-max gap-4 bg-white rounded-md p-2 lg:absolute lg:top-[20%] lg:right-[21.2%]">
      <img src={mp4} alt="James Doe" className="w-16 h-16 lg:w-auto lg:h-auto" />
      <div className="mp-con">
        <h1 className="font-semibold text-sm lg:text-base">James Doe</h1>
        <p className="text-xs">Boarding Pass N'123</p>
      </div>
    </div>
    <img className="a4 hidden lg:block lg:absolute lg:top-[30%] lg:right-[27%]" src={darrow} alt="" />

    <div className="mp mp-5 flex justify-between max-w-full border-2 items-center lg:max-w-max gap-4 bg-white rounded-md p-2 lg:absolute lg:bottom-[37%] lg:right-[10%]">
      <img src={mp5} alt="James Doe" className="w-16 h-16 lg:w-auto lg:h-auto" />
      <div className="mp-con">
        <h1 className="font-semibold text-sm lg:text-base">James Doe</h1>
        <p className="text-xs">Boarding Pass N'123</p>
      </div>
    </div>
    <img className="a5 hidden lg:block lg:absolute lg:bottom-[29%] lg:right-[16%]" src={darrow} alt="" />
  </d96iv>
</div>

  )
}

export default Fmap