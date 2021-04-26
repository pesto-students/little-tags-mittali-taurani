import { SET_AUTH_USER } from "./ActionTypes";
// import { AUTH_USER } from "../../helper/constants";

// const setItemInStorage = (authUserInfo) => {
//   localStorage.setItem(
//     AUTH_USER,
//     JSON.stringify(authUserInfo ? authUserInfo : null)
//   );
// };

export const sessionReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, authUser: action.authUser };
    default:
      return state;
  }
};
