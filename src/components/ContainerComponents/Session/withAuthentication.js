import React, { useEffect, useContext } from "react";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { AUTH_USER } from "../../../helper/constants";
import { SessionContext } from "../../../services/session/SessionContext";

const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const { setAuthUser } = useContext(SessionContext);

    const setItemInStorage = (authUser) => {
      localStorage.setItem(AUTH_USER, JSON.stringify(authUser));
    };

    const next = (authUser) => {
      authUser.isLoggedIn = true;
      setItemInStorage(authUser);
      setAuthUser(authUser);
    };

    const fallback = () => {
      localStorage.removeItem(AUTH_USER);
      setAuthUser(null);
    };

    useEffect(() => {
      const loggedUser = JSON.parse(localStorage.getItem(AUTH_USER));
      setAuthUser(loggedUser);
      firebase.onAuthChangeListener(next, fallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };

  return NewComponent;
};

export default withAuthentication;
