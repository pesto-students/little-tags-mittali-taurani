import "./style.scss";
import React from "react";

const DropDown = ({ options }) => {
  const content = options
    ? options
        .map((element, key) => (
          <option {...{ className: "drop-down__option", value: element, key }}>
            {element}
          </option>
        ))
    : "";

  return (
    <div className="drop-down__main">
      {content ? (
        <select className="drop-down__select">
          <option
            className="drop-down__option"
            value=""
            disabled
            selected
            // hidden
          >
            Select size
          </option>
          {content}
        </select>
      ) : (
        <div className="drop-down__nosize">One Size</div>
      )}
    </div>
  );
};

export default DropDown;
