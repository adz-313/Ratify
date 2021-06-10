import axios from 'axios';

const API = axios.create({ baseURL:'https://ratify-313.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchProducts = () => API.get('/products');

export const createProduct = (newProduct) => API.post('/products', newProduct); 

export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const editProduct = (id, newProduct) => API.patch(`/products/${id}`, newProduct);

export const likeProduct = (id) => API.patch(`/products/${id}/likeProduct`);

export const signIn = (formData) => API.post('/users/signin', formData);

export const signUp = (formData) => API.post('/users/signup', formData);

export const fetchReviews = (id) => API.get('/reviews');

export const addReview = (newReview) => API.post('/reviews', newReview);

export const deleteReview = (id) => API.delete(`/reviews/${id}`);


