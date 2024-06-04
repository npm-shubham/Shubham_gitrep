import React from 'react';
import './FinalPay.css';
import InfoSection from './InfoSection';
import Payment from './PaymentSection';
import Footer from './Footer';

function FinalPay() {
  return (
    <>
    <div className="final-pay">
        <InfoSection />
        <Payment />
    </div>
    <Footer />
    </>
    
  );
}

export default FinalPay;
