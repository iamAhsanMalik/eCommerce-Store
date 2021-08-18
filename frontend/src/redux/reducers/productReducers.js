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

// Products List Initial State
const initialProductsState = {
  products: [],
};

// Product Detail Initial State
const initialProductState = {
  product: [],
  reviews: [],
};
// Product List Reducer
export const productListReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Product Detail Reducer
export const productDetailReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAIL_FAILURE:
      return {
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
