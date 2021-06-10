import { FETCH_REVIEWS, ADD_REVIEW, DELETE_REVIEW } from '../constants/actionTypes';

export default (reviews = [], action) => {
    switch (action.type) {
        case FETCH_REVIEWS:
            return action.payload;
        case ADD_REVIEW:
            return [ ...reviews, action.payload ];
        case DELETE_REVIEW:
            return reviews.filter(review => review._id !== action.payload);
        default:
            return reviews;
    }
}