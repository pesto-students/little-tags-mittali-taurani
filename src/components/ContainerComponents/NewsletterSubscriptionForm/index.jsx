import "./style.scss";
import React, { useState } from "react";
import Modal from "../../DesignComponents/Modal";
import { IoMdCloseCircle } from "react-icons/io";

const NewsletterSubscriptionForm = () => {
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(false);
  const emailRef = React.createRef();

  const handleSubmitClick = (event) => {
    event.preventDefault();
    setShowWelcomeMsg(!showWelcomeMsg);
    emailRef.current.value = "";
  };
  return (
    <div className="subscription-form-main">
      <form onSubmit={(event) => handleSubmitClick(event)}>
        <input
          className="email-input"
          type="email"
          placeholder="your email address"
          ref={emailRef}
          required
        />
        <input className="submit-btn" type="submit" value="Subscribe" />
        {showWelcomeMsg && (
          <Modal className="welcome-modal">
            <div className="welcome-modal-container">
            <div className="close-icon-div" onClick={handleSubmitClick}>
              <IoMdCloseCircle className="close-icon" />
            </div>
              <h2>Welcome to the MyntraPro family</h2>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};

export default NewsletterSubscriptionForm;
