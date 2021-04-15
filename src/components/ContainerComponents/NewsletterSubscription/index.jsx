import "./style.scss";
import React from "react";
import NewsletterSubscriptionForm from "../NewsletterSubscriptionForm";

const NewsletterSubscription = () => (
  <div className="newsletter-subscription-main">
    <h4 className="newsletter-subscription-heading">Let’s stay in touch</h4>
    <div>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</div>
    <NewsletterSubscriptionForm />
  </div>
);

export default NewsletterSubscription;
