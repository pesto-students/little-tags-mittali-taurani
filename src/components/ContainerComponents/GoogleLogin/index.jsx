import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import FirebaseContext from "../../../services/firebase/context";

const GoogleLoginButton = () => (

  // const firebase = useContext(FirebaseContext);
// console.log("fff")

  <button type="button  flex-row" className="googleBtn">
    <AiFillGoogleCircle className="social-icon" />
    <span>Google Account</span>
  </button>
);

export default GoogleLoginButton;
