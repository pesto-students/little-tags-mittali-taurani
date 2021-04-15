import "./style.scss";
import React from "react";

const DropDown = ({ options, reference, selectedValue }) => {
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
        <select className="drop-down__select" ref={reference} defaultValue={selectedValue}>
          <option
            className="drop-down__option"
            value=""
            disabled
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
