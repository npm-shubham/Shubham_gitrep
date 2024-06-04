import React from 'react';
import './Footer.css';
import copyrightIcon from './assets/copyright.png';
import emailIcon from './assets/email.png';
import locationIcon from './assets/location.png';
import phoneIcon from './assets/Phone.png';

const Footer = () => {
  return (
    <footer >
      <div className="footer">
        <div className="footer-column">
            <h4>About Us</h4>
            <p>Our Story</p>
            <p>Work With Us</p>
            <p>Press & Media</p>
            <p>Privacy & Security</p>
        </div>
        <div className="footer-column">
            <h4>We Offer</h4>
            <p>Trip Sponsorship</p>
            <p>Last Minutes Fpghts</p>
            <p>Best Deals</p>
            <p>AI-Driven Search</p>
        </div>
        <div className="footer-column">
            <h4>Headquarters</h4>
            <p>England</p>
            <p>France</p>
            <p>Canada</p>
            <p>Iceland</p>
        </div>
        <div className="footer-column">
            <h4>Travel Blogs</h4>
            <p>Bap Travel Guide</p>
            <p>Sai Travel Guide</p>
            <p>Peru Travel Guide</p>
            <p>Swiss Travel Guide</p>
        </div>
        <div className="footer-column">
            <h4>Activities</h4>
            <p>Tour Leading</p>
            <p>Crusing & Sailing</p>
            <p>Camping</p>
            <p>Kayaking</p>
        </div>
        <div className="footer-column">
            <h4>Services</h4>
            <p>Report Error</p>
            <p>Ask Online</p>
            <p>Travel Insurance</p>
        </div>
      </div>
      <div className="footer-ribbon">
        <div className="footer-ribbon-item">
          <img src={copyrightIcon} alt="Copyright"/>
          <p>2024 Your Company</p>
        </div>
        <div className="footer-ribbon-item">
          <img src={emailIcon} alt="Email"/>
          <p>info@yourcompany.com</p>
        </div>
        <div className="footer-ribbon-item">
          <img src={locationIcon} alt="Location"/>
          <p>123 Street, City, Country</p>
        </div>
        <div className="footer-ribbon-item">
          <img src={phoneIcon} alt="Phone"/>
          <p>+1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
