import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    CLEAR_WISHLIST
  } from "./ActionTypes";
  
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
        return {
          ...state,
          wishListItems: [...state.wishListItems],
        };
      case REMOVE_FROM_WISHLIST:
          const filteredList = state.wishListItems.filter((item) => item.id !== action.payload.id);
          setWishListItemInStorage(filteredList);
        return {
          ...state,
          wishListItems: [
            ...filteredList,
          ],
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
  