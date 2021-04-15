import "./style.scss";
import React from "react";

const Counter = ({ counter, handleIncremant, handleDecrement}) => {
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

export default Counter;
