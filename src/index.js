import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FirebaseContext from "./services/firebase/FirebaseContext";
import Firebase from "./services/firebase/Firebase";
import SessionContextProvider from "./services/session/SessionContext";

ReactDOM.render(
  <React.StrictMode>
    <SessionContextProvider>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </SessionContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
