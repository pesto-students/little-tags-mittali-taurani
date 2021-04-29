import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";

const Nav = ({ open }) => {
  return (
    <ul className={`rightnav__ul ${open ? `navOpen` : `navClose`}`} open={open}>
      <li>
        <Link className="link" to={ROUTE.WOMENS}>
          Women
        </Link>
      </li>
      <li>
        <Link className="link" to={ROUTE.MENS}>
          Men
        </Link>
      </li>
      <li>
        <Link className="link" to={ROUTE.KIDS}>
          Kids
        </Link>
      </li>
      <li>
        <Link className="link" to={ROUTE.SALE}>
          Sale
        </Link>
      </li>
      <li>
        <Link to={ROUTE.CART} className="link">
          Cart
        </Link>
      </li>
      <li>
        <Link to={ROUTE.ORDER_PLACED} className="link">
          Past Orders
        </Link>
      </li>
      <li>
        <Link to={ROUTE.WISHLIST} className="link">
          Favourites
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
