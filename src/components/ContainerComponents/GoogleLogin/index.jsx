import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

const GoogleLoginButton = () => (
  <button type="button  flex-row" className="googleBtn">
    <AiFillGoogleCircle className="social-icon" />
    <span>Google Account</span>
  </button>
);

export default GoogleLoginButton;
