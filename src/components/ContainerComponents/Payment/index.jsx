import "./style.scss";
import React, { useContext, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../helper/constants";
import { AddressContext } from "../../../services/address/AddressContext";

const Payment = () => {
  const { addresses } = useContext(AddressContext);

  const selectedAddress = addresses.filter((address) => address.isSelected);

  const {
    firstName,
    lastName,
    address,
    city,
    state,
    pincode,
    email,
    phoneNo,
  } = selectedAddress[0];

  const paymentMethods = ["Razor Pay", "Visa /  Mastercard / UPI", "Pay Pal"];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const handleOptionChange = useCallback((id) => {
    setSelectedOptionIndex(id);
  }, []);

  return (
    <div className="payment__content flex-column">
      <h1>Delivering To</h1>
      <div className="selected-address flex-column">
        <h4>
          {firstName} {lastName}
        </h4>
        <div className="flex-column address-details">
          <span>
            {address}, {city},
          </span>
          <span>
            {state} - {pincode}
          </span>
        </div>
        <div className="flex-column address-details">
          <span>{email}</span>
          <span>{phoneNo}</span>
        </div>
      </div>
      <div className="payment__main">
        <h1>Method of Payment</h1>
        <form className="payment__form">
          {paymentMethods.map((element, index) => (
            <label key={index} className="payment-method__item flex-row">
              <input
                type="radio"
                checked={selectedOptionIndex === index}
                key={index}
                onChange={() => {
                  handleOptionChange(index);
                }}
                value={index}
              />
              {element}
            </label>
          ))}
        </form>
        <Link to={ROUTE.ORDER_PLACED} className="proceed-btn">
          <button
            type="button"
            className="blackBg-whiteFg-btn"
            onClick={() => {}}
          >
            PROCEED TO PAYMENT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
