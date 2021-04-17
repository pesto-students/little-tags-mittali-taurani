import "./style.scss";
import React from "react";
// import ProductImage from "../../../assets/images/hmgoepprod.jpg";
import ImageCarousel from "../../DesignComponents/Carousel";
import ProductDetails from "../ProductDetails";

const Product = (props) => {

  console.log("props.match.prarms.id",props.match.params.id);
  const imagesInputString =
    "http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/9e668546-91c1-4b77-9752-8ece4f9f8d4f1552583929386-1.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/4ce07044-bde6-4b14-9aec-cab08f67e8451552583929409-2.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/87b0599e-83cb-4d38-92b7-61ce9aeec5941552583929438-3.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/5f2d5870-7d88-4b34-b6e5-1e5fd82815791552583929461-4.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/1548b845-8f61-4e24-9850-b16297c6db7a1552583929485-5.jpg";
  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString]; // pass "images" string value

  return (
    <div className="product-main flex-row">
      <ImageCarousel carouselData={images} />
      <ProductDetails />
    </div>
  );
};

export default Product;
