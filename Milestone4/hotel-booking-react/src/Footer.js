import React from 'react';
import './Footer.css';
import copyrightIcon from './assets/copyright.png';
import emailIcon from './assets/email.png';
import locationIcon from './assets/location.png';
import phoneIcon from './assets/Phone.png';
import visa from "./assets/visa.png";
import amx from "./assets/amx.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import linkedin from "./assets/linkedin.png";
import telegram from "./assets/telegram.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";

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
      <div class="bottom2">
        <section class="additional-bottom">
          <div class="rectangle-container">
            <div class="clickable-rectangle">
              <img src={visa} alt="Logo 1" />
            </div>
            <div class="clickable-rectangle">
              <img src={amx} alt="Logo 2" />
            </div>
            <div class="clickable-rectangle">
              <img src={mastercard} alt="Logo 3" />
            </div>
            <div class="clickable-rectangle">
              <img src={paypal} alt="Logo 4" />
            </div>
          </div>
    
          <div class="circle-container">
            <div class="clickable-circle">
              <img src={linkedin} alt="Logo 5" />
            </div>
            <div class="clickable-circle">
              <img src={telegram} alt="Logo 6" />
            </div>
            <div class="clickable-circle">
              <img src={facebook} alt="Logo 7" />
            </div>
            <div class="clickable-circle">
              <img src={twitter} alt="Logo 8" />
            </div>
            <div class="subscribe-container">
              <input type="email" placeholder='Enter your email' />
              <button class="subscribe-button">Subscribe</button>
            </div>
          </div>
        </section>
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
