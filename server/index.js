import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productRoutes from './routes/products.js';
import userRoutes from './routes/users.js';
import reviewRoutes from './routes/reviews.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Ratify API!');
});

app.use('/products', productRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at port ${PORT}`) ))
    .catch((error) => console.error(error.message))

mongoose.set('useFindAndModify', false);