import { USER_ADDRESSES_STORAGE_KEY } from "../../helper/constants";
import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  UPDATE_ADDRESS,
  SET_DEFAULT_ADDRESS,
  SET_CURRENT_ADDRESS,
} from "./ActionTypes";

export const setAddressInStorage = (addresses) => {
  localStorage.setItem(
    USER_ADDRESSES_STORAGE_KEY,
    JSON.stringify(addresses.length > 0 ? addresses : [])
  );
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      if (!state.addresses.find((item) => item.id === action.payload.id)) {
        state.addresses.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        ...setAddressInStorage(state.addresses),
        addresses: [...state.addresses],
      };

    case REMOVE_ADDRESS:
      const newAddresses = state.addresses.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        ...setAddressInStorage(newAddresses),
        addresses: [...newAddresses],
      };

    case UPDATE_ADDRESS:
      const updatedAddresses = state.addresses.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
      return {
        ...state,
        ...setAddressInStorage(updatedAddresses),
        addresses: [...updatedAddresses],
      };

    case SET_DEFAULT_ADDRESS:
      const modifiedAddresses = state.addresses.map((item) => {
        if (item.id === action.payload.id) return { ...item, isDefault: true };
        return { ...item, isDefault: false };
      });
      return {
        ...state,
        ...setAddressInStorage(modifiedAddresses),
        addresses: [...modifiedAddresses],
      };

    case SET_CURRENT_ADDRESS:
      const refactoredAddresses = state.addresses.map((item) => {
        if (item.id === action.payload.id) return { ...item, isSelected: true };
        return { ...item, isSelected: false };
      });
      return {
        ...state,
        ...setAddressInStorage(refactoredAddresses),
        addresses: [...refactoredAddresses],
      };

    default:
      return state;
  }
};
