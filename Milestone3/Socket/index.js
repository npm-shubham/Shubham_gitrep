//index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;
var http = require("http").Server(app);
var io = require("socket.io")(http);
const Hotel = require("./hotel");

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://shubhambiswas487:shubham487@psywellbeing.i4rtcgo.mongodb.net/hotelSankey?retryWrites=true&w=majority&appName=psywellbeing");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  // Emit when the server is started 
  emitHotelData();
});

app.get("/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.find({},{ name: 1, price_per_night: 1, _id: 0 });
    
    // io.emit('hotels', hotels);
    res.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", function (req, res) {
  res.sendFile("D:/Sankey Solutions/New One/Shubham_gitrep/Milestone3/Socket/index.html");
});

// Socket.IO connection
io.on("connection", function (socket) {
  console.log("A client connected");

  // socket.emit("message", "Hello from server!");
  emitHotelData();

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Function to emit hotel data
async function emitHotelData() {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Subtract 24 hours from current time to show recently updated documents
    // const hotels = await Hotel.find({}, { name: 1, price_per_night: 1, _id: 0 });
    const recentlyUpdatedHotels = await Hotel.find({updatedAt: {$gte: twentyFourHoursAgo}}, {name: 1, price_per_night: 1, _id: 0});
    io.emit("hotels", recentlyUpdatedHotels);
  } catch (error) {
    console.error("Error emitting hotels data:", error);
  }
}

http.listen(3000, function () {
  console.log("listening on *:3000");
});
