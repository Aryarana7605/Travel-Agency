
const HotelReviewHead = () => {
  return (
    <div>
    <div className="flex justify-between">
    <h1 className="text-lg font-semibold">Reviews</h1>        
    <button className="bg-[#8dd3bb] font-semibold p-2 rounded-md">Give your review</button>
    </div>      
    <div className="flex items-center gap-4">
        <h1 className="text-7xl font-semibold">4.2</h1>
        <div>
            <p className="font-semibold text-xl">Very good</p>
            <p className="text-sm">375 verified reviews</p>
        </div>
    </div>
    </div>
  )
}

export default HotelReviewHead
