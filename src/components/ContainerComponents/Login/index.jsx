import React from "react";
import "./style.scss";
import { IoMdCloseCircle } from "react-icons/io";
import GoogleLoginButton from "../GoogleLogin";
import FacebookLoginButton from "../FacebookLogin";

const LoginForm = ({ handleCloseModal }) => {
  return (
    <div className="login-form">
      <div className="close-icon-div" onClick={handleCloseModal}>
        <IoMdCloseCircle className="close-icon" />
      </div>
      <div className="login-form-header">Log In / Sign Up</div>
      <div className="modal-content flex-column">
      <div className="login-form-sub-heading">Log in / Sign up using your</div>
        <GoogleLoginButton handleCloseModal={handleCloseModal} />
        <FacebookLoginButton handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default LoginForm;
