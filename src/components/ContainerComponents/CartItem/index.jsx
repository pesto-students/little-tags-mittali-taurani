import "./style.scss";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { IoBagRemoveSharp } from "react-icons/io5";
import { formatNumberInCurrency, getSubString } from "../../../helper/util";
import Quantity from "../../DesignComponents/Counter";
import { CartContext } from "../../../services/cart/CartContext";

const CartItem = ({ product }) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
  } = useContext(CartContext);

  const imagesInputString = product.images;

  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString];

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
          <h4>{formatNumberInCurrency(product["Unnamed: 17"])}</h4>
        </div>
        <p className="cart-item__detail">Quantity</p>
        <div className="cart-item__quantity">
          <Quantity
            counter={product.quantity ? product.quantity : 1}
            handleIncremant={() => increaseProductQuantity(product)}
            handleDecrement={() => decreaseProductQuantity(product)}
            disableBtn={product.quantity > 1 ? false : true}
          />
        </div>
      </div>
      <div className="cart-item__sidebar flex-column">
        <div className="cart-item__total">
          Total Price:{" "}
          <h4>{`${formatNumberInCurrency(product["Unnamed: 17"])} X ${
            product.quantity
          }`}</h4>
        </div>
        <button type="button" className="cart-item__removeBtn" onClick={() => {removeProduct(product)}}><IoBagRemoveSharp /></button>
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
