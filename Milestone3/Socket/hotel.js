const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, unique: true }, 
    address: { type: String },
    price_per_night: { type: Number },
}, { timestamps: true });

hotelSchema.post('save', function(doc, next) {
  // Emit the newly saved hotel to connected clients
  io.emit('newHotel', doc);
  next();
});


const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
