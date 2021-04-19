import { createContext, useReducer } from "react";
import {
  USER_CART_STORAGE_KEY,
  USER_ORDERS_STORAGE_KEY,
} from "../../helper/Constants";
import { cartReducer, sumItems, addItemsToOrderHistory } from "./CartReducer";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  CHECKOUT,
  CLEAR_CART,
} from "./ActionTypes";

export const CartContext = createContext();

const getItemFromStorage = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];

const initialState = {
  cartItems: getItemFromStorage(USER_CART_STORAGE_KEY),
  ...sumItems(getItemFromStorage(USER_CART_STORAGE_KEY)),
  checkout: false,
  pastOrders: getItemFromStorage(USER_ORDERS_STORAGE_KEY),
  ...addItemsToOrderHistory(getItemFromStorage(USER_ORDERS_STORAGE_KEY)),
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: ADD_PRODUCT, payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: REMOVE_PRODUCT, payload });
  };

  const updateProduct = (payload) => {
    dispatch({ type: UPDATE_PRODUCT, payload });
  };

  const increaseProductQuantity = (payload) => {
    dispatch({ type: INCREASE_PRODUCT_QUANTITY, payload });
  };

  const decreaseProductQuantity = (payload) => {
    dispatch({ type: DECREASE_PRODUCT_QUANTITY, payload });
  };

  const handleCheckout = (payload) => {
    dispatch({ type: CHECKOUT, payload });
  };

  const handleClearCart = (payload) => {
    dispatch({ type: CLEAR_CART, payload });
  };

  const contextValues = {
    addProduct,
    removeProduct,
    updateProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    handleCheckout,
    handleClearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
