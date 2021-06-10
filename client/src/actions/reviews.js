import { FETCH_REVIEWS, ADD_REVIEW, DELETE_REVIEW } from '../constants/actionTypes';
import * as api from '../api';

export const fetchReviews = () => async (dispatch) => {
    try {
        const { data } =  await api.fetchReviews(); 
        dispatch({ type: FETCH_REVIEWS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createReview = (review) => async (dispatch) => {
    try {
        const { data } = await api.addReview(review);
        dispatch({ type: ADD_REVIEW, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteReview = (id) => async (dispatch) => {
    try {
        await api.deleteReview(id);
        dispatch({ type: DELETE_REVIEW, payload: id });
    } catch (error) {
        console.log(error);
    }
}