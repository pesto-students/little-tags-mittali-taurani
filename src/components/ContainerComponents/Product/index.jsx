import "./style.scss";
import React, { useState } from "react";
import ImageCarousel from "../../DesignComponents/Carousel";
import ProductDetails from "../ProductDetails";
import {getProductByID} from '../../../helper/util';

const Product = (props) => {
  
  const [product, setProduct] = useState(undefined)
  getProductByID(props.match.params.id).then(pro =>
    setProduct(pro)
  );
  
  const imagesInputString = (product &&  product.images) || "";
  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString]; // pass "images" string value

  return (
    <div >
      {product ? <div className="product-main flex-row">
      <ImageCarousel carouselData={images} />
      <ProductDetails product={product} />
      </div>: <div className="product-main flex-row">Ooops , Product not available</div>}
    </div>
  );
};

export default Product;
