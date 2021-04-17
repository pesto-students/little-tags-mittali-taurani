import "./style.scss";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="counter-main flex-row">
      <button
        className="counter_button blackBg-whiteFg-btn"
        type="button"
        onClick={() => {
          setCounter(counter - 1 > 0 ? counter - 1 : 1);
        }}
      >
        -
      </button>
      <div className="counter-value">{counter}</div>
      <button
        className="counter_button blackBg-whiteFg-btn"
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
