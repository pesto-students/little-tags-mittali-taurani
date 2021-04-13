import "./style.scss";
import React from "react";
import { VscCircleFilled } from "react-icons/vsc";

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
      >
        <VscCircleFilled />
      </a>
    </li>
  );
};

export default CarouselIndicator;
