import { CREATE, FETCH_ALL, DELETE, UPDATE, LIKE_BLOG } from '../constants/actionTypes';

export default (products = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...products, action.payload ];
        case DELETE:
            return products.filter((product) => product._id !== action.payload);
        case UPDATE:
        case LIKE_BLOG: 
            return products.map((product) => product._id === action.payload._id ? action.payload : product);
        default:
            return products;
    }
}