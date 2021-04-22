import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Counter = ({ counter, handleIncrement, handleDecrement, disableBtn }) => {
  return (
    <div className="counter-main flex-row">
      <button
        className="counter_button blackBg-whiteFg-btn"
        type="button"
        onClick={() => {
          handleDecrement();
        }}
        disabled={disableBtn}
      >
        -
      </button>
      <div className="counter-value">{counter}</div>
      <button
        className="counter_button blackBg-whiteFg-btn"
        type="button"
        onClick={() => {
          handleIncrement();
        }}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  counter: 1,
  handleIncrement: () => {},
  handleDecrement: () => {},
};

export default Counter;
