import "./style.scss";
import React from "react";
import Favorite from "../Favorite";
import ProductDescription from "../../DesignComponents/ProductDescription";
import SizeDropDown from "../../DesignComponents/DropDown";
import Quantity from "../../DesignComponents/Counter";
import ColorOptions from "../../DesignComponents/ColorOptions";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductDetails = () => {
  const testDescription =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  const testSize = "XL";

  const color1 = "Brown | Olive | Green | Mustard"; //colo1 values : (colors or null)
  const colors = color1 ? color1.split("|") : [color1];

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
      <div className="product-details-heading flex-row">
        <div className="product-title">Loose Straight High Jeans</div>
        <Favorite />
      </div>
      <div className="product-price">Rs. 2,299</div>
      <div className="product-details-color-title">Color</div>
      <ColorOptions options={colors} />
      <ProductDescription description={testDescription} />
      <SizeDropDown options={getSizeArray(testSize)} />
      <Quantity />
      <button type="button" className="addCartBtn flex-row blackBg-whiteFg-btn">
        <HiOutlineShoppingBag />
        <h4>Add</h4>
      </button>
    </div>
  );
};

export default ProductDetails;
