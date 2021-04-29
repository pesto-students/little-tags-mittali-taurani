import "./style.scss";
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../DesignComponents/Button";
import Search from "../Search";
import LoginForm from "../Login";
import Modal from "../../DesignComponents/Modal";
import { ROUTE } from "../../../helper/constants";
// import myntra from "../../../static/myntra.png";
import { CartContext } from "../../../services/cart/CartContext";
import { getAllProducts } from "../../../helper/backendAPI";
import { WishlistContext } from "../../../services/wishList/Context";
import { SessionContext } from "../../../services/session/SessionContext";
import ProfileDropdown from "../../DesignComponents/ProfileDropdown";
import Hamburger from "../../DesignComponents/Hamburger";

function Header() {
  const { itemCount } = useContext(CartContext);
  const { wishListItems } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const { authUser } = useContext(SessionContext);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const goTo = (path) => () => {
    console.log("path", path);
    history.push(path);
  };

  return (
    <div className="header">
      <div className="headerRightContent">
        {/* <img style={{ width: "200px" }} alt={"logo"} src={myntra} /> */}
        <div onClick={goTo(ROUTE.HOME)} className="header-logo">
          [untitled]
        </div>
        <div style={{ flexGrow: 2 }} />
        <Search options={products} />

        {authUser && authUser.isLoggedIn ? (
          <ProfileDropdown />
        ) : (
          <Button
            type={"user"}
            buttonText={"Login/Sign in"}
            onClickHandler={handleLoginClick}
          />
        )}

        <Button
          onClickHandler={goTo(ROUTE.WISHLIST)}
          type={"favourite"}
          buttonText={`Favourites (${wishListItems.length})`}
        />
        <Button
          onClickHandler={goTo(ROUTE.CART)}
          type={"bag"}
          buttonText={`Cart (${itemCount})`}
        />

        <Hamburger />

      </div>

      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
      )}

      <div className={"navContainer"}>
        <div className={"navBar"}>
          <Link className="link" to={ROUTE.WOMENS}>
            {"Women"}
          </Link>
          <Link className="link" to={ROUTE.MENS}>
            {"Men"}
          </Link>
          <Link className="link" to={ROUTE.KIDS}>
            {"Kids"}
          </Link>
          <Link className="link" to={ROUTE.SALE}>
            {"Sale"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
