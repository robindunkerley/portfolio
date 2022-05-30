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
import styled from 'styled-components';
import PortfolioDesktop from './pages/desktop/portfolio-desktop'
import { device } from './static/device';
import {Helmet} from "react-helmet";

const MobileSite = styled.div`

`

function App() {

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Robin Dunkerley</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Robin Dunkerley's developer portfolio" />
      </Helmet>

      <NavBar/>

        <Routes>
          <Route path='/' element={<PortfolioDesktop/>} />
          <Route path='/profile' element={<ProfileMobile authed={true}/>}/>

        </Routes>

      
  

    {/* <div className='footer' style={styles.footerContainer}>
      <span style={styles.footerText}>Created by Robin Dunkerley</span>
    </div>
     */}
  
    </div>
  );
}

const styles = {
  footerContainer: {
    display: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerText: {
    fontSize: StyleGuide.typography.caption.fontSize,
    color: 'green',
    fontWeight: 200
  }
}

export default App;
