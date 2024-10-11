import { IoFlag } from "react-icons/io5";
import Reviews from "./ReviewsDetails"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const ReviewCard = () => {
  return (
    <div>
        {Reviews.map((review)=>(
    <div className="flex items-start space-x-4 pb-4">

      <img
        src={review.reviewImg}
        alt="Reviewer"
        className="w-12 h-12 rounded-full object-cover"
      />


      <div className="flex-1">
        <div className="flex items-center space-x-2">

          <span className="text-lg font-semibold">{review.reviewRatings} <span className="text-lg font-semibold">Amazing</span></span>

          <span >| {review.reviewerName}</span>
        </div>


        <p className=" mt-1">
          {review.reviewNote}
        </p>
      <div className="divider border-t border-gray-400 my-4"></div> 
      </div>

      <div>
        <button className="text-gray-500 hover:text-gray-700">
          <IoFlag/>
        </button>
      </div>
    </div>
    ))}
    <div className="flex gap-4 justify-center items-center text-center mb-8 lg:mb-0">
      <button><FaAngleLeft/></button>
      <p>1 of 40</p>
      <button><FaAngleRight/></button>
    </div>
    </div>
  );
};

export default ReviewCard;
