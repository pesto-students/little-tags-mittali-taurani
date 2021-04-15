import "./style.scss";
import React from "react";
import PropTypes from "prop-types";
import { FaChevronLeft } from "react-icons/fa";

const CarouselLeftArrow = ({ onClickHanlder }) => {
  return (
    <a
      href="/#"
      className="carousel__arrow carousel__arrow--left"
      onClick={onClickHanlder}
    >
      <FaChevronLeft />
    </a>
  );
};

CarouselLeftArrow.propTypes = {
  onClickHanlder: PropTypes.func.isRequired,
};

CarouselLeftArrow.defaultProps = {
  onClickHanlder: () => {},
};

export default CarouselLeftArrow;
