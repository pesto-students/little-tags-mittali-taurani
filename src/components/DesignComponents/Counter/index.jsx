import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Counter = ({ counter, handleIncremant, handleDecrement, disableBtn }) => {
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
          handleIncremant();
        }}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleIncremant: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  counter: 1,
  handleIncremant: () => {},
  handleDecrement: () => {},
};

export default Counter;
