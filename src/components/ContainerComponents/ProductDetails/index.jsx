import "./style.scss";
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Favorite from "../Favorite";
import ProductDescription from "../../DesignComponents/ProductDescription";
import SizeDropDown from "../../DesignComponents/DropDown";
import Quantity from "../../DesignComponents/Counter";
import ColorOptions from "../../DesignComponents/ColorOptions";
import { CartContext } from "../../../services/cart/CartContext";
import {
  formatNumberInCurrency,
  getSubString,
  formatNumberInUSDCurrency,
} from "../../../helper/util";
import { SessionContext } from "../../../services/session/SessionContext";
import LoginForm from "../../ContainerComponents/Login";
import Modal from "../../DesignComponents/Modal";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { CurrencyContext } from "../../../services/currency/CurrencyContext";
import { USER_CART_STORAGE_KEY } from "../../../helper/constants";

const ProductDetails = ({ product }) => {
  const { cartItems, addProduct, updateProduct } = useContext(CartContext);
  const { INR } = useContext(CurrencyContext);
  // console.log("useContext(CurrencyContext)",useContext(CurrencyContext));

  const { authUser } = useContext(SessionContext);

  const firebase = useContext(FirebaseContext);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const isProductInCart = (product) => {
    return cartItems.find((item) => item.id === product.id);
  };

  const sizeRef = React.createRef();

  const [hasError, setHasError] = useState(false);

  const [quantity, setQuantity] = useState(
    !!isProductInCart(product) ? isProductInCart(product).quantity : 1
  );

  useEffect(() => {
    if (authUser && authUser.isLoggedIn)
      firebase.saveDataToFirebase(
        authUser.uid,
        USER_CART_STORAGE_KEY,
        cartItems
      );
  }, [authUser, cartItems, firebase]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleAddOrUpdateCart = (event) => {
    const isActionAdd = event.currentTarget.textContent.includes("Add");
    product.quantity = quantity;
    if (sizeRef.current) {
      if (sizeRef.current.value !== "") {
        sizeRef.current.parentElement.classList.remove("margin-bottom");
        setHasError(false);
        product.selectedSize = sizeRef.current.value;
        isActionAdd ? addProduct(product) : updateProduct(product);
      } else {
        sizeRef.current.parentElement.classList.add("margin-bottom");
        setHasError(true);
      }
    } else isActionAdd ? addProduct(product) : updateProduct(product);
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
        <Favorite data={product} />
      </div>
      <h5 className="product-details-price">
        {INR
          ? formatNumberInCurrency(product["Unnamed: 17"])
          : formatNumberInUSDCurrency(product["Unnamed: 17"])}
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
      <div className="product-details-quantity">
        <div className="product-details-heading">Quantity</div>
        <Quantity
          counter={quantity}
          handleIncrement={() => handleIncreaseQuantity()}
          handleDecrement={() => handleDecreaseQuantity()}
          disableBtn={quantity > 1 ? false : true}
        />
      </div>
      <button
        type="button"
        className="addCartBtn flex-row blackBg-whiteFg-btn"
        onClick={
          authUser && authUser.isLoggedIn
            ? (event) => handleAddOrUpdateCart(event)
            : handleLoginClick
        }
        // disabled={authUser && authUser.isLoggedIn ? false : true}
      >
        <HiOutlineShoppingBag />
        <h4>{!!isProductInCart(product) ? "Update" : "Add"}</h4>
      </button>
      {/* {authUser && authUser.isLoggedIn ? (
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
      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
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
