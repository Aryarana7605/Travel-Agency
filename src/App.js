import LpCarousel from './components/LpCarousel';
import LpFooter from './components/LpFooter';
import Lpheader from './components/Lpheader';
import LpMainOfferings from './components/LpMainOfferings';
import Lpplaces from './components/Lpplaces';
// import SwiperCarousel from './components/LpReviews';
import Lpselection from './components/Lpselection';
import LpSubscribe from './components/LpSubscribe';

function App() {
  return (
    <div className="App">
      <Lpheader/>
      <Lpselection/>
      <Lpplaces/>
      <LpMainOfferings/>
      <LpCarousel/>
      {/* <SwiperCarousel/> */}
      <LpSubscribe/>
      <LpFooter/>
    </div>
  );
}

export default App;
