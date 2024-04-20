//index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

//import routes
const hotelReviewRoutes = require('./routes/hotelReviewRoutes');
const userRoutes = require('./routes/userRoutes');
const hotelRoutes = require('./routes/hotelRoutes');

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

app.use('/api', hotelReviewRoutes);
app.use('/api', userRoutes);
app.use('/api', hotelRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});