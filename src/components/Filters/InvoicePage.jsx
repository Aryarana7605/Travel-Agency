import InvoiceDownload from "../Filters/FlightCardCon.jsx/InvoiceDownload"
import Fnav from "../flights/Fnav"
import BoardingPass from "./FlightCardCon.jsx/BoardingPass"
import InvoiceTC from "./FlightCardCon.jsx/InvoiceT&C"
import LpSubscribe from "../Home/LpSubscribe"
import LpFooter from "../Home/LpFooter"

const InvoicePage = () => {
  return (
    <div>
        <Fnav/>
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
