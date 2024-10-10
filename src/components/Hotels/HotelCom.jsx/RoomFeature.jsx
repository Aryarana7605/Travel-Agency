import hotel1 from "./HotelsImg/hotel1.png"
import room1 from "./HotelsImg/room1.png"

const RoomFeature = () => {
  return (
    <div className=" mt-12 rounded-lg mx-auto max-w-max">
        <div className="flex lg:flex-row flex-col gap-8 rounded-lg">
    <img src={hotel1} alt="hotelOuter" />
    <div className="grid grid-cols-2 lg:gap-8 gap-4 ">
        <img src={room1} alt="hotel room" />
        <img src={room1} alt="hotel room" />
        <img src={room1} alt="hotel room" />
        <span className="lg:relative lg:flex-none flex flex-col items-end">
          <img src={room1} alt="hotel room"  />
          <button className="p-2 mt-4  lg:mt-0 bg-[#8dd3bb] rounded-md font-semibold lg:absolute lg:bottom-4 lg:left-28">View all photos</button>
        </span>
        
    </div>
    </div>
    </div>
  )
}

export default RoomFeature
