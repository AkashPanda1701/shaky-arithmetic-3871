import {
    GET_CARTPRODUCTS_LOADING,
    GET_CARTPRODUCTS_SUCCESS,
    GET_CARTPRODUCTS_ERROR,
    ADD_TO_CART_LOADING,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_ERROR,
    REMOVE_FROM_CART_LOADING,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_ERROR,
    ORDER_PLACED_LOADING,
    ORDER_PLACED_SUCCESS,
    ORDER_PLACED_ERROR,


} from './actionTypes';
import axios from 'axios';


export const getCartProducts = () => async (dispatch) => {
    dispatch({ type: GET_CARTPRODUCTS_LOADING });
    try {
        const res = await fetch('http://localhost:8000/carts',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token')
            }

        });

        const data = await res.json();
        // console.log('res: ', data);

        dispatch({ type: GET_CARTPRODUCTS_SUCCESS, payload: {
            cartProducts: data.cartProducts
        }});
    } catch (error) {
        dispatch({ type: GET_CARTPRODUCTS_ERROR });
    }
}

export const addToCart = (productId) => async (dispatch) => {
    dispatch({ type: ADD_TO_CART_LOADING });
    try {
        const res = await axios.post('http://localhost:8000/carts', { productId,quantity:1 }, {
            headers: {
                'Content-Type': 'application/json', 
                token: localStorage.getItem('token')
            }
        });
        // console.log('res: ', res);

        
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: {
            newProduct: res.data.product,
            message : res.data.message
        }});
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: ADD_TO_CART_ERROR ,
        payload: {
            message: error.response.data.message
        } });
    }
}


export const removeFromCart = (productId) => async (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART_LOADING });
    try {
        const res = await axios.delete(`http://localhost:8000/carts/${productId}`, {
            headers: {
                'Content-Type': 'application/json', 
                token: localStorage.getItem('token')
            }
        });
        // console.log('res: ', res);

        
        dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: {
            message : res.data.message,
            productId
        }});
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: REMOVE_FROM_CART_ERROR ,
        payload: {
            message: error.response.data.message
        } });
    }
}

export const placeOrder = () => async (dispatch) => {
    dispatch({ type: ORDER_PLACED_LOADING });
    try {
        const res = await axios.put('http://localhost:8000/carts', {}, {
            headers: {
                'Content-Type': 'application/json', 
                token: localStorage.getItem('token')
            }
        });
        // console.log('res: ', res);

        
        dispatch({ type: ORDER_PLACED_SUCCESS, payload: {
            message : res.data.message,
        }});
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: ORDER_PLACED_ERROR ,
        payload: {
            message: error.response.data.message
        } });
    }
}
