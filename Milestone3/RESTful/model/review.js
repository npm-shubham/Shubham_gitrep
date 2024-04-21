// models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: { type: Number },
  review: { type: String },
  userId: { type: String },
  hotelId: { type: String },
});

const Review = mongoose.model('Reviews', reviewSchema);

module.exports = Review;