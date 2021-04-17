import "./style.scss";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Favorite from "../Favorite";
import ProductDescription from "../../DesignComponents/ProductDescription";
import SizeDropDown from "../../DesignComponents/DropDown";
import Quantity from "../../DesignComponents/Counter";
import ColorOptions from "../../DesignComponents/ColorOptions";
import { CartContext } from "../../../services/cart/CartContext";
import { formatNumberInCurrency, getSubString } from "../../../helper/util";

const ProductDetails = ({ product }) => {
  const {
    cartItems,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useContext(CartContext);

  const isProductInCart = (product) => {
    return cartItems.find((item) => item.id === product.id);
  };

  const sizeRef = React.createRef();

  const [hasError, setHasError] = useState(false);

  const handleAddToCart = () => {
    if (sizeRef.current) {
      if (sizeRef.current.value !== "") {
        sizeRef.current.parentElement.classList.remove("margin-bottom");
        setHasError(false);
        product.selectedSize = sizeRef.current.value;
        addProduct(product);
      } else {
        sizeRef.current.parentElement.classList.add("margin-bottom");
        setHasError(true);
      }
    } else addProduct(product);
  };

  const createArray = (inputString) => {
    return inputString ? inputString.split("|") : [inputString];
  };

  const getSizeArray = (size) => {
    let sizeArray = null;
    const sizeInAlpabets = ["XS", "S", "M", "L", "XL", "XXL"];
    // Sequence generator function
    const range = (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      );
    const sizeInNumbers = !isNaN(size)
      ? 25 <= size <= 40
        ? size % 2 === 0
          ? range(26, 40, 2)
          : range(25, 35, 1)
        : null
      : [];
    const sizeForKids = [
      "4-5Y",
      "5-6Y",
      "6-7Y",
      "7-8Y",
      "8-9Y",
      "9-10Y",
      "10-11Y",
      "11-12Y",
    ];
    sizeArray =
      sizeInAlpabets.indexOf(size) > -1
        ? sizeInAlpabets
        : sizeInNumbers.indexOf(Number(size)) > -1
        ? sizeInNumbers
        : sizeForKids.indexOf(size) > -1
        ? sizeForKids
        : null;
    return sizeArray;
  };

  return (
    <div className="product-details-main flex-column">
      <h3 className="product-details-brand margin-bottom">
        {product.brand_name}
      </h3>
      <div className="product-details-title flex-row">
        <h5 className="product-details-name">
          {getSubString(product.brand, product.brand_name)}
        </h5>
        <Favorite />
      </div>
      <h5 className="product-details-price">
        {formatNumberInCurrency(product["Unnamed: 17"])}
      </h5>
      <div className="product-details-heading">Color</div>
      <ColorOptions options={createArray(product.color1)} />
      <ProductDescription description={product.decription} />
      <SizeDropDown
        options={getSizeArray(product.size)}
        reference={sizeRef}
        selectedValue={
          !!isProductInCart(product)
            ? isProductInCart(product).selectedSize
            : ""
        }
      />
      {hasError && <div className="error_div">Please select a size</div>}
      {!!isProductInCart(product) && isProductInCart(product).quantity > 0 ? (
        <div className="product-details-quantity">
          <div className="product-details-heading">Qty in Bag:</div>
          <Quantity
            counter={
              isProductInCart(product).quantity
                ? isProductInCart(product).quantity
                : 1
            }
            handleIncremant={() => increaseProductQuantity(product)}
            handleDecrement={() =>
              isProductInCart(product).quantity > 1
                ? decreaseProductQuantity(product)
                : removeProduct(product)
            }
          />
        </div>
      ) : (
        <button
          type="button"
          className="addCartBtn flex-row blackBg-whiteFg-btn"
          onClick={() => handleAddToCart()}
        >
          <HiOutlineShoppingBag />
          <h4>Add</h4>
        </button>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

ProductDetails.defaultProps = {
  product: {},
};

export default ProductDetails;
