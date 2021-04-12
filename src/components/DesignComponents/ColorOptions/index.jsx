import "./style.scss";
import React, { useEffect } from "react";
import { BsFillCircleFill } from "react-icons/bs";

const ColorOptions = ({ options }) => {
  useEffect(() => {
    removeClass("selected");
    if (document.getElementsByClassName("color-options__icon").length > 0)
      document
        .getElementsByClassName("color-options__icon")[0]
        .classList.add("selected");
  }, [options]);

  const removeClass = (className) => {
    if (document.getElementsByClassName(className).length > 0)
      document.getElementsByClassName(className)[0].classList.remove(className);
  };

  const handleChangeColor = (event) => {
    removeClass("selected");

    event.target.classList.contains("selected")
      ? event.target.classList.remove("selected")
      : event.target.classList.add("selected");
  };
  const content = [...new Set([...options])].map((colorName, index) =>
    colorName ? (
      <BsFillCircleFill
        className="color-options__icon"
        color={colorName.trim()}
        onClick={handleChangeColor}
        key={index}
      />
    ) : null
  );

  return (
    <div className="color-options__main">
      {content.includes(null) ? (
        <div className="color-options__nooption">
          No color options available
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default ColorOptions;
