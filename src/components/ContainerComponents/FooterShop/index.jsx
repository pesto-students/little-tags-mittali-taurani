import "./style.scss";
import React from "react";
import Amazon from "../../../assets/icons/amazon_inverse.svg";
import JCB from "../../../assets/icons/jcb_inverse.svg";
import Mastercard from "../../../assets/icons/mastercard_inverse.svg";
import Paypal from "../../../assets/icons/paypal_inverse.svg";
import Visa from "../../../assets/icons/visa_inverse.svg";

const FooterShop = () => (
  <div className="footer-shop-main flex-column">
    <h4 className="shop-heading">SHOP</h4>
    <a href="#region" className="footer-shop-women remove-underline">
      Women
    </a>
    <a href="#region" className="footer-shop-men remove-underline">
      Men
    </a>
    <a href="#region" className="footer-shop-kids remove-underline">
      Kids
    </a>
    <div className="payment-methods-desc">
      <h4>We accept:</h4>
      <div className="cards-icon">
        <img src={Amazon} alt="Amazon" />
        <img src={JCB} alt="JCB" />
        <img src={Mastercard} alt="Mastercard" />
        <img src={Paypal} alt="Paypal" />
        <img src={Visa} alt="Visa" />
      </div>
    </div>
  </div>
);

export default FooterShop;
