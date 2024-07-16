import React from 'react';
import { NavLink } from "react-router-dom";
import brandlogo from '../assets/logo.png';
import search from '../assets/search.png';
import england from '../assets/england.png';
import dollar from "../assets/dollar.png";
import help from "../assets/help.png";
import heart from "../assets/heart.png";
import call from "../assets/call.png";
import profile from "../assets/profile.png";
import user from "../assets/icons8-user-50.png";
import card from "../assets/icons8-card-50.png";
import settings from "../assets/icons8-settings-24.png";
import shakehands from "../assets/icons8-shake-hands-60.png";
import signout from "../assets/icons8-sign-out-48.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="top-section">
        <div className="logo">
          <NavLink exact to="/" activeClassName="active">
            <img src={brandlogo} alt="Brand Logo" />
          </NavLink>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">
            <img src={search} alt="Search Icon" />
          </span>
        </div>
        <div className="help-icons">
          <img src={england} alt="Help Icon 1" />
          <img src={dollar} alt="Help Icon 2" />
          <img src={help} alt="Help Icon 3" />
            <img src={heart} alt="Help Icon 4" />
          <img src={call} alt="Help Icon 5" />
        </div>
        <div className="account-info">
          <div className="profile-photo">
            <img src={profile} alt="Profile" />
          </div>
          <div className="account-labels">
            <span className="your-account">Your Account</span>
            <span className="username">Anna Catina</span>
          </div>
          <div className="dropdown">
            <div className="dropdown-content">
              <a href="#"><img src={user} alt="user" width="20px" /> My Account</a>
              <a href="#"><img src={card} alt="card" width="20px" /> Payments</a>
              <a href="#"><img src={settings} alt="Settings" width="20px" /> Settings</a>
              <a href="#"><img src={shakehands} alt="Support" width="20px" /> Support</a>
              <a href="#"><img src={signout} alt="Signout" width="20px" /> Sign Out</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="nav-scroll">
          <div className="nav-item">Trip</div>
          <div className="nav-item">%Deals</div>
          <div className="nav-item" style={{ backgroundColor: '#007bff', border: 'none', color: 'white', textShadow: 'gray' }}>Hotel</div>
          <div className="nav-item">Flight</div>
          <div className="nav-item">Apartment</div>
          <div className="nav-item">Camper</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
