import './App.css';
import Achievements from './components/achievements/Achievements';
import Navbar from './components/navbar/Navbar';
import Photo from './components/photo_gallery/Photo';
import Profile from './components/profile/Profile';
import Quotes from './components/quotes/Quotes';
import References from './components/references/References';

function App() {
  return (
    <div className='page'>
      <Navbar />
      <Profile />
      <Achievements />
      <Quotes />
      <Photo />
      <References />
    </div>
  );
}

export default App;
