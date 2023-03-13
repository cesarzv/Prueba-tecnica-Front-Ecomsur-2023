import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_PRODUCT = "CLEAN_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_ONE_TO_CART = "ADD_ONE_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";

export const getProducts = () => {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:5000/api/products");
    return dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:5000/api/products/${id}`);
    return dispatch({
      type: GET_DETAILS,
      payload: response.data,
    });
  };
};

export const cleanProduct = () => {
  return {
    type: CLEAN_PRODUCT,
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const addOneToCart = (id) => {
  return {
    type: ADD_ONE_TO_CART,
    payload: id,
  };
};

export const removeOneFromCart = (id) => {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
};
