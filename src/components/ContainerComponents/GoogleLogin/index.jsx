import React, { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import FirebaseContext from "../../../services/firebase/FirebaseContext";

const GoogleLoginButton = () => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignInClick = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <button type="button  flex-row" className="googleBtn" onClick={handleGoogleSignInClick}>
        <AiFillGoogleCircle className="social-icon" />
        <span>Google Account</span>
      </button>
      {!!errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default GoogleLoginButton;
