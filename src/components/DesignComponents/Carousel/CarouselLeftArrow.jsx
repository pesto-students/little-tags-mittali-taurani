import "./style.scss";
import React from "react";
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

export default CarouselLeftArrow;
