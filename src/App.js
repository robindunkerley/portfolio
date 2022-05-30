import logo from './logo.svg';
import { StyleGuide } from './theme/StyleGuide';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WorkCard from './components/work-card';
import NavBar from './components/nav-bar';
import './App.css';
import ContentContainer from './components/content-container';
import PortfolioMobile from './pages/mobile/portfolio-mobile'
import '../src/App.css'
import useEmblaCarousel from 'embla-carousel-react'
import React, {useState, useCallback, useEffect} from 'react'
import ProfileMobile from './pages/mobile/profile-mobile';
import ContactMobile from './pages/mobile/contact-mobile';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ProfileMobile authed={true}/>}/>
        <Route path='/portfolio' element={<PortfolioMobile/>} />
        <Route path='/contact' element={<ContactMobile/>}/>
      </Routes>



    <div className='footer' style={styles.footerContainer}>
      <span style={styles.footerText}>Created by Robin Dunkerley</span>
    </div>
    
  
    </div>
  );
}

const styles = {
  footerContainer: {
    justifySelf: 'flex-end'

  },
  footerText: {
    fontSize: StyleGuide.typography.caption.fontSize,
  
    fontWeight: 200
  }
}

export default App;
