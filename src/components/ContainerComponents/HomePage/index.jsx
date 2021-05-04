import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import mensimg from "../../../assets/images/mensHader.png";
import { getRelevantProducts } from "../../../helper/relevancy";
// import womensHeaderImg from "../../../assets/images/womensHeaderImg.png";
import { getAllProducts } from "../../../helper/backendAPI";
import { ROUTE } from "../../../helper/constants";
import Card from "../../DesignComponents/Card";
import SimilarProducts from "../../DesignComponents/SimilarProducts";
import "./style.scss";

function HomePage() {
  
  const [mensShirt, setMensShirt] = useState([]);
  const [womenProduct, setwomenProduct] = useState([]);
  const [kids, setkids] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setMensShirt(getRelevantProducts(res.data, "British "));
      setwomenProduct(getRelevantProducts(res.data, "bollywood vogue "));
      setkids(getRelevantProducts(res.data, "aj dezines"));
    });
  }, []);

  const history = useHistory();

  const goTo = (path) => () => {
    // console.log("path", path);
    history.push(path);
  };

  const mensProductsMap = mensShirt
    .slice(0, 4)
    .map((data) => <Card key={data.id} data={data} />);

  const womenProductsMap = womenProduct
    .slice(0, 4)
    .map((data) => <Card key={data.id} data={data} />);

  const kidsMap = kids
    .slice(0, 4)
    .map((data) => <Card key={data.id} data={data} />);

  return (
    <div>
      <div onClick={goTo(ROUTE.MENS)} className="banner-container">
        <img className="mens-top-page-image" src={mensimg} alt="banner" />
        <div>
          <div className={"trendsetter-text-first"}>
            Be the trendsetter with
          </div>
          <div className={"trendsetter-text"}>Casual Comfortable Kurtas</div>
          <div className="trendsetter-text-mens-shop">
            Mens Collection Shop Now
          </div>
        </div>
      </div>

      <div>Mens Shits</div>

      <SimilarProducts similarProductsMap={mensProductsMap} />
      {/* <div className="result-list">{mensProductsMap}</div> */}

      <img
        onClick={goTo(ROUTE.WOMENS)}
        src="https://shopforaurelia.com/blog/wp-content/uploads/2021/03/Aurelia-fresh-desktop-website-banner.jpg"
        className="full-width-img"
        alt="banner"
      />
      <SimilarProducts similarProductsMap={womenProductsMap} />

      <img
        onClick={goTo(ROUTE.KIDS)}
        className="full-width-img"
        src={
          "https://sojanya.com/pub/media//ibnab/owlsliders/images/w/e/websitebanner1.png"
        }
        alt="banner"
      />
      <SimilarProducts similarProductsMap={kidsMap} />
    </div>
  );
}

export default HomePage;
