import React from 'react';
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection.js';
import SpecialOffers from './components/SpecialOffers.js';
import ComparisonSection from './components/ComparisonSection.js';
import BottomHeroSection from './components/BottomHeroSection.js';
import './styles.css';
import Footer from './Footer.js';
// import BottomSection from './components/BottomSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <SpecialOffers />
      <ComparisonSection />
      <BottomHeroSection />
      <Footer/>
    </div>
  );
}

export default Home;
