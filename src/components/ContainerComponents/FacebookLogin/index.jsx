import React from "react";
import { IoLogoFacebook } from "react-icons/io5";

const FacebookLoginButton = () => (
  <button type="button  flex-row" className="facebookBtn">
    <IoLogoFacebook className="social-icon" />
    <span>Facebook Account</span>
  </button>
);

export default FacebookLoginButton;
