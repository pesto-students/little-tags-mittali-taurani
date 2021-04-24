import "./style.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Address = ({
  handleSaveAddress,
  handleCloseModal,
  handleDefaultCheck,
}) => {
  const getUniqueId = () => Math.floor(Math.random() * 1000).toString();

  const initialState = {
    id: getUniqueId(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    isDefault: false,
  };

  const [addressDetails, setAddressDetails] = useState(initialState);

  const {
    firstName,
    lastName,
    email,
    phoneNo,
    address,
    state,
    city,
    pincode,
    isDefault,
  } = addressDetails;

  const onInputChange = (event) => {
    setAddressDetails({
      ...addressDetails,
      [event.target.name]: event.target.value,
    });
  };

  const onDefaultChange = (event) => {
    setAddressDetails({
      ...addressDetails,
      [event.target.name]: event.target.checked,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setAddressDetails({ ...addressDetails });
    handleSaveAddress({ ...addressDetails });
    if (addressDetails.isDefault) handleDefaultCheck({ ...addressDetails });
  };

  return (
    <div className="address-form_content flex-column">
      <h2>Deliver To</h2>
      <form className="flex-column" onSubmit={onFormSubmit}>
        <div className="form_main flex-row">
          <fieldset className="personal-info flex-column">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Enter your First Name"
              onChange={onInputChange}
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Enter your Last Name"
              onChange={onInputChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your Email address"
              onChange={onInputChange}
              required
            />
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={phoneNo}
              pattern="[0-9]{10}"
              placeholder="Enter your Phone Number"
              onChange={onInputChange}
              required
            />
          </fieldset>
          <fieldset className="address-info flex-column">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              placeholder="Enter your Address"
              onChange={onInputChange}
              required
            />
            <label htmlFor="address">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              placeholder="Enter your City"
              onChange={onInputChange}
              required
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              placeholder="Enter your State"
              onChange={onInputChange}
              required
            />
            <label htmlFor="address">Pin Code</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={pincode}
              pattern="[0-9]{6}"
              placeholder="Enter your Pin Code"
              onChange={onInputChange}
              required
            />
          </fieldset>
        </div>
        <div className="form_footer flex-row">
          <div className="default-address_check flex-row">
            <input
              type="checkbox"
              id="isDefault"
              name="isDefault"
              checked={isDefault}
              onChange={onDefaultChange}
            />
            <label htmlFor="isDefault">Set as default shipping address</label>
          </div>
          <input
            type="submit"
            value="Save"
            className="save_btn blackBg-whiteFg-btn"
          />
          <input
            type="button"
            value="Cancel"
            className="cancel_btn"
            onClick={handleCloseModal}
          />
        </div>
      </form>
    </div>
  );
};

Address.propTypes = {
  handleSaveAddress: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleDefaultCheck: PropTypes.func.isRequired,
};

Address.defaultProps = {
  handleSaveAddress: () => {},
  handleCloseModal: () => {},
  handleDefaultCheck: () => {},
};

export default Address;
