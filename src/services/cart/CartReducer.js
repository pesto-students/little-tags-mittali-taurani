import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  CHECKOUT,
  CLEAR_CART,
} from "./ActionTypes";

import {
  USER_CART_STORAGE_KEY,
  USER_ORDERS_STORAGE_KEY,
} from "../../helper/constants";

const setItemInStorage = (cartItems) => {
  localStorage.setItem(
    USER_CART_STORAGE_KEY,
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const addItemsToOrderHistory = (pastOrders) => {
  localStorage.setItem(
    USER_ORDERS_STORAGE_KEY,
    JSON.stringify(pastOrders.length > 0 ? pastOrders : [])
  );
};

export const sumItems = (cartItems) => {
  setItemInStorage(cartItems);
  const itemCount = cartItems.reduce(
    (totalPrice, product) => totalPrice + product.quantity,
    0
  );
  const totalPrice = cartItems
    .reduce(
      (totalPrice, product) =>
        totalPrice + product["Unnamed: 17"] * product.quantity,
      0
    )
    .toFixed(2);
  return { itemCount, totalPrice };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case UPDATE_PRODUCT:
      const updatedCartItems = state.cartItems.map(item => {
        if(item.id === action.payload.id)
          return action.payload;
        return item;
      });
      return {
        ...state,
        ...sumItems(updatedCartItems),
        cartItems: [...updatedCartItems],
      };

    case INCREASE_PRODUCT_QUANTITY:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity += 1;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case DECREASE_PRODUCT_QUANTITY:
      const cartProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!!cartProduct && cartProduct.quantity > 1) {
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity -= 1;
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case CHECKOUT:
      state.cartItems.map(
        (item) => (item.dateOfOrder = new Date().toDateString())
      );
      return {
        ...state,
        pastOrders: state.pastOrders.push(...state.cartItems),
        ...addItemsToOrderHistory(state.pastOrders),
        cartItems: state.cartItems.splice(0),
        checkout: true,
        ...sumItems(state.cartItems),
      };

    case CLEAR_CART:
      return {
        cartItems: state.cartItems.splice(0), //[],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
