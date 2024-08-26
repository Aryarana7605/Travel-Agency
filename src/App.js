import LpFooter from './components/LpFooter';
import LpForm from './components/LpForm';
import Lpheader from './components/Lpheader';
import LpMainOfferings from './components/LpMainOfferings';
import Lpplaces from './components/Lpplaces';
import LpSubscribe from './components/LpSubscribe';
import Swiperz from './components/swiper/swiper';


function App() {
  return (
    <div className="App">
      <Lpheader/>
      <LpForm/>
      <Lpplaces/>
      <LpMainOfferings/>
      <Swiperz/>      
      <LpSubscribe/>
      <LpFooter/>
    </div>
  );
}

export default App;
