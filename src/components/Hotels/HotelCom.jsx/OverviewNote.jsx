import { BsStars } from "react-icons/bs";

const OverviewNote = () => {
  return (
    <div className="mt-8 lg:p-6 p-2">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
        <p>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.</p>
      </div>
      <div className="lg:flex gap-6 mt-8 lg:grid-cols-none grid grid-cols-2">
        <div className="border-2 border-[#8dd3bb] p-4 rounded-lg h-30 bg-[#8dd3bb] ">
            <h2 className="font-semibold">4.2</h2>
            <div>
                <p className="">Very Good</p>
                <p className="text-sm">371 reviews</p>
            </div>
        </div>
        <div className="border-2 border-[#8dd3bb] h-30 flex flex-col justify-between p-4 rounded-lg">
            <BsStars/>
            <p>Near Nightlife</p>
        </div>
        <div className="border-2 border-[#8dd3bb] h-30 flex flex-col justify-between p-4 rounded-lg">
            <BsStars/>
            <p>Near Theater</p>
        </div>
        <div className="border-2 border-[#8dd3bb] h-30 flex flex-col justify-between p-4 rounded-lg">
            <BsStars/>
            <p>Clean Hotel</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewNote
