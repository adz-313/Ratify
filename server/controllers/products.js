import Products from '../models/product.js';
import mongoose from 'mongoose';

export const fetchProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Products({...product, creator: req.userId, createdAt: new Date().toISOString() }); 
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid ID');

    await Products.findByIdAndRemove(_id);

    res.json({message: 'Product deleted'});
};

export const updateProduct = async (req, res) => {
    const { id: _id } = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid ID');

    const updatedProduct = await Products.findByIdAndUpdate(_id, { ...product, _id}, {new: true});
          
    res.json(updatedProduct);
};

export const likeProduct = async (req, res) => {
    const { id: _id } = req.params;

    if(!req.userId) return res.json({ message: 'Unauthenticated'});

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid ID');

    const product = await Products.findById(_id);

    const index = await product.likes.findIndex((id) => id === String(req.userId));

    if(index === -1)
    {
        product.likes.push(req.userId);
    } else {
        product.likes = product.likes.filter((id) => id !== String(req.userId));
    }

    const updatedProduct = await Products.findByIdAndUpdate(_id, product, { new: true });

    res.json(updatedProduct);
}