import Reviews from '../models/review.js';
import mongoose from 'mongoose';

export const fetchReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addReview = async (req, res) => {
    const review = req.body;
    const newReview = new Reviews({...review, creator: req.userId, createdAt: new Date().toISOString() }); 
    try {
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteReview = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid ID');

    await Reviews.findByIdAndRemove(_id);

    res.json({message: 'Product deleted'});
}