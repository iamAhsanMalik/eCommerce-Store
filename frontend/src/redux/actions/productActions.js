import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from '../constants/productConstants';

import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
} from '../constants/productConstants';

const productListRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};

const productListSuccess = (products) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: products,
  };
};

const productListFailure = (error) => {
  return {
    type: PRODUCT_LIST_FAILURE,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(productListRequest());

    const { data } = await axios.get('/api/products');

    dispatch(productListSuccess(data));
  } catch (error) {
    dispatch(productListFailure(error));
  }
};

// Product Detail Action
const productDetailRequest = () => {
  return {
    type: PRODUCT_DETAIL_REQUEST,
  };
};

const productDetailSuccess = (product) => {
  return {
    type: PRODUCT_DETAIL_SUCCESS,
    payload: product,
  };
};

const productDetailFailure = (error) => {
  return {
    type: PRODUCT_DETAIL_FAILURE,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const detailProduct = (id) => async (dispatch) => {
  try {
    dispatch(productDetailRequest());

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch(productDetailSuccess(data));
  } catch (error) {
    dispatch(productDetailFailure(error));
  }
};
