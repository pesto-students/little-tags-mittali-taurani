import "./style.scss";
import React from "react";
import PropTypes from "prop-types";

const CarouselContent = ({ index, activeIndex, path }) => {
  return (
    <li
      className={
        index === activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }
    >
      <img
        className="carousel-slide__content"
        src={path.trim()}
        alt="Product snapshot not available"
      />
    </li>
  );
};

CarouselContent.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
};

CarouselContent.defaultProps = {
  index: 0,
  activeIndex: 0,
  path: "",
};

export default CarouselContent;
