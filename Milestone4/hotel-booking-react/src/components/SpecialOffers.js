import React from 'react';
import bgimage from "../assets/bg-image.jpg";

function SpecialOffers() {
  return (
    <section className="special-offers">
      <h2>Special Offers</h2>
      <div className="offer-images">
        <div className="offer-item">
          <div className="overlay" style={{ backgroundColor: '#007bff', color: 'white' }}>Loyalty Discounts -&gt;</div>
          <img src={bgimage} alt="Offer 1" />
        </div>
        <div className="offer-item">
          <div className="overlay" style={{ backgroundColor: '#007bff', color: 'white' }}>Early Booking Discounts -&gt;</div>
          <img src="https://images.pexels.com/photos/20161587/pexels-photo-20161587/free-photo-of-aerial-view-of-a-farm-with-green-fields.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Offer 2" />
        </div>
        <div className="offer-item">
          <div className="overlay" style={{ backgroundColor: '#007bff', color: 'white' }}>Last Minute Deals -&gt;</div>
          <img src="https://images.pexels.com/photos/10742392/pexels-photo-10742392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Offer 3" />
        </div>
        <div className="offer-item">
          <div className="overlay" style={{ backgroundColor: '#007bff', color: 'white' }}>Family Packages -&gt;</div>
          <img src="https://images.pexels.com/photos/17840522/pexels-photo-17840522/free-photo-of-cgi-minimal-bathroom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Offer 4" />
        </div>
        <div className="offer-item">
          <div className="overlay" style={{ backgroundColor: '#007bff', color: 'white' }}>Birthday or Anniversary Specials -&gt;</div>
          <img src="https://images.pexels.com/photos/17571091/pexels-photo-17571091/free-photo-of-villa-above-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Offer 5" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
