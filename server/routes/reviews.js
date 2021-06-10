import express from 'express';
import { fetchReviews, addReview, deleteReview } from '../controllers/reviews.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', fetchReviews);

router.post('/', auth, addReview);

router.delete('/:id', auth, deleteReview);

export default router;