import { CREATE, FETCH_ALL, DELETE, UPDATE, LIKE_BLOG } from '../constants/actionTypes';
import * as api from '../api';
//Action creators

export const getProducts = () => async (dispatch) => {
    try {
        const { data } =  await api.fetchProducts(); 
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(blog);
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.editProduct(id, product);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const likeProduct = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeProduct(id);
        dispatch({ type: LIKE_BLOG, payload: data });
    } catch (error) {
        console.log(error);
        alert('Please login first...');
    }
}
