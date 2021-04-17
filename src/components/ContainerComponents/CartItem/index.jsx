import "./style.scss";
import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item flex-column">
      <div>{product.brand}</div>
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
