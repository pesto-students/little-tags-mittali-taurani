import "./style.scss";
import React from "react";
// import Amazon from "../../../assets/icons/amazon_inverse.svg";
// import JCB from "../../../assets/icons/jcb_inverse.svg";
// import Mastercard from "../../../assets/icons/mastercard_inverse.svg";
// import Paypal from "../../../assets/icons/paypal_inverse.svg";
// import Visa from "../../../assets/icons/visa_inverse.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const ContactInfo = () => (
  <div className="contact-info-main">
    <h4 className="contact-info-heading">CONTACT INFO</h4>
    <div className="contact-phone">Phone: (+91) 9876 543 210</div>
    <div className="contact-address">
      Address: 1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United
      State
    </div>
    <div className="social-media-desc">
      <h4>Connect with us:</h4>
      <div className="apps-icon">
        <a href="#region" className="remove-underline">
          <FaFacebook />
        </a>
        <a href="#region" className="remove-underline">
          <FaTwitter />
        </a>
        <a href="#region" className="remove-underline">
          <FaInstagram />
        </a>
        <a href="#region" className="remove-underline">
          <FaYoutube />
        </a>
        <a href="#region" className="remove-underline">
          <FaPinterest />
        </a>
      </div>
    </div>
    {/*<div className="payment-methods-desc">We accept:</div>
    <div className="cards-icon">
      <img src={Amazon} alt="Amazon" />
      <img src={JCB} alt="JCB" />
      <img src={Mastercard} alt="Mastercard" />
      <img src={Paypal} alt="Paypal" />
      <img src={Visa} alt="Visa" />
</div>*/}
  </div>
);

export default ContactInfo;
