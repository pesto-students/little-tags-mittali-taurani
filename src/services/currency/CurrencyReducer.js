import {
  SET_INR,
  SET_USD
} from "./ActionTypes";



export const currencyReducer = (state, action) => {
  switch (action.type) {
    case SET_INR:
      return {
        INR: true,
        USD: false
      };

    case SET_USD:
      return {
        INR: false,
        USD: true
      };
    default:
      return state;
  }
};
