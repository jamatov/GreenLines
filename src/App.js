import './App.scss';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Audiology from './pages/Audiology';
import Providers from './pages/Providers'
import Specialties from './pages/Specialties'
import Locations from './pages/Locations'
import Footer from './components/Footer';
import Scroltop from './icons/scrolltop.svg'

import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [navbar, setNavbar] = useState(false);
  function setNav() {
    if (window.scrollY >= 850) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  };

  window.addEventListener("scroll", setNav)

  const top = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop/>

      <img  className={navbar ? 'scrol-top fixed' : 'scrol-top'} onClick={top} src={Scroltop} alt="" />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/audiology' element={<Audiology/>}></Route>
        <Route path='/providers' element={<Providers/>}></Route>
        <Route path='/specialties' element={<Specialties/>}></Route>
        <Route path='/locations' element={<Locations/>}></Route>


      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
