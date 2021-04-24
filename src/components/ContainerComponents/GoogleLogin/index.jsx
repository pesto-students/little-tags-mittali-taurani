import React, { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import FirebaseContext from "../../../services/firebase/FirebaseContext";

const GoogleLoginButton = ({ handleCloseModal }) => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignInClick = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        console.log(authUser);
        handleCloseModal();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  return (
    <div className="full-width flex-column">
      <button
        type="button flex-row"
        className="googleBtn"
        onClick={handleGoogleSignInClick}
      >
        <AiFillGoogleCircle className="social-icon" />
        <span>Google Account</span>
      </button>
      {!!errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default GoogleLoginButton;
