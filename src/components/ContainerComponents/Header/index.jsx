import React, { useState, useContext} from "react";
import {Link} from 'react-router-dom';
import Button from "../../DesignComponents/Button";
import MenuItem from "../../DesignComponents/MenuItem";
import Search from "../Search";
import LoginForm from "../Login";
import Modal from "../../DesignComponents/Modal";
import { ROUTE } from "../../../helper/Constants";
import myntra from "../../../static/myntra.png";
import { CartContext } from "../../../services/cart/CartContext";

import "./style.scss";

function Header() {
  const { itemCount } = useContext(CartContext);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="header">
      <div className='headerRightContent'>
        <img style={{ width: '200px' }} alt={'logo'} src={myntra} />
        <div style={{ flexGrow: 2 }} />
        <Search />
        <Button
          type={"user"}
          buttonText={"Login/Sign in"}
          onClickHandler={handleLoginClick}
        />
        <Button type={"favourite"} buttonText={"Favourites"} />
        <Button type={"bag"} buttonText={`Shopping bag (${itemCount})`} />
      </div>

      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
      )}

      <div className={'navContainer'}>
        <div className={"navBar"}>
          <MenuItem title={"Women"}>
            <Link to={ROUTE.WOMENS}>{'Women'}</Link>
          </MenuItem>
          <MenuItem title={"Men"}>
            <Link to={ROUTE.MENS}>{'Men'}</Link>
          </MenuItem>
          
          <MenuItem title={"Kids"}>
            <Link to={ROUTE.KIDS}>{'Kids'}</Link>
          </MenuItem>
          <MenuItem title={"SALE"}>
            <Link to={ROUTE.SALE}>{'Sale'}</Link>
          </MenuItem>
        </div>
      </div>
    </div>
  );
}

export default Header;
