// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

class Firebase {
  constructor() {
    // app.initializeApp(config);

        if (!firebase.apps.length) {
          firebase.initializeApp(config);
  }
  // else{
  //   app.app();
  // }



    // !app.apps.length ? app.initializeApp(config) : app.app();
    this.db = firebase.firestore();
    this.auth = firebase.auth();

    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  user = (uid) => this.db.ref(`/users/${uid}`);

  doSignOut = () => this.auth.signOut();

  onAuthChangeListener = (next, fallback = () => {}) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              ...dbUser,
            };
            // console.log(`authUser:: listener:: ${user}`);
            next(user);
          });
      } else {
        // console.log(`Now user is not available`);
        fallback();
      }
    });
  };
}

export default Firebase;
