import express from 'express';
import { fetchProducts, createProduct, deleteProduct, updateProduct, likeProduct } from '../controllers/products.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', fetchProducts);

router.post('/', auth, createProduct);

router.delete('/:id', auth, deleteProduct);

router.patch('/:id', auth, updateProduct);

router.patch('/:id/likeProduct', auth, likeProduct);

export default router;