import { createContext, useReducer } from "react";
import { USER_ADDRESSES_STORAGE_KEY } from "../../helper/constants";
import { addressReducer, setAddressInStorage } from "./AddressReducer";
import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  UPDATE_ADDRESS,
  SET_DEFAULT_ADDRESS,
  SET_CURRENT_ADDRESS,
} from "./ActionTypes";

export const AddressContext = createContext();

const getItemFromStorage = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];

const initialState = {
  addresses: getItemFromStorage(USER_ADDRESSES_STORAGE_KEY),
  ...setAddressInStorage(getItemFromStorage(USER_ADDRESSES_STORAGE_KEY)),
};

const AddressContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, initialState);

  const addAddress = (payload) => {
    dispatch({ type: ADD_ADDRESS, payload });
  };

  const removeAddress = (payload) => {
    dispatch({ type: REMOVE_ADDRESS, payload });
  };

  const updateAddress = (payload) => {
    dispatch({ type: UPDATE_ADDRESS, payload });
  };

  const setDefaultAddress = (payload) => {
    dispatch({ type: SET_DEFAULT_ADDRESS, payload });
  };

  const setCurrentAddress = (payload) => {
    dispatch({ type: SET_CURRENT_ADDRESS, payload });
  };

  const contextValues = {
    addAddress,
    removeAddress,
    updateAddress,
    setDefaultAddress,
    setCurrentAddress,
    ...state,
  };

  return (
    <AddressContext.Provider value={contextValues}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContextProvider;
