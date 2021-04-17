import "./style.scss";
import React from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const CarouselRightArrow = ({ onClickHanlder }) => {
  return (
    <a
      href="/#"
      className="carousel__arrow carousel__arrow--right"
      onClick={onClickHanlder}
    >
      <FaChevronRight />
    </a>
  );
};

CarouselRightArrow.propTypes = {
  onClickHanlder: PropTypes.func.isRequired,
};

CarouselRightArrow.defaultProps = {
  onClickHanlder: () => {},
};

export default CarouselRightArrow;
