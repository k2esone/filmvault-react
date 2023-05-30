
import { Modal } from 'react-bootstrap';
import './App.css';
import BrandLogo from './components/BrandLogo';
import Carousel from './components/Carousel';
import MovieComp from './components/MovieComp';
import NavBar from './components/NavBar';
import Header from './pages/Home/Header';
import SupportedPlatforms from './pages/Home/SupportedPlatforms';
import TopMovies from './pages/Home/TopMovies';

function App() {
  return (
 <>
 <NavBar></NavBar>
<Header></Header>
<TopMovies></TopMovies>
<SupportedPlatforms></SupportedPlatforms>
 </>
  );
}

export default App;
