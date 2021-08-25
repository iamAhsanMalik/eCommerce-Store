import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const cartAddItem = (data, productQty) => {
  return {
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.productName,
      image: data.productImage,
      price: data.productPrice,
      productInStock: data.productInStock,
      productQty,
    },
  };
};

const cartRemoveItem = (id) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: id,
  };
};

export const addToCart = (id, productQty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch(cartAddItem(data, productQty));

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatach, getState) => {
  dispatach(cartRemoveItem(id));

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
