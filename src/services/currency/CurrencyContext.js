import { createContext, useReducer } from "react";

import { currencyReducer } from "./CurrencyReducer";
import { SET_USD, SET_INR } from "./ActionTypes";

export const CurrencyContext = createContext();

const initialState = {
  INR: true,
  USD: false,
};

const CurrencyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  const setInr = () => {
    dispatch({ type: SET_INR });
  };

  const setUsd = () => {
    dispatch({ type: SET_USD });
  };

  


  const contextValues = {
    setInr,
    setUsd,
    ...state,
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CartContextProvider;
