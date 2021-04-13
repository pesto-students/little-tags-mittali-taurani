import "./style.scss";
import React, { useState } from "react";
import CarouselRightArrow from "./CarouselRightArrow";
import CarouselLeftArrow from "./CarouselLeftArrow";
import CarouselIndicator from "./CarouselIndicator";
import CarouselContent from "./CarouselContent";

const Carousel = ({ carouselData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselDataLength = carouselData.length;

  const goToSlide = (event, index) => {
      event.preventDefault();
    setActiveIndex(index);
  };

  const goToPrevSlide = (event) => {
    event.preventDefault();
    let index = activeIndex;
    if (index === 0) {
      index = carouselDataLength;
    }
    setActiveIndex(index - 1);
  };

  const goToNextSlide = (event) => {
    event.preventDefault();
    let index = activeIndex;
    if (index === carouselDataLength - 1) {
      index = -1;
    }
    setActiveIndex(index + 1);
  };

  return (
    <div className="carousel-container flex-column">
      <div className="carousel">
        <CarouselLeftArrow onClickHanlder={(event) => goToPrevSlide(event)} />

        <ul className="carousel__slides">
          {carouselData.map((path, index) => (
            <CarouselContent
              key={index}
              index={index}
              activeIndex={activeIndex}
              path={path}
            />
          ))}
        </ul>

        <CarouselRightArrow onClickHanlder={(event) => goToNextSlide(event)} />

        <ul className="carousel__indicators flex-row">
          {carouselData.map((_, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              onClickHanlder={(event) => goToSlide(event, index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
