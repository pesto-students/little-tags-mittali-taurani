import "./style.scss";
import React from "react";

const CarouselRightArrow = ({ onClickHanlder }) => {
  return (
    <a
      href="/#"
      className="carousel__arrow carousel__arrow--right"
      onClick={onClickHanlder}
    >
      <span className="fa fa-2x fa-angle-right" />
    </a>
  );
};

export default CarouselRightArrow;
