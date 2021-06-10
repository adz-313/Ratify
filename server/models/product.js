import mongoose from 'mongoose';

const product = mongoose.Schema({
    productName: String,
    description: String,
    category: String,
    creator: String, 
    name: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Product = mongoose.model('Product', product);

export default Product;