import "./style.scss";
import React, { useContext } from "react";
import { CartContext } from "../../../services/cart/CartContext";
import { formatNumberInCurrency } from "../../../helper/util";
import CartItem from "../CartItem";

const Cart = () => {
  const {
    cartItems,
    checkout,
    handleCheckout,
    handleClearCart,
    itemCount,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="cart-main flex-column">
      <h1 className="cart-main__heading">Shopping Bag</h1>
      {cartItems.length > 0 ? (
        <div className="cart-main__content flex-row full-width">
          <div className="cart-main__items">
            {cartItems.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </div>
          <div className="cart-main__sidebar flex-column">
            <div className="cart-sidebar__total">
              <div className="margin-bottom">
                <p>Total Items</p>
                <h3>{itemCount}</h3>
              </div>
              <div className="margin-bottom">
                <p>Total Payment</p>
                <h3>{formatNumberInCurrency(totalPrice)}</h3>
              </div>
              <hr className="full-width margin-bottom" />
              <div>
                <button
                  type="button"
                  className="blackBg-whiteFg-btn"
                  onClick={handleCheckout}
                >
                  CHECKOUT
                </button>
                <button
                  type="button"
                  className="blackBg-whiteFg-btn"
                  onClick={handleClearCart}
                >
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : checkout && cartItems.length === 0 ? (
        <div>Checkout successfull</div>
      ) : (
        <h3>Your shopping bag is empty</h3>
      )}
    </div>
  );
};

export default Cart;
