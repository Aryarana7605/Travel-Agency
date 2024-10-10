import LpFooter from "../Home/LpFooter"
import LpSubscribe from "../Home/LpSubscribe"
import LoginNav from "../Hotels/HotelCom.jsx/LoginNav"
import AccountHeader from "./AccountHeader"
import AccountTabs from "./AccountTabs"

const Account = () => {
  return (
    <div className="bg-slate-100">
    <LoginNav/>
    <div className="lg:w-[90%] mx-auto">
    <AccountHeader/>
    <AccountTabs/>
    </div>
    <LpSubscribe/>
    <LpFooter/>
    </div>
  )
}

export default Account
