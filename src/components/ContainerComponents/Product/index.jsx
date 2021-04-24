import "./style.scss";
import React, { useState, useEffect } from "react";
import ImageCarousel from "../../DesignComponents/Carousel";
import ProductDetails from "../ProductDetails";
import { getProductByID } from "../../../helper/util";
import { getRelevantProducts } from "../../../helper/relevancy";
import { getAllProducts } from "../../../helper/backendAPI";
import Card from "../../DesignComponents/Card";

const Product = (props) => {
  const [product, setProduct] = useState(undefined);
  const [similarProducts, setSimilarProducts] = useState(undefined);

  const imagesInputString = (product && product.images) || "";
  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString]; // pass "images" string value

  useEffect( () => {
     getProductByID(props.match.params.id).then((pro) => setProduct(pro));
    if (product && product.brand_name) {
       getAllProducts().then((res) => {
        // console.log(res.data);
        setSimilarProducts(getRelevantProducts(res.data, product.brand_name));
      });
    }
  }, [props.match.params.id, product]);
  console.log("similarProducts", similarProducts);
  const similarProductsMap =
    similarProducts &&
    similarProducts.slice(1, 20).map((data) => {
if(data.score > 0.1){
  return <Card key={data.id} data={data} />;
}
      
    });

  console.log("similarProducts", similarProductsMap);
  return (
    <div>
      {product ? (
        <div className="flex-column">
          <div className="product-main flex-row">
            <ImageCarousel carouselData={images} />
            <ProductDetails product={product} />
          </div>
          <div>similar products</div>
          <div className="result-list">{similarProductsMap}</div>
        </div>
      ) : (
        <div className="product-main flex-row">
          Ooops , Product not available
        </div>
      )}
    </div>
  );
};

export default Product;
