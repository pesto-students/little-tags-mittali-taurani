import React from "react";
import "./style.scss";

const Modal = ({ children }) => {
  return <div className="modal flex-column">{children}</div>;
};

export default Modal;
