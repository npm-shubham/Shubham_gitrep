import React from 'react';
import HeroSection from './components/HeroSection.js';
import SpecialOffers from './components/SpecialOffers.js';
import ComparisonSection from './components/ComparisonSection.js';
import BottomHeroSection from './components/BottomHeroSection.js';
import './styles.css';
import Footer from './Footer.js';

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
