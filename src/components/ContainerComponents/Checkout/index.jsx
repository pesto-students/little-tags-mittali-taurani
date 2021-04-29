import "./style.scss";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { ROUTE } from "../../../helper/constants";
import Modal from "../../DesignComponents/Modal";
import Address from "../Address";
import { AddressContext } from "../../../services/address/AddressContext";
import { CartContext } from "../../../services/cart/CartContext";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";
import {
  USER_CART_STORAGE_KEY,
  USER_ORDERS_STORAGE_KEY,
  USER_ADDRESSES_STORAGE_KEY,
} from "../../../helper/constants";

const Checkout = () => {
  const {
    addresses,
    addAddress,
    removeAddress,
    // updateAddress,
    setDefaultAddress,
    setCurrentAddress,
  } = useContext(AddressContext);

  const { cartItems, pastOrders } = useContext(CartContext);

  const { authUser } = useContext(SessionContext);

  const firebase = useContext(FirebaseContext);

  const [showShippingForm, setShowShippingForm] = useState(false);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const handleOptionChange = useCallback((id) => {
    setSelectedOptionIndex(id);
  }, []);

  useEffect(() => {
    if (addresses.length > 0) {
      if (addresses.findIndex((item) => item.isDefault) > -1) {
        handleOptionChange(
          addresses[addresses.findIndex((item) => item.isDefault)].id
        );
      } else handleOptionChange(addresses[0].id);
    }
    firebase.saveDataToFirebase(
      authUser.uid,
      USER_ADDRESSES_STORAGE_KEY,
      addresses
    );
  }, [addresses, authUser, firebase, handleOptionChange]);

  useEffect(() => {
    if (authUser && authUser.isLoggedIn) {
      firebase.saveDataToFirebase(
        authUser.uid,
        USER_CART_STORAGE_KEY,
        cartItems
      );
      firebase.saveDataToFirebase(
        authUser.uid,
        USER_ORDERS_STORAGE_KEY,
        pastOrders
      );
    }
  }, [authUser, cartItems, firebase, pastOrders]);

  const handleAddAddress = () => {
    setShowShippingForm(!showShippingForm);
  };

  const handleSaveAddress = (address) => {
    addAddress(address);
    handleAddAddress();
  };

  const handleProceed = () => {
    setCurrentAddress({
      ...addresses[
        addresses.findIndex((item) => item.id === selectedOptionIndex)
      ],
    });
  };

  return (
    <div className="checkout-shipping__main flex-column">
      <h2>Select Shipping Address</h2>
      <div className="checkout-shipping__content">
        {addresses.length > 0 && (
          <div className="checkout-shipping__address-list">
            <form className="checkout-shipping__form flex-column">
              {addresses.map(
                ({
                  id,
                  firstName,
                  lastName,
                  address,
                  city,
                  state,
                  email,
                  phoneNo,
                  pincode,
                }) => {
                  return (
                    <label key={id} className="address-list__item flex-row">
                      <input
                        type="radio"
                        checked={selectedOptionIndex === id}
                        key={id}
                        onChange={() => {
                          handleOptionChange(id);
                        }}
                        value={id}
                      />
                      <div className="address-details flex-column">
                        <h4>
                          {firstName} {lastName}
                        </h4>
                        <div className="address-details__subdiv flex-column">
                          <span>
                            {address}, {city},
                          </span>
                          <span>
                            {state} - {pincode}
                          </span>
                        </div>
                        <div className="address-details__subdiv flex-column">
                          <span>{email}</span>
                          <span>{phoneNo}</span>
                        </div>
                        <MdDelete
                          className="address-item__remove"
                          onClick={() => {
                            removeAddress({
                              ...addresses[
                                addresses.findIndex((item) => item.id === id)
                              ],
                            });
                          }}
                        />
                      </div>
                    </label>
                  );
                }
              )}
            </form>
          </div>
        )}
        <button
          type="button"
          className="add-address-btn flex-row"
          onClick={handleAddAddress}
        >
          <GrAddCircle />
          ADD ADDRESS
        </button>
      </div>
      <hr className="full-width" />
      <Link to={ROUTE.PAYMENT} className="proceed-btn">
        <button
          type="button"
          className="blackBg-whiteFg-btn"
          disabled={addresses.length > 0 ? false : true}
          onClick={handleProceed}
        >
          PROCEED
        </button>
      </Link>

      {showShippingForm && (
        <Modal>
          <Address
            handleSaveAddress={handleSaveAddress}
            handleCloseModal={handleAddAddress}
            handleDefaultCheck={setDefaultAddress}
          />
        </Modal>
      )}
    </div>
  );
};

export default Checkout;
