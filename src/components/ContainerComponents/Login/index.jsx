import React, { useState } from "react";
import "./style.scss";
import { IoMdCloseCircle } from "react-icons/io";
import GoogleLoginButton from "../GoogleLogin";
import FacebookLoginButton from "../FacebookLogin";

const LoginForm = ({ handleCloseModal }) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="login-form">
      <div className="close-icon-div" onClick={handleCloseModal}>
        <IoMdCloseCircle className="close-icon" />
      </div>
      <div className="login-form-header">Log In / Sign Up</div>
      <div className="modal-content flex-column">
        <div className="login-form-sub-heading">
          Log in / Sign up using your
        </div>
        {!!errorMessage && <div className="error__element flex-row"><h4>Error: </h4>{errorMessage} Please try again.</div>}
        <GoogleLoginButton
          handleCloseModal={handleCloseModal}
          setErrorMessage={setErrorMessage}
        />
        <FacebookLoginButton
          handleCloseModal={handleCloseModal}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </div>
  );
};

export default LoginForm;
