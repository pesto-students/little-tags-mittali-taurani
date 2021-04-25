import React, { useEffect, useContext, useState } from "react";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";
import AccessDenied from "../../DesignComponents/AccessDenied";

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const { authUser } = useContext(SessionContext);

    const next = (authUser) => {};

    useEffect(() => {
      firebase.onAuthChangeListener(next);
    }, []);

    return authUser && authUser.isLoggedIn ? (
      <Component {...props} />
    ) : (
      <AccessDenied />
    );
  };

  return NewComponent;
};
// const mapStateToProps = (state) => ({
//   authUser: state.sessionState.authUser,
// });

export default withAuthorization;
