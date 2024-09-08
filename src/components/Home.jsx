import Lpheader from './Lpheader'
import LpForm from './LpForm'
import Lpplaces from './Lpplaces'
import Swiperz from './swiper/swiper';
import LpSubscribe from './LpSubscribe';
import LpFooter from './LpFooter';
import LpMainOfferings from './LpMainOfferings';

const Home = () => {
  return (
    <div className='home bg-white'>
      <Lpheader/>
      <LpForm/>
      <Lpplaces/>
      <LpMainOfferings/>
      <Swiperz/>
      <LpSubscribe/>
      <LpFooter/>
    </div>
  )
}

export default Home
