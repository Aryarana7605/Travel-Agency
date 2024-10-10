import { ImLocation2 } from "react-icons/im";

const HotelLocation = () => {
  return (
    <div>
    <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Location/Map</h1>
        <button className="bg-[#8dd3bb] p-2 font-semibold rounded-md">View on google maps</button>
    </div>      
    <div className="map mt-4">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5397947550277!2d28.985354175859946!3d41.035323271346705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab77b2ec60e2f%3A0x2bc6e09cb4ddcbb9!2zR8O8bcO8xZ9zdXl1LCDEsG7Dtm7DvCBDZC4gTm86OCwgMzQ0MzcgQmV5b8SfbHUvxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sin!4v1727455308609!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm">
            <ImLocation2/>
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
    </div>
  )
}

export default HotelLocation
