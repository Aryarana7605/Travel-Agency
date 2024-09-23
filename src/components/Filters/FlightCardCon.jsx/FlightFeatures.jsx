import f1 from "../../flights/FlightsImg/f-1.png"
import f2 from "../../flights/FlightsImg/f-2.png"
import f3 from "../../flights/FlightsImg/f-3.png"
import f4 from "../../flights/FlightsImg/f-4.png"
import f5 from "../../flights/FlightsImg/f-5.png"
import f6 from "../../flights/FlightsImg/f-6.png"


const FlightFeatures = () => {
  return (
    <div className="lg:mt-12 mt-4">
     <div className="head flex lg:flex-row justify-between flex-col">
        <h1 className="font-semibold lg:text-2xl">Basic Economy Features</h1>
        <form>
            <label className="text-xs lg:text-base  ml-4 font-semibold"><input type="checkbox"/> Economy</label>
            <label className="text-xs lg:text-base  ml-4 font-semibold"><input type="checkbox"/> First Class</label>
            <label className="text-xs lg:text-base  ml-4 font-semibold"><input type="checkbox"/> Business Class</label>
        </form>
        </div>  

        <div className="features-imgs lg:flex-row lg:flex lg:justify-between lg:grid-cols-none grid grid-flow-row grid-cols-3 gap-4 mt-8">
            <img src={f1} alt="featureImg" />
            <img src={f2} alt="featureImg" />
            <img src={f3} alt="featureImg" />
            <img src={f4} alt="featureImg" />
            <img src={f3} alt="featureImg" />
            <img src={f4} alt="featureImg" />
            <img src={f4} alt="featureImg" />
            <img src={f5} alt="featureImg" />
            <img src={f6} alt="featureImg" />
        </div>

    </div>
  )
}

export default FlightFeatures
