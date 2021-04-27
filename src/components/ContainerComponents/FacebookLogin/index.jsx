import React, { useContext } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import FirebaseContext from "../../../services/firebase/FirebaseContext";

const FacebookLoginButton = ({ handleCloseModal, setErrorMessage }) => {
  const firebase = useContext(FirebaseContext);

  const handleFacebookSignInClick = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        console.log(authUser);
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
        className="facebookBtn flex-row"
        onClick={handleFacebookSignInClick}
      >
        <IoLogoFacebook className="social-icon" />
        <span>Facebook Account</span>
      </button>
    </div>
  );
};

export default FacebookLoginButton;
