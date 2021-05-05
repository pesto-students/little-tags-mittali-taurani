import React, { useState } from "react";
import "./style.scss";
import RightNav from "./RightNav";

const Hamburger = ({handleLoginClick}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <div
        className={`burger__main ${isNavbarOpen ? `open` : `close`}`}
        onClick={handleNavbarToggle}
      >
        <div />
        <div />
        <div />
      </div>
      <RightNav open={isNavbarOpen} handleLoginClick={handleLoginClick} />
    </div>
  );
};

export default Hamburger;
