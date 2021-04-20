import "./style.scss";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../DesignComponents/Button";
import MenuItem from "../../DesignComponents/MenuItem";
import Search from "../Search";
import LoginForm from "../Login";
import Modal from "../../DesignComponents/Modal";
import { ROUTE } from "../../../helper/constants";
import myntra from "../../../static/myntra.png";
import { CartContext } from "../../../services/cart/CartContext";
import { getAllProducts } from "../../../helper/backendAPI";

function Header() {
  const { itemCount } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="header">
      <div className="headerRightContent">
        <img style={{ width: "200px" }} alt={"logo"} src={myntra} />
        <div style={{ flexGrow: 2 }} />
        <Search options={products} />
        <Button
          type={"user"}
          buttonText={"Login/Sign in"}
          onClickHandler={handleLoginClick}
        />
        <Button type={"favourite"} buttonText={"Favourites"} />
        <Link to={ROUTE.CART} className={"remove-underline"}> <Button type={"bag"} buttonText={`Shopping bag (${itemCount})`} /></Link>
       
      </div>

      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
      )}

      <div className={"navContainer"}>
        <div className={"navBar"}>
        <Link  className="link" to={ROUTE.WOMENS}>{"Women"}</Link>
        <Link className="link" to={ROUTE.MENS}>{"Men"}</Link>
        <Link className="link" to={ROUTE.KIDS}>{"Kids"}</Link>
        <Link className="link" to={ROUTE.SALE}>{"Sale"}</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
