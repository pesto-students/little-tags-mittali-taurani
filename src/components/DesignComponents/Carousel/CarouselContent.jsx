import "./style.scss";
import React from "react";

const CarouselContent = ({ index, activeIndex, path }) => {
  return (
    <li
      className={
        index === activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }
    >
      <img className="carousel-slide__content" src={path.trim()} alt="Product" />
    </li>
  );
};

export default CarouselContent;
