import React from 'react';
import appstore from "../assets/app-store-badge.png";
import playstore from "../assets/google-play-badge.png";
import qr from "../assets/qr-code.png";

function BottomHeroSection() {
  return (
    <section class="bottom">
      <div>
        <h3 class="title">Go Further With The EasySet24 App</h3>
        <p class="subtitle">Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. Additionally, earn One Key Cash for every booking made through the app.</p>
        <p class="paragraph">Secured By Europe GTP</p>
      </div>
    
      <div>
        <div class="bottom-image-container" >
          <img src={appstore} alt="Rectangle 1" />
          <img src={qr} alt="QR Code 1" />
        </div>
        <div class="bottom-image-container">
          <img src={playstore} alt="Rectangle 2" />
          <img src={qr} alt="QR Code 2" />
        </div>
      </div>
    </section>
  );
}

export default BottomHeroSection;
