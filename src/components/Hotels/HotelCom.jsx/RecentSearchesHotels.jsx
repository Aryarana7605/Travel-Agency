import IstanbulImg from "../../../assets/places/Rectangle-3.png"
import SydneyImg from "../../../assets/places/Rectangle-3-1.png"
import BakuImg from "../../../assets/places/Rectangle-3-2.png"
import MaleImg from "../../../assets/places/Rectangle-3-3.png"

const RecentSearchesHotels = () => {
  const searches = [
    {
      location: "Istanbul, Turkey",
      places: 325,
      imageUrl:IstanbulImg, 
    },
    {
      location: "Sydney, Australia",
      places: 325,
      imageUrl: SydneyImg, 
    },
    {
      location: "Baku, Azerbaijan",
      places: 325,
      imageUrl: BakuImg, 
    },
    {
      location: "Malé, Maldives",
      places: 325,
      imageUrl: MaleImg, 
    },
  ];

  return (
    <div className="py-10 w-4/5 lg:mx-auto p-6 lg:mt-40">
      <h2 className="text-2xl font-semibold mb-6">Your recent searches</h2>
      <div className="lg:flex justify-between w-full lg:space-x-8 lg:grid-cols-none grid grid-flow-row grid-cols-2">
        {searches.map((search, index) => (
          <div key={index} className="lg:flex items-center  lg:gap-4 mb-4">
            <img
              src={search.imageUrl}
              alt={search.location}
              className="w-24 h-24 rounded-lg object-cover mb-3"
            />
            <div>
            <p className="font-semibold text-gray-800">{search.location}</p>
            <p className="text-sm text-gray-500">{search.places} places</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearchesHotels;
