// src/InfoSection.js
import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <h2>Information You Need To Pay Attention</h2>
      <p>Passengers are divided according to age categories.</p>
      <img 
        src="https://placehold.co/600x300" 
        alt="Description"
        className="rounded-image"
      />
      <h2>Your Trip Summary</h2>
      <p>
        Your flight takes off from ARN Gate 23A, you enter through C Entrance. 
        In FCO Airport in Rome, you will stay 3h & 45m then exit through Gate D14. 
        Final destination will be SABIHA Airport and you can exit through L Door.
      </p>
      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="reviews"><b>Reviews</b></label>
          <select id="reviews">
            <option>Good</option>
            <option>Bad</option>
            <option>Worst</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="sustainability"><b>Sustainability level </b></label>
          <select id="sustainability">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
