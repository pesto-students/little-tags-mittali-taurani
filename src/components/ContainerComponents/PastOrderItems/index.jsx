import "./style.scss";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  formatNumberInCurrency,
  getSubString,
  formatNumberInUSDCurrency,
} from "../../../helper/util";
import { CurrencyContext } from "../../../services/currency/CurrencyContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SessionContext } from "../../../services/session/SessionContext";
import { CartContext } from "../../../services/cart/CartContext";

const PastOrderItem = ({ product }) => {
  const { cartItems, addProduct, updateProduct  } = useContext(CartContext);
  const { INR } = useContext(CurrencyContext);
  const { authUser } = useContext(SessionContext);

  const handleAddOrUpdateCart = (event) => {
    const isActionAdd = event.currentTarget.textContent.includes("Add");
    isActionAdd ? addProduct(product) : updateProduct(product);
  };

  const imagesInputString = product.images;

  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString];

    const isProductInCart = (product) => {
        return cartItems.find((item) => item.id === product.id);
      };

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
        <div className="cart-item__price flex-row">
        <p className="cart-item__detail">Quantity: </p>
        <h4 className="cart-item__quantity">{product.quantity}</h4>
        </div>
        
      </div>
      <div className="cart-item__sidebar flex-column">
        <div className="cart-item__total">
          Total Price: <h4>{`${price} X ${product.quantity}`}</h4>
        </div>
        {/* {!!isProductInCart(product) ? "Product already in cart": <button
          type="button"
          className="addCartBtn flex-row blackBg-whiteFg-btn"
          onClick={(event) => handleAddOrUpdateCart(event)}
          disabled={authUser && authUser.isLoggedIn ? false : true}
        >
          <HiOutlineShoppingBag />
          <h4>{"Add"}</h4>
        </button>}
        {authUser && authUser.isLoggedIn ? (
        ""
      ) : (
        <div className="login-alert__div flex-row">
          <div className="addToCart-login-msg">
            Please log in / sign up to add /update items in the cart
          </div>
          <button
            type="button"
            className="login-btn blackBg-whiteFg-btn margin-bottom"
            onClick={handleLoginClick}
          >
            Log in/ Sign up
          </button>
          {showLogin && (
            <Modal>
              <LoginForm handleCloseModal={handleLoginClick} />
            </Modal>
          )}
        </div>
          )} */}
          {!!isProductInCart(product) ? (<h4>Product already in cart</h4>): <button
          type="button"
          className="past-order__addCartBtn flex-row blackBg-whiteFg-btn"
          onClick={(event) => handleAddOrUpdateCart(event)}
          disabled={authUser && authUser.isLoggedIn ? false : true}
        >
          <HiOutlineShoppingBag />
          <h4>{"Add"}</h4>
        </button>}
      </div>
    </div>
  );
};

PastOrderItem.propTypes = {
  product: PropTypes.object.isRequired,
};

PastOrderItem.defaultProps = {
  product: {},
};

export default PastOrderItem;
