import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
} from "./ActionTypes";

import {firebaseObj} from "../firebase/Firebase";

export const setWishListItemInStorage = (items) => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(items.length > 0 ? items : [])
  );
};

export const wishListReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (!state.wishListItems.find((item) => item.id === action.payload.id)) {
        state.wishListItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      setWishListItemInStorage(state.wishListItems);
      
      if (action.authUser && action.authUser.isLoggedIn) {
        console.log("firebaseObj", state.wishListItems);
        firebaseObj.saveDataToFirebase(
          action.authUser.uid,
          "kkk",
          state.wishListItems
        );
      }
      return {
        ...state,
        wishListItems: [...state.wishListItems],
      };
    case REMOVE_FROM_WISHLIST:
      const filteredList = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );
      setWishListItemInStorage(filteredList);
      return {
        ...state,
        wishListItems: [...filteredList],
      };
    case CLEAR_WISHLIST:
      setWishListItemInStorage([]);
      return {
        wishListItems: [],
      };
    default:
      return state;
  }
};
