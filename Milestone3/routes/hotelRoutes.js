// routes/hotelRoutes.js
const express = require('express');
const router = express.Router();
const Hotel = require('../model/hotel');

router.get('/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/hotels/:id', async (req, res) => {
    try {
        const hotelId = req.params.id;
        const hotel = await Hotel.findById(hotelId);
        
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        
        res.json(hotel);
    } catch (error) {
        console.error('Error fetching hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/hotels', async (req, res) => {
    try {
        const { name, address, price_per_night } = req.body;
        if (!name || !address || !price_per_night ) {
            return res.status(400).json({ message: 'name, address and price_per_night are required' });
        }
        const newHotel = new Hotel({
            name,
            address,
            price_per_night
        });

        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.name) {
            // Duplicate name error
            return res.status(400).json({ message: 'Duplicate hotel name' });
        }
        
        console.error('Failed to create hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.patch('/hotels/:id', async (req, res) => {
    try {
        const hotelId = req.params.id;
        const { name, address, price_per_night } = req.body;

        const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, { $set: { name, address, price_per_night } }, { new: true });

        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.json(updatedHotel);
    } catch (error) {
        console.error('Failed to update hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/hotels/:id', async (req, res) => {
    try {
        const hotelId = req.params.id;
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId);

        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json({ message: 'Hotel deleted successfully', hotel: deletedHotel });
    } catch (error) {
        console.error('Failed to delete hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
