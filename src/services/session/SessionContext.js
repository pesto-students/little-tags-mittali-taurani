import { createContext, useReducer } from "react";
import { SET_AUTH_USER } from "./ActionTypes";
import { sessionReducer } from "./SessionReducer";
import { AUTH_USER } from "../../helper/constants";

export const SessionContext = createContext();

const getItemFromStorage = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

const initialState = {
  authUser: getItemFromStorage(AUTH_USER),
};

const SessionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  const setAuthUser = (authUser) => {
    dispatch({ type: SET_AUTH_USER, authUser });
  };

  const contextValues = {
    setAuthUser,
    ...state,
  };

  return (
    <SessionContext.Provider value={contextValues}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
