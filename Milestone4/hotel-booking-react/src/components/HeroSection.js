import React from 'react';
import hotel from "../assets/hotel.png";
import adduser from "../assets/adduser.png";
import calendar from "../assets/calender.png";

function HeroSection() {
  return (
    <>
    <div className="nav-label">
      <h1 className="label1">Where Is Your Next Dream Place?</h1>
      <h4 className="label2">Find exclusive Genius rewards in every corner of the world!</h4>
    </div>
    <section className="top-component">
      <div className="top-component-content">
        <div className="input-row">
          <div className="input-container">
            <label htmlFor="hotel">Hotel:</label>
            <img src={hotel} alt="Hotel Icon" />
            <input type="text" id="hotel" placeholder="Gutenberg" />
          </div>
          <div className="input-container">
            <label htmlFor="vip">VIP:</label>
            <input type="text" id="vip" placeholder="Long Lasting" />
            <div className="clickable-entity">&#x25BC;</div>
          </div>
          <div className="input-container">
            <label htmlFor="guests">Guests:</label>
            <img src={adduser} alt="Add User Icon" />
            <input type="text" id="guests" placeholder="Adult 2, Children 3, Room" />
            <div className="clickable-entity">&#x25BC;</div>
          </div>
          <div className="input-container">
            <label htmlFor="checkin">Check-in Date:</label>
            <img src={calendar} alt="Calendar Icon" />
            <input type="text" id="checkin" placeholder="Check-in Date" />
            <input type="text" id="checkout" placeholder="Checkout Date" />
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </section>
    <section class="hero2">
      <div class="hero-content2">
        <h1>Why Choose Us?</h1>
        <a href='/bookingdetails'><div class="explore-more">Explore More</div></a>
      </div>
    </section>
    </>
  );
}

export default HeroSection;
