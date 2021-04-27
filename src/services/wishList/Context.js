import { createContext, useReducer } from "react";
import { wishListReducer, setWishListItemInStorage } from "./Reducer";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST
} from "./ActionTypes";


const getItemFromStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

// console.log("getItemFromStorage",getItemFromStorage);

setWishListItemInStorage(getItemFromStorage);

const initialState = {
    wishListItems: getItemFromStorage,
};

export const WishlistContext = createContext(initialState);

const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState);

  const addToWishlist = (payload, authUser) => {
    dispatch({ type: ADD_TO_WISHLIST, payload, authUser });
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
