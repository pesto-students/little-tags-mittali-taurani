import { createContext, useReducer } from "react";
import { wishListReducer, setWishListItemInStorage } from "./Reducer";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST
} from "./ActionTypes";


export const getItemFromStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

setWishListItemInStorage(getItemFromStorage);

const initialState = {
    wishListItems: getItemFromStorage,
};

export const WishlistContext = createContext(initialState);

const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState);

  const addToWishlist = (payload) => {
    dispatch({ type: ADD_TO_WISHLIST, payload });
  };

  const removeFromWishlist = (payload) => {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload });
  };

  const handleClearWishlist = (payload) => {
    dispatch({ type: CLEAR_WISHLIST, payload });
  };

  const contextValues = {
    addToWishlist,
    removeFromWishlist,
    handleClearWishlist,
    ...state,
  };

  return (
    <WishlistContext.Provider value={contextValues}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
