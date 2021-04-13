import "./style.scss";
import React from "react";

const CarouselIndicator = ({ index, activeIndex, onClickHanlder }) => {
  return (
    <li>
      <a
        href="/#"
        className={
          index === activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={onClickHanlder}
      > </a>
    </li>
  );
};

export default CarouselIndicator;
