import "./style.scss";
import React from "react";
// import ProductImage from "../../../assets/images/hmgoepprod.jpg";
import ImageCarousel from "../../DesignComponents/Carousel";
import ProductDetails from "../ProductDetails";

const Product = (props) => {
  console.log("prorpsps", props.match.params.id);
  const product = {
    id: "b53702392e2b6a2811774edcb41d11e4",
    date: "2019-08-06 07:14:43 +0000",
    item_id: 9038627,
    size: "11-12Y",
    brand_name: "SOJANYA",
    short_description:
      "Top fabric: 80% Silk & 20% Cotton | Bottom fabric: 80% Silk & 20% Cotton | Machine-wash",
    material_used: "Silk",
    brand: "SOJANYA Boys Blue & Black Solid Kurta with Harem Pants",
    color1: "Black | Blue",
    color2: "Blue",
    keyword: "Solid Kurta",
    images:
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/9e668546-91c1-4b77-9752-8ece4f9f8d4f1552583929386-1.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/4ce07044-bde6-4b14-9aec-cab08f67e8451552583929409-2.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/87b0599e-83cb-4d38-92b7-61ce9aeec5941552583929438-3.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/5f2d5870-7d88-4b34-b6e5-1e5fd82815791552583929461-4.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/1548b845-8f61-4e24-9850-b16297c6db7a1552583929485-5.jpg",
    decription:
      "Blue and black solid kurta with harem pants Blue straight above knee kurta, has a mandarin collar, long sleeves, straight hem, side slits Black Solid harem pants, has elasticated waistband, slip-on closure Comes with a blue and white printed nehru jacket, has a mandarin collar, sleeveless\nTop fabric: 80% Silk & 20% Cotton Bottom fabric: 80% Silk & 20% Cotton Machine-wash\nThis is must collection from SOJANYA for your kid's wardrobe this festive season.",
    desc1:
      "Blue and black solid kurta with harem pants Blue straight above knee kurta, has a mandarin collar, long sleeves, straight hem, side slits Black Solid harem pants, has elasticated waistband, slip-on closure Comes with a blue and white printed nehru jacket, has a mandarin collar, sleeveless",
    desc2: null,
    desc3:
      "This is must collection from SOJANYA for your kid's wardrobe this festive season.",
    desc4: "Clothing/Boys/Kurta Sets/SOJANYA/More by SOJANYA",
    "Unnamed: 17": 1599,
    "Unnamed: 18": 3999,
    type: "Boys",
    status: "In Stock",
    desc5: "3",
    desc6:
      "Occasion : Festive | Number of Components : 3 | Top Pattern : Solid | Top Design Styling : Regular | Bottom Type : Harem Pants | Top Fabric : Silk Blend | Dupatta : Without Dupatta | Weave Pattern : Regular | Top Type : Kurta | Wash Care : Machine Wash | Weave Type : Machine Weave | Bottom Fabric : Silk Blend | Top Hemline : Straight | Pattern Coverage : Large | Sleeve Styling : Regular Sleeves | Waistband : Elasticated | Print or Pattern Type : Solid | Bottom Pattern : Solid | Top Length : Above Knee | Neck : Mandarin Collar | Bottom Closure : Slip-On | Body or Garment Size : Garment Measurements in | Sleeve Length : Long Sleeves | Stitch : Ready to Wear | Top Shape : Straight | Slit Detail : Side Slits",
    "Unnamed: 23": null,
  };

  const imagesInputString = product.images;
  const images = imagesInputString
    ? imagesInputString.split("|")
    : [imagesInputString]; // pass "images" string value

  return (
    <div className="product-main flex-row">
      <ImageCarousel carouselData={images} />
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
