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
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        ...sumItems(
          newCartItems
          // state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...newCartItems,
          // ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case UPDATE_PRODUCT:
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
      return {
        ...state,
        ...sumItems(updatedCartItems),
        cartItems: [...updatedCartItems],
      };

    case INCREASE_PRODUCT_QUANTITY:
      // const modifiedCartItems = JSON.parse(JSON.stringify(state.cartItems));
      const modifiedCartItems = state.cartItems.map((item) => {
        return { ...item };
      });
      modifiedCartItems[
        modifiedCartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity += 1;
      return {
        ...state,
        ...sumItems(modifiedCartItems),
        cartItems: [...modifiedCartItems],
      };

    case DECREASE_PRODUCT_QUANTITY:
      const reformedCartItems = state.cartItems.map((item) => {
        return { ...item };
      });
      const cartProduct = reformedCartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!!cartProduct && cartProduct.quantity > 1) {
        reformedCartItems[
          reformedCartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity -= 1;
      }
      return {
        ...state,
        ...sumItems(reformedCartItems),
        cartItems: [...reformedCartItems],
      };

    case CHECKOUT:
      const currentOrder = {
        orderDate: new Date().toISOString(),  //.toDateString(),
        orderOtem: [...state.cartItems],
      };
      const updatedOrderHistory = state.pastOrders.map((item) => {
        return { ...item };
      });
      return {
        ...state,
        pastOrders: updatedOrderHistory.push(currentOrder),
        ...addItemsToOrderHistory(updatedOrderHistory),
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case CLEAR_CART:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
