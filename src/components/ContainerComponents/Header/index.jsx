import "./style.scss";
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../DesignComponents/Button";
import Search from "../Search";
import LoginForm from "../Login";
import Modal from "../../DesignComponents/Modal";
import { ROUTE } from "../../../helper/constants";
import Myntra from "../../../assets/images/NewMyntraLogo.PNG";
import { CartContext } from "../../../services/cart/CartContext";
import { getAllProducts } from "../../../helper/backendAPI";
import { WishlistContext } from "../../../services/wishList/Context";
import { SessionContext } from "../../../services/session/SessionContext";
import ProfileDropdown from "../../DesignComponents/ProfileDropdown";
import Hamburger from "../../DesignComponents/Hamburger";
import { ToggleButton } from "../../DesignComponents/ToggleButton";

function Header() {
  const { itemCount } = useContext(CartContext);
  const { wishListItems } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(false);
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
    history.push(path);
  };

  return (
    <div className="header">
      <div className="header__main flex-row">
        {/* <img style={{ width: "200px" }} alt={"logo"} src={myntra} /> 
        <div onClick={goTo(ROUTE.HOME)} className="header-logo">
          [untitled]
        </div>*/}
       {/* <div className="header-logo" onClick={goTo(ROUTE.HOME)}>
          <img className="header-logo__img" alt="Website logo" src={Myntra} />
        </div>*/}
        <img className="header-logo__img" alt="Website logo" src={Myntra} onClick={goTo(ROUTE.HOME)}/>
        <div className="header-middle__main flex-row">
        <Search options={products} />
        <ToggleButton
          selected={selected}
          toggleSelected={() => {
            setSelected(!selected);
          }}
        /></div>

        <div className="header-user__actions flex-row">
          {authUser && authUser.isLoggedIn ? (
            <ProfileDropdown />
          ) : (
            <Button
              type={"user"}
              buttonText={"Log in / Sign up"}
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
        </div>
        <Hamburger handleLoginClick={handleLoginClick} />

        {showLogin && (
          <Modal>
            <LoginForm handleCloseModal={handleLoginClick} />
          </Modal>
        )}
      </div>
      <div className={"navContainer"}>
        <div className="navBar full-width flex-row">
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
