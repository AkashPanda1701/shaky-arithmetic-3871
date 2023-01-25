import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
} from './actionTypes';

import axios from 'axios';


export const getProducts = (query) => async (dispatch) => {
    let queries = '';
    if (query) {
        for(let key in query) {
            queries += `${key}=${query[key]}&`;
        }
    }
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
        const res = await axios.get(`http://localhost:8000/products?${queries}`);
        // console.log('res: ', res);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: {
            products: res.data.products
        }});
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });
    }
}
