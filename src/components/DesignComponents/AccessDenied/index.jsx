import "./style.scss";
import React, { useState } from "react";
import AccessDeniedError from "../../../assets/images/access_denied.PNG";
import LoginForm from "../../ContainerComponents/Login";
import Modal from "../../DesignComponents/Modal";

const AccessDenied = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="access-denied__main flex-column">
      <img src={AccessDeniedError} alt="Access Denied" className="margin-bottom" />
      <h1 className="login-message margin-bottom">Please log in / sign up to view current page</h1> 
      <button type="button" className="login-btn blackBg-whiteFg-btn margin-bottom" onClick={handleLoginClick}>
        Log in/ Sign up
      </button>
      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
      )}
    </div>
  );
};

export default AccessDenied;
