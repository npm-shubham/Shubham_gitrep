//index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const { Pool } = require('pg');

//import routes
const hotelReviewRoutes = require('./routes/hotelReviewRoutes');
const userRoutes = require('./routes/userRoutes');
const hotelRoutes = require('./routes/hotelRoutes');

const bookingRoutes = require('./routes/bookingRoutes'); 

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://shubhambiswas487:shubham487@psywellbeing.i4rtcgo.mongodb.net/hotelSankey?retryWrites=true&w=majority&appName=psywellbeing');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'HotelBookings', 
  password: 'root', 
  port: 5432,
});

// Make pool available globally
global.pgPool = pool;

app.use('/api', hotelReviewRoutes);
app.use('/api', userRoutes);
app.use('/api', hotelRoutes);
app.use('/api', bookingRoutes); // PostgreSQL-related routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});