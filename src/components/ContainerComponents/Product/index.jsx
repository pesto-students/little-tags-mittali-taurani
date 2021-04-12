import "./style.scss";
import React, { useState } from "react";
import ProductImage from "../../../assets/images/hmgoepprod.jpg";
import ProductDetails from "../ProductDetails";

const Product = () => {
  return (
    <div className="product-main flex-row">
      <img className="carousel" src={ProductImage} alt="Product" width="50%" />
      <ProductDetails />
    </div>
  );
};

export default Product;
