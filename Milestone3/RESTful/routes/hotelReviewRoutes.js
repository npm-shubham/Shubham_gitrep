// routes/hotelReviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../model/review');

router.post('/reviews', async (req, res) => {
    try {
        const { rating, review, userId, hotelId } = req.body;
        if (!rating || !review || !userId || !hotelId) {
            return res.status(400).json({ message: 'Rating, review and user ID are required' });
        }
        const newReview = new Review({
            rating,
            review,
            userId,
            hotelId
        });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        console.error('Failed to create review:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/reviews/:reviewid', async (req, res) => {
    try {
        const reviewId = req.params.reviewid;
        if (!reviewId) {
            return res.status(400).json({ message: 'Review ID is required' });
        }
        const review = await Review.findById(req.params.reviewid);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
        // console.log("Fetched Review", reviewId);
        // console.log(review);
    } catch (error) {
        console.error('Error fetching review details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/reviews/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully', review: deletedReview });
        console.log("Review Deleted");
    } catch (error) {
        console.error('Failed to delete review:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.patch('/reviews/:id', async (req, res) => {
    const { rating, review } = req.body;
    const reviewId = req.params.id;
    try {
        const updatedReview = await Review.findByIdAndUpdate(reviewId, { $set: { rating, review } }, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        console.error('Failed to update review:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
