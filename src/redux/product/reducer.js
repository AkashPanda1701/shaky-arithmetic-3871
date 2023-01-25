import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
} from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: payload.products,
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}