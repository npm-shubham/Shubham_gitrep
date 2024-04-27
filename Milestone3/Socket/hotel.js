const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, unique: true }, 
    address: { type: String },
    price_per_night: { type: Number },
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
