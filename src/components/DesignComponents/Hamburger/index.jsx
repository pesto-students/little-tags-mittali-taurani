import React, { useState } from "react";
import "./style.scss";
import RightNav from "./RightNav";

const Hamburger = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <div className={`burger__main ${(isNavbarOpen ? `open` : `close`)}` } onClick={handleNavbarToggle}>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={isNavbarOpen} />
    </div>
  );
};

export default Hamburger;
