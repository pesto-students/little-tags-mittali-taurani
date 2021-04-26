import React, { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import FirebaseContext from "../../../services/firebase/FirebaseContext";

const GoogleLoginButton = ({ handleCloseModal, setErrorMessage }) => {
  const firebase = useContext(FirebaseContext);

  const handleGoogleSignInClick = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          userName: authUser.user.displayName,
          roles: {},
        });
        handleCloseModal();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="full-width flex-column">
      <button
        type="button"
        className="googleBtn flex-row"
        onClick={handleGoogleSignInClick}
      >
        <AiFillGoogleCircle className="social-icon" />
        <span>Google Account</span>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
