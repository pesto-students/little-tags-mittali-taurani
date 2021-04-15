import "./_style.scss";
import React from "react";
import FooterShop from "../FooterShop";
import ContactInfo from "../../DesignComponents/ContactInfo";
import NewsletterSubscription from "../NewsletterSubscription";

const Footer = () => (
  <div>
    <div className="footer-main flex-column">
      <div className="footer-site-content flex-row">
        <FooterShop />
        <ContactInfo />
        <NewsletterSubscription />
      </div>
      <hr />
      <div className="footer-copyright flex-row">
        <span>© 2021, Myntra Pro Website</span>
        <span>All Rights Reserved.</span>
      </div>
    </div>
  </div>
);

export default Footer;
