import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';

import { productListReducer, productDetailReducer } from './productReducers';

export const rootReducer = combineReducers({
  productsList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});
