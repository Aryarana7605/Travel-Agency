import Fheader from './Fheader'
import LpForm from '../LpForm'
import Fmap from './Fmap'
import FtravelCardSec from './FtravelCardSec'
import LpFooter from "../LpFooter"
import LpSubscribe from "../LpSubscribe"
import FbookSec from './FbookSec'


const Flights = () => {
  return (
    <div className='bg-white'>
      <Fheader/>
      <LpForm/>
      <Fmap/>
      <FtravelCardSec/>
      <FbookSec/>
      <LpSubscribe/>
      <LpFooter/>
    </div>
  )
}

export default Flights
