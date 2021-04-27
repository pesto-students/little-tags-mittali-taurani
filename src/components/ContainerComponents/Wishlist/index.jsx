import "./style.scss";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";
import CartItem from "../CartItem";
import EmptyCart from "../../../assets/images/cart_empty_2.png";
import { WishlistContext } from "../../../services/wishList/Context";

const Wishlist = () => {
  const{wishListItems, removeFromWishlist} = useContext(WishlistContext);

  

  return (
    <div className="cart-main">
      {wishListItems.length > 0 ? (
        <div className="cart-main__content flex-row full-width">
          <div className="cart-main__items">
            {wishListItems.map((product, index) => (
              <CartItem key={index} product={product} wishlist={true} removeProductFromWishlist={removeFromWishlist} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-column">
          <img src={EmptyCart} alt="Cart empty" />
          <Link to={ROUTE.HOME} className="cart-empty_shopNowBtn">
            <button type="button" className="blackBg-whiteFg-btn">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
