import "./style.scss";
import React from "react";
import PropTypes from "prop-types";

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
    <div className="drop-down__main full-width">
      {content ? (
        <select className="drop-down__select full-width" ref={reference} defaultValue={selectedValue}>
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
        <div className="drop-down__nosize  full-width">One Size</div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  reference: PropTypes.object,
  selectedValue: PropTypes.string,
};

DropDown.defaultProps = {
  options: [],
  reference: {},
  selectedValue: ""
};

export default DropDown;
