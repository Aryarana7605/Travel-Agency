import CoverImg from "./accountImg/accountCover.png"
import profileImg from "./accountImg/profileImg.png"

const AccountHeader = () => {
  return (
    <div>
      <div className="w-full relative">
        <img src={CoverImg} alt="accountCover" className="w-full"/>
        <button className="lg:absolute right-6 bottom-8 bg-[#8dd3bb] p-2 font-semibold rounded-lg">Upload new cover</button>
      </div>
      <div className="flex flex-col items-center lg:relative bottom-20">
    <img src={profileImg} alt="profileImg" className="max-h-max max-w-max" />
    <h1 className="font-semibold text-xl">John Doe</h1>
    <p>john.doe@gmail.com</p>
      </div>
    </div>
  )
}

export default AccountHeader