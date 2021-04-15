import "./style.scss";
import React from "react";
import PropTypes from "prop-types";

const Counter = ({ counter, handleIncremant, handleDecrement }) => {
  return (
    <div className="counter-main flex-row">
      <button
        className="counter_button blackBg-whiteFg-btn"
        type="button"
        onClick={() => {
          handleDecrement();
        }}
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
