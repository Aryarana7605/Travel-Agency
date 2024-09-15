import Fheader from './Fheader'
import Fmap from './Fmap'
import FtravelCardSec from './FtravelCardSec'
import FbookSec from './FbookSec'
import LpForm from '../Home/LpForm'
import LpFooter from '../Home/LpFooter'
import LpSubscribe from '../Home/LpSubscribe'


const Flights = () => {
  return (
    <div className='bg-white overflow-hidden'>
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
