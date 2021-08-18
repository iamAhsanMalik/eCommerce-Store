import { combineReducers } from 'redux';

import { productListReducer, productDetailReducer } from './productReducers';

export const rootReducer = combineReducers({
  productsList: productListReducer,
  productDetail: productDetailReducer,
});
