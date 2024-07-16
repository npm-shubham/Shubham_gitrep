import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinalPay from './FinalPay';
import BookingDetail from './BookingDetails';
import Home from './Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finalpay" element={<FinalPay />} />
          <Route path="/bookingdetails" element={<BookingDetail />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
