import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
const middlewares = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
