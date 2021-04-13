import "./style.scss";
import React from "react";
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

export default CarouselRightArrow;
