import myntra from "../../../static/myntra.png";
import React, { useState } from "react";
// import myntra from "../../../logo.svg";
import "./style.scss";
import Button from "../../DesignComponents/Button";
import MenuItem from "../../DesignComponents/MenuItem";
import Search from "../Search";
import LoginForm from "../Login";
import Modal from "../../DesignComponents/Modal";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="header">

      <div style={{display: "flex", }}>
        <img style={{width: '200px'}} alt={'logo'} src={myntra}/>
        <div style={{flexGrow: 2}}/>
        <Search/>
        <Button type={"user"} buttonText={"Login/Sign in"}  onClickHandler={handleLoginClick}/>
        <Button type={'favourite'} buttonText={"Favourites"}/>
        <Button type={'bag'} buttonText={"Shopping bags (2)"}/>
      </div>

      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
      )}

      <div className={'navContainer'}>
        <div className={"navBar"}>
          <MenuItem title={"Women"}/>
          <MenuItem title={"Men"}/>
            <MenuItem title={"Kids"}/>
            <MenuItem title={"SALE"}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
