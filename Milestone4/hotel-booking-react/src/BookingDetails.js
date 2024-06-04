import React from "react";
import "./BookingDetails.css";
import "./exclusive.css";
import bgimg from "./assets/bg-image.jpg";
import location from "./assets/location.png";
import coffeecup from "./assets/coffee-cup.jpg";
import wifiimage from "./assets/Wifi.png";
import parkingimage from "./assets/parking.png";
import cat from "./assets/cat.png";
import profile from "./assets/profile.png";
import rightimg from "./assets/right.png";
import clippathgroup from "./assets/clippathgroup.png";
import mail from "./assets/mail.png";
import SE from "./assets/SE.png";
import flightairflow from "./assets/flight-airflow.png";
import taxi from "./assets/taxi.png";
import pencil from "./assets/pencil.png";
import checkone from "./assets/check-one.png";
import history from "./assets/history.png";
import bankcard from "./assets/bank-card.png";
import vector from "./assets/Vector.png";
import input from "./assets/Input.png";
import check from "./assets/check.png";
import plus from "./assets/plus.png";
import hotelclean from "./assets/hotel-please-clean.png";
import lock from "./assets/lock.png";
import hotel1 from "./assets/hotel1.png";
import local from "./assets/local.png";
import tree from "./assets/tree.png";
import showerhead from "./assets/shower-head.png";
import tvone from "./assets/tv-one.png";

const ImageSection = () => (
  <div className="lphoto">
    {Array(4)
      .fill()
      .map((_, index) => (
        <img src={bgimg} alt="bgimg" className="h" key={index} />
      ))}
  </div>
);

const InfoSection = () => (
  <div className="info">
    <h1 id="t1">First Hotel G</h1>
    <h2 id="t2">Modern Hotel at Gothenburg Central Station</h2>
    <h2 id="t3">More than 4,325 Review</h2>
    <img src={location} className="r" alt="location" />
    <div className="review-bar">
      <div className="fill" style={{ width: "90%" }}></div>
    </div>
    <img src={location} className="l" alt="location" />
    <h2 id="t4">Location Information</h2>
    <p className="dot">0 m to City Centre</p>
    <p className="dot">24 km to Landvetter Airport</p>
    <p className="dot">2.5 km to Liseberg Amusement Park</p>
    <p className="dot">0 m to Gothenburg Central Station</p>
    <IconSection />
  </div>
);

const IconSection = () => {
  const icons = [
    { src: { coffeecup }, text: "Breakfast Included" },
    { src: { wifiimage }, text: "Free Wi-Fi" },
    { src: { parkingimage }, text: "Free Parking" },
    { src: { cat }, text: "Pets are Welcome" },
    {
      src: "./assets/pngs/clothes-crew-neck.png",
      text: "Free Laundry Service",
    },
    { src: "./assets/pngs/handle-x.png", text: "No Smoking" },
    {
      src: "./assets/pngs/play-basketball.png",
      text: "Free Entrance to Exercise Centre",
    },
  ];

  return icons.map((icon, index) => (
    <div className="icon-container" key={index}>
      <img src={icon.src} className="icon" alt={icon.text} />
      <p>{icon.text}</p>
    </div>
  ));
};

const BookingInfo = () => (
  <div className="booking">
    <div className="booking-details">
      <p id="t5">Your Booking Details</p>
      <div className="check">
        <div className="checkin">
          <p id="t6">Check - In </p>
          <p id="t7">2 August 2023</p>
        </div>
        <div className="checkin">
          <p id="t6">Check -Out</p>
          <p id="t7">6 August 2023</p>
        </div>
      </div>
      <div className="dot1">
        <p className="dot">You Will Stay 4 Nights</p>
        <p className="dot">You Selected 2 Rooms For :</p>
        <p className="dot">2 Adults</p>
        <p className="dot">3 Children (12 ,7 and 5 Years Old)</p>
        <p className="dot">0 Infant</p>
      </div>
    </div>
  </div>
);

const RoomDetails = () => (
  <div className="room">
    <div className="room1">
      <p id="t8">
        <strong>The Room:</strong> Superior Twin Room
      </p>
      <div className="guest-number" id="guestNumber">
        Guest Number: 2 Adults
      </div>
      <img src={plus} id="frameImage" alt="frame" />
    </div>
    <div className="room2">
      <img src={hotelclean} className="clean" alt="clean" />
      <p id="t9">Cleanliness Rooms Rate</p>
      <img src={lock} className="rate1" alt="rate" />
    </div>
    <div className="r3">
      <div className="r1">
        <img src={hotel1} className="hotel" alt="hotel" />
        <p id="t10">18 M2</p>
      </div>
      <div className="r1">
        <img src={local} className="local" alt="local" />
        <p id="t10">City Center</p>
      </div>
      <div className="r1">
        <img src={tree} className="tree" alt="tree" />
        <p id="t10">Next To Forest</p>
      </div>
    </div>
    <div className="r4">
      <div className="r2">
        <img src={showerhead} className="shower" alt="shower" />
        <p id="t10">En-suite bath room</p>
      </div>
      <div className="r2">
        <img src={tvone} className="tv" alt="tv" />
        <p id="t10">Flat-screen TV</p>
      </div>
    </div>
  </div>
);

const PaymentInformation = () => (
  <div className="payment">
    <h1 id="t11">Payment Information</h1>
    <div className="pay1">
      <h2 id="t12">Your Price Summary</h2>
    </div>
    <div className="pay2">
      <h3 id="t13">Original Price</h3>
      <h4 id="t19">$960</h4>
      <h4 id="t20">4 nights</h4>
    </div>
    <div className="pay3">
      <h4 id="t14">EasySet24 Loyalty Discount 4 %</h4>
      <h4 id="t15">$100</h4>
      <h4 id="t16">Discount</h4>
    </div>
    <div className="pay4">
      <h2 id="t17">Total Amount for Payment</h2>
      <h2 id="t18">$860 </h2>
    </div>
    <p id="t21">Cancellation Policy</p>
    <img src={check} className="check" alt="check" />
    <p id="t22">Free Cancellation</p>
    <p className="t23">
      Cancel /Rebook No Later Than 24 Hours Before, Otherwise You Pay <br />
      80% Of The Cost.
    </p>
    <label className="custom-radio" htmlFor="pay_now">
      <span className="t24">Pay part now, part later</span>
      <input type="radio" name="payment_option" id="pay_now" value="pay_now" />
    </label>
    <p className="t25">
      Pay $ 200 now, and the rest ($6,60) will be automatically charged <br />
      to the same payment method on August 27, 2023. No extra fees.
    </p>
  </div>
);

const PaymentMethods = () => (
  <div className="method">
    <p className="t26">Payment Methods</p>
    <div className="method1">
      <p className="t27">
        Payment <br />
        Method
      </p>
      <img src={input} className="in" alt="input" />
      <p className="t28">
        Booking For Work
        <input type="radio" name="booking_for_work" value="booking_for_work" />
      </p>
    </div>
  </div>
);

const RightSection = () => (
  <div class="right">
    <div class="info2">
      <div class="info1">
        <img src={profile} alt="" class="idel" />
        <p class="txt">Anna Carinna</p>
        <p class="txt1">easyset24@gmail.com</p>
        <button class="his">
          <p class="txt2">
            Check Your Booking History{" "}
            <img src={rightimg} alt="rightimg" id="ir" />
          </p>
        </button>
      </div>
      <div class="info3">
        <p class="txt3">Who are you booking for?</p>
        <label class="radio-container">
          <input type="radio" name="guest_type" class="radio-button" />
          <span class="radio-custom"></span>
          <span class="radio-text">I am the main guest</span>
        </label>
        <label class="radio-container">
          <input type="radio" name="guest_type" class="radio-button" />
          <span class="radio-custom"></span>
          <span class="radio-text">Booking is for someone else</span>
        </label>
      </div>
      <p class="txt4">Enter Your Information </p>
      <p class="txt5">
        Make Sure the Information that you Have already written in yoy Profile
        is Correct.
      </p>
      <button id="clip">
        <img src={clippathgroup} alt="pencil" id="clip1" />
        Edit Profile
      </button>
    </div>
    <div class="name">
      <p class="txt6">Full Name</p>
      <div class="name1">
        <input type="text" id="fname" placeholder="First Name *" required />
        <input type="text" id="mname" placeholder="Middle Name" />
        <input type="text" id="lname" placeholder="Last Name *" required />
      </div>
      <h2 id="txt7">Email Address</h2>
      <h2 id="txt8">Phone Number</h2>
      <div class="contact">
        <input
          type="text"
          id="mail"
          placeholder=".........................."
          required
        />
        <img src={mail} alt="Mail Icon" />
      </div>
      <div class="contact1">
        <input type="number" id="pno" placeholder="764378888888" />
        <img src={SE} alt="SE Icon" id="pno1" />
      </div>
      <h2 class="txt9">If You Need Assistance</h2>
      <h2 class="txt10">
        Choose An Option Based On Physical Disability Accordingly.
      </h2>
      <h2 id="txt7">Chose An Option</h2>
      <h2 id="txt8">Region /Country</h2>
      <div class="s">
        <select name="All" id="s">
          <option value="All">Not Provided</option>
          <option value="dis">I have a Disability</option>
          <option value="ndis">I don't have Disability</option>
        </select>
        <input type="text" id="region" placeholder="Country *" required />
      </div>
    </div>
    <div class="addstay">
      <div class="header">
        <h1>Add To Your Stay</h1>
      </div>
      <div class="flight-section">
        <input type="checkbox" id="flight-checkbox" />
        <label for="flight-checkbox" id="flight-section">
          I Will Need A Flight For My Trip
        </label>
        <p>
          <img src={flightairflow} alt="flightairflow" id="I" />
          20% Special Offer If You Book A Flight
        </p>
        <p>
          Flexible Flight Options From Stockholm To Turkiye From SLK 766/Round
          Trip. Finish Booking
        </p>
        <p>
          This Stay To Get Flight Recommendations That Match Your Selected
          Dates.
        </p>
      </div>
      <div class="taxi-section">
        <input type="checkbox" id="taxi-checkbox" />
        <label for="taxi-checkbox" id="taxi-section">
          Want To Book A Taxi Or Shuttle Ride In Advance?
        </label>
        <p>
          <img src={taxi} alt="taxi" id="I" />
          10% Special Offer if You Rent A Taxi
        </p>
        <p>
          Avoid Surprises_ Get From The Airport To Your Accommodation Without A
          Hitch.
        </p>
        <p>We Will Add Taxi Options To Your Booking Confirmation.</p>
      </div>

      <div class="special-requests">
        <h2>Special Requests</h2>
        <p>
          Special Requests Can Not Be Guaranteed But The Property Will Do Its
          Best To Meet Your Needs.
        </p>
        <p>
          You Can Always Make A Special Request After Your Booking Is Complete!
        </p>
        <div class="text">
          <p>(optional)</p>
          <img src={pencil} alt="pencil" />
          <input type="text" id="toptional" />
        </div>
        <p>
          <input type="checkbox" id="rooms-close-together" />{" "}
          <label for="rooms-close-together">
            I Would Like Rooms Close To Each Other
          </label>
        </p>
      </div>

      <div class="arrival-time">
        <h2>Your Arrival Time</h2>
        <p>
          <img src={checkone} alt="checkone" id="I" />
          ✔Your Rooms Will Be Ready For Check_in Between 15:00 And 23:00
        </p>
        <p>
          <img src={history} alt="history" id="I" />
          24-Huor Front Desk_Help Wherever You Need It!
        </p>
        <p id="txt9">Add Your Estimated Arrival Time (Optional)</p>
        <p>
          <select name="arrival-time" id="arrival-time">
            <option value="">Please Select</option>
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="23:00">23:00</option>
          </select>
        </p>
        <p id="txt10">Time for CET time zone</p>
      </div>
    </div>
    <div class="binfo">
      <h1>Bank Card Information</h1>
      <div class="bdata">
        <div class="d1">
          <p>Full Name On The Card</p>
          <input type="text" id="fullname" placeholder="Anna Carina" required />
        </div>
        <div class="d2">
          <p>Card Number</p>
          <img src={bankcard} alt="bankcard" />
          <input
            type="text"
            id="cardnumber"
            placeholder="........................................."
            required
          />
        </div>
        <div class="d3">
          <p>EXP Date</p>
          <input type="month" id="expdate" required />
        </div>
        <div class="d4">
          <p>CVC</p>
          <input type="text" id="cvc" placeholder="***" required />
        </div>
      </div>
      <button class="save" id="saveButton">
        <span>Save In Shortcut</span>
        <img src={vector} alt="heart" />
      </button>
      <button class="paym" onclick="handlePaymentClick()">
        Payment
      </button>
    </div>
  </div>
);

const BookingDetail = () => {
  return (
    <>
      <div className="container">
        <div className="left-section">
          <div className="top-section">
            <ImageSection />
            <InfoSection />
          </div>
          <BookingInfo />
          <RoomDetails />
          <PaymentInformation />
          <PaymentMethods />
        </div>
        <div className="right-section">
          <RightSection />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default BookingDetail;
