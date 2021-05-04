import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";
import { RiUser3Line } from "react-icons/ri";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";

const Nav = ({ open, handleLoginClick }) => {
  const firebase = useContext(FirebaseContext);

  const { authUser } = useContext(SessionContext);

  const handleLogOutClick = () => {
    firebase.doSignOut();
  };

  return (
    <div
      className={`rightnav__div ${open ? `navOpen` : `navClose`}`}
      open={open}
    >
      <div className="rightnav__item">
        {authUser && authUser.isLoggedIn ? (
          <h4 className="welcome-msg">Hey, {authUser.userName}</h4>
        ) : (
          ""
        )}
      </div>
      <div className="rightnav__item">
        <Link className="link" to={ROUTE.WOMENS}>
          Women
        </Link>
      </div>

      <div className="rightnav__item">
        <Link className="link" to={ROUTE.MENS}>
          Men
        </Link>
      </div>

      <div className="rightnav__item">
        <Link className="link" to={ROUTE.KIDS}>
          Kids
        </Link>
      </div>

      <div className="rightnav__item">
        <Link className="link" to={ROUTE.SALE}>
          Sale
        </Link>
      </div>

      <div className="rightnav__item">
        <Link to={ROUTE.CART} className="link">
          Cart
        </Link>
      </div>

      <div className="rightnav__item">
        <Link to={ROUTE.ORDER_PLACED} className="link">
          Past Orders
        </Link>
      </div>

      <div className="rightnav__item">
        <Link to={ROUTE.WISHLIST} className="link">
          Favourites
        </Link>
      </div>

      <div className="rightnav__item">
      <button
            type="button"
            className="login__btn flex-row blackBg-whiteFg-btn"
            onClick={authUser && authUser.isLoggedIn ? handleLogOutClick : handleLoginClick}
          >
            <RiUser3Line />
            <span>{authUser && authUser.isLoggedIn ? "Log Out" : "Log in / Sign up"}</span>
          </button>
        {/*{authUser && authUser.isLoggedIn ? (
          <button
            type="button"
            className="blackBg-whiteFg-btn"
            onClick={handleLogOutClick}
          >
            Log Out
          </button>
        ) : (
          <button
            type="button"
            className="login__btn flex-row blackBg-whiteFg-btn"
            onClick={handleLoginClick}
          >
            <RiUser3Line />
            <span>Log in / Sign up</span>
          </button>
        )}*/}
      </div>
    </div>
  );
};

export default Nav;
