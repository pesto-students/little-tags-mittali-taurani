import "./style.scss";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { IoBagRemoveSharp } from "react-icons/io5";
import Favorite from "../Favorite";
import {
  formatNumberInCurrency,
  getSubString,
  formatNumberInUSDCurrency,
} from "../../../helper/util";
import Quantity from "../../DesignComponents/Counter";
import { CartContext } from "../../../services/cart/CartContext";
import { CurrencyContext } from "../../../services/currency/CurrencyContext";

const CartItem = ({ product, wishlist, removeProductFromWishlist }) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
  } = useContext(CartContext);
  const { INR } = useContext(CurrencyContext);

  const imagesInputString = product.images;

  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString];

  const price = INR
    ? formatNumberInCurrency(product["Unnamed: 17"])
    : formatNumberInUSDCurrency(product["Unnamed: 17"]);

  return (
    <div className="cart-item  flex-row">
      <img
        className="cart-item__img"
        src={images[0].trim()}
        alt="Product snapshot not available"
      />
      <div className="cart-item__main flex-column">
        <h3 className="cart-item__brand">{product.brand_name}</h3>
        <h4 className="cart-item__name">
          {getSubString(product.brand, product.brand_name)}
        </h4>
        <div className="cart-item__price flex-row">
          <p>Price: </p>
          <h4>{price}</h4>
        </div>
        {wishlist ? null : (
          <div className="cart-item-quantity__div">
            <p className="cart-item__detail">Quantity</p>
            <div className="cart-item__quantity">
              <Quantity
                counter={product.quantity ? product.quantity : 1}
                handleIncrement={() => increaseProductQuantity(product)}
                handleDecrement={() => decreaseProductQuantity(product)}
                disableBtn={product.quantity > 1 ? false : true}
              />
            </div>
          </div>
        )}
      </div>
      <div className="cart-item__sidebar flex-column">
        {/* <div className="cart-item__total flex-row">
          <div className="cart-item-total__div">Total Price:</div>
          <h4 className="cart-item-total__h4">{` ${price} X ${product.quantity}`}</h4>
        </div>
        <button
          type="button"
          className="cart-item__removeBtn"
          onClick={() => {
            if (wishlist) {
              removeProductFromWishlist(product);
            } else {
              removeProduct(product);
            }
          }}
        >
          <IoBagRemoveSharp />
        </button> */}
        {!wishlist ? (
          <div className="cart-item__total flex-row">
            <div className="cart-item-total__div">Total Price:</div>
            <h4 className="cart-item-total__h4">{` ${price} X ${product.quantity}`}</h4>
          </div>
        ) : (
          <div></div>
        )}
        {!wishlist ? (
          <button
            type="button"
            className="cart-item__removeBtn"
            onClick={() => {
              if (wishlist) {
                removeProductFromWishlist(product);
              } else {
                removeProduct(product);
              }
            }}
          >
            <IoBagRemoveSharp />
          </button>
        ) : (
          <Favorite data={product} />
        )}
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

CartItem.defaultProps = {
  product: {},
};

export default CartItem;
