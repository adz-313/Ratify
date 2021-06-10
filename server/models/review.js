import mongoose from 'mongoose';

const review = mongoose.Schema({
    creator: String, 
    rating: Number, 
    comment: String,
    name: String,   
    productId: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Review = mongoose.model('Review', review);

export default Review;