import "./style.scss";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";
import { CartContext } from "../../../services/cart/CartContext";
import { formatNumberInCurrency } from "../../../helper/util";
import CartItem from "../CartItem";
import EmptyCart from "../../../assets/images/cart_empty_2.png";
import withAuthorization from "../Session/withAuthorization";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";
import {
  USER_CART_STORAGE_KEY,
} from "../../../helper/constants";

const Cart = () => {
  const {
    cartItems,
    checkout,
    handleCheckout,
    handleClearCart,
    itemCount,
    totalPrice,
  } = useContext(CartContext);

  const { authUser } = useContext(SessionContext);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (authUser && authUser.isLoggedIn)
    {
      firebase.saveDataToFirebase(authUser.uid, USER_CART_STORAGE_KEY, cartItems);
    }
  }, [authUser, cartItems, firebase]);

  const calculateGST = (amount) => {
    return (parseFloat(amount) * parseFloat(5)) / 100;
  };

  const calulateTotalPayable = (amount) => {
    return calculateGST(amount) + parseFloat(amount);
  };

  return (
    <div className="cart-main">
      {cartItems.length > 0 ? (
        <div className="cart-main__content flex-row full-width">
          <div className="cart-main__items">
            {cartItems.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </div>
          <div className="cart-main__sidebar flex-column">
            <h3 className="margin-bottom">BILLING DETAILS</h3>
            <div className="cart-sidebar__total">
              <div className="margin-bottom">
                <p>Total Items</p>
                <h3>{itemCount}</h3>
              </div>
              <div className="margin-bottom">
                <p>Order Value</p>
                <h3>{formatNumberInCurrency(totalPrice)}</h3>
              </div>
              <div className="margin-bottom">
                <p>GST (5%)</p>
                <h3>{formatNumberInCurrency(calculateGST(totalPrice))}</h3>
              </div>
              <div className="margin-bottom">
                <p>Total Payable</p>
                <h2>
                  {formatNumberInCurrency(calulateTotalPayable(totalPrice))}
                </h2>
              </div>
              <hr className="full-width margin-bottom" />
              <Link to={ROUTE.SHIPPING_ADDRESS}>
                <button
                  type="button"
                  className="blackBg-whiteFg-btn"
                  onClick={handleCheckout}
                >
                  CHECKOUT
                </button>
              </Link>
              <button
                type="button"
                className="cart-sidebar__clrBtn"
                onClick={handleClearCart}
              >
                CLEAR
              </button>
            </div>
          </div>
        </div>
      ) : checkout && cartItems.length === 0 ? (
        <div>Checkout successfull</div>
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

export default withAuthorization(Cart);
