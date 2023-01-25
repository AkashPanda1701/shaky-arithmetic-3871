import {
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNIN_LOADING,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_ERROR,
} from './actionTypes';
import axios from 'axios';

export const signup = (data) => async (dispatch) => {
    // console.log('data: ', data);
    dispatch({ type: AUTH_SIGNUP_LOADING });
    try {
        const res = await axios.post('http://localhost:8000/users/signup', data);
        // console.log('res: ', res);
        dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: {
            message: res.data.message
        }});
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: AUTH_SIGNUP_ERROR, payload: {
            message: error.response.data.message
        } });
    }
}

export const signin = (data) => async (dispatch) => {
    // console.log('data: ', data);
    dispatch({ type: AUTH_SIGNIN_LOADING });
    try {
        const res = await axios.post('http://localhost:8000/users/login', data);
        // console.log('res: ', res);
        dispatch({ type: AUTH_SIGNIN_SUCCESS, payload: {
            message: res.data.message,
            token: res.data.token,
            name: res.data.username
        }});
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: AUTH_SIGNIN_ERROR, payload: {
            message: error.response.data.message
        } });
    }
}