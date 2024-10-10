import room1 from "../HotelCom.jsx/HotelsImg/room1.png"

const rooms = [
  {
    image: room1, 
    title: 'Superior room - 1 double bed or 2 twin beds',
    price: 240,
  },
  {
    image: room1, 
    title: 'Superior room - City view - 1 double bed or 2 twin beds',
    price: 280,
  },
  {
    image: room1, 
    title: 'Superior room - City view - 1 double bed or 2 twin beds',
    price: 320,
  },
  {
    image: room1, 
    title: 'Superior room - City view - 1 double bed or 2 twin beds',
    price: 350,
  },
];

const AvailableRooms = () => {
  return (
    <div className="w-full mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Available Rooms</h2>
      <div className="space-y-4">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <img
                src={room.image}
                alt={room.title}
                className="w-12 h-12 object-cover rounded"
              />
              <p>{room.title}</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg font-bold text-gray-800">${room.price} <span className="text-sm">/night</span></p>
              <button className="bg-[#8dd3bb]  px-4 font-medium py-2 rounded-lg hover:bg-[#8dd]">
                Book now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableRooms;
