import "./style.scss";
import React from "react";

const CarouselLeftArrow = ({ onClickHanlder }) => {
  return (
    <a
      href="/#"
      className="carousel__arrow carousel__arrow--left"
      onClick={onClickHanlder}
    >
    <span className="fa fa-2x fa-angle-left" />
    </a>
  );
};

export default CarouselLeftArrow;
