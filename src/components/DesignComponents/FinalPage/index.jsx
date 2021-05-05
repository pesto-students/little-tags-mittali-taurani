import "./style.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";
import ThankYou from "../../../assets/images/thank_you.gif";

const FinalPage = () => {
  console.log("final page called")
  return (
    <div className="final__main flex-column">
      <img src={ThankYou} alt="Thank you for shopping with us!" />
      <Link to={ROUTE.HOME} className="shop-more__btn">
        <button type="button" className="blackBg-whiteFg-btn">
          SHOP MORE
        </button>
      </Link>
    </div>
  );
};

export default FinalPage;
