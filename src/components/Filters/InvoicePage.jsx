import InvoiceDownload from "../Filters/FlightCardCon.jsx/InvoiceDownload"
import BoardingPass from "./FlightCardCon.jsx/BoardingPass"
import InvoiceTC from "./FlightCardCon.jsx/InvoiceT&C"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"
import LoginNav from "../Hotels/HotelCom.jsx/LoginNav"

const InvoicePage = () => {
  return (
    <div>
        <LoginNav/>
        <div className="w-4/5 mx-auto">
      <InvoiceDownload/>
      <BoardingPass/>
      <InvoiceTC/>
        </div>

        <LpSubscribe/>
        <LpFooter/> 
    </div>
  )
}

export default InvoicePage
