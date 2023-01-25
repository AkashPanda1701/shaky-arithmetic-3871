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
    RESET_CART_MESSAGE,
    ORDER_PLACED_LOADING,
    ORDER_PLACED_SUCCESS,
    ORDER_PLACED_ERROR,

} from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    cartProducts: [],
    message: '',
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CARTPRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_CARTPRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cartProducts: payload.cartProducts,
            };
        case GET_CARTPRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case ADD_TO_CART_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cartProducts: [...state.cartProducts, payload.newProduct],
                message: payload.message,
            };
        case ADD_TO_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message,
            };
        case REMOVE_FROM_CART_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cartProducts: state.cartProducts.filter(product => product._id !== payload.productId),
                message: payload.message,
            };
        case REMOVE_FROM_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message,
            };
        case RESET_CART_MESSAGE:
            return {
                ...state,
                message: '',
            };
        case ORDER_PLACED_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case ORDER_PLACED_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cartProducts: [],
                message: payload.message,
            };
        case ORDER_PLACED_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message,
            };
            
        default:
            return state;
    }
}