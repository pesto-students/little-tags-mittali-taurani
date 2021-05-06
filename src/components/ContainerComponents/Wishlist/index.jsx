import "./style.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";
import CartItem from "../CartItem";
import Favorite from "../Favorite";
import EmptyWishlist from "../../../assets/images/wishlist_empty.PNG";
import { WishlistContext } from "../../../services/wishList/Context";

const Wishlist = () => {
  const { wishListItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishList-main">
      {wishListItems.length > 0 ? (
        <div className="cart-main__content flex-row full-width">
          <div className="cart-main__items">
            {wishListItems.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                wishlist={true}
                removeProductFromWishlist={removeFromWishlist}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-column">
          <img src={EmptyWishlist} alt="Wishlist empty" />
          <Link to={ROUTE.HOME} className="cart-empty_shopNowBtn">
            <button type="button" className="blackBg-whiteFg-btn">
              Explore
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
