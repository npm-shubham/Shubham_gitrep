import React from 'react';
import './PaymentSection.css';

const PaymentSection = () => {
  return (
    <div className="payment-section">
      <h2>Payment method and Information</h2>
      <div className="price-details">
        <h3>Price Details</h3>
        <div className="price-items">
          <div className="price-item">$87 2 Adults</div>
          <div className="price-item">$24 3 Children</div>
          <div className="price-item">$12 2 Infant</div>
        </div>
      </div>
      <hr />
      <div className="total">
        <span>Total(USD)</span>
        <span>$ 456</span>
      </div>
      <hr />
      <div className="booking-for-work">
        <div>
          <input type="radio" id="work" name="booking-type" value="work" />
          <label htmlFor="work"><b>Booking for work</b></label>
        </div>
        <div>
        <label htmlFor="work"><b>Payment Method</b></label>
          <select id="payment-method" name="payment-method">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
      </div>
      <div className="personal-info">
        <div className="form-group">
          <label htmlFor="first-name">First Name<span className="required">*</span></label>
          <input type="text" id="first-name" name="first-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name<span className="required">*</span></label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number<span className="required">*</span></label>
          <input type="text" id="phone-number" name="phone-number" required />
        </div>
      </div>
      <div className="card-details">
        <div className="form-group">
          <label htmlFor="card-number">Card Number<span className="required">*</span></label>
          <input type="text" id="card-number" name="card-number" maxLength="16" required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV<span className="required">*</span></label>
          <input type="text" id="cvv" name="cvv" maxLength="3" required />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date<span className="required">*</span></label>
          <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/\d{2}" required />
        </div>
      </div>
      <h2>Cancellation Policy</h2>
      <p>Get a Full Refund If You Cancel By Jun 23 (PDT).</p>
      <div className="buttons">
        <button className="primary-button">Confirm and Pay</button>
        <button className="secondary-button">Save If You Like It</button>
      </div>
      <div className='subtitle'>
        <p>Check your information before submitting.</p>
        <p>Save your flight info, find it through Shortcut.</p>
      </div>
    </div>
  );
};

export default PaymentSection;
