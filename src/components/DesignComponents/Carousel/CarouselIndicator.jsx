import "./style.scss";
import React from "react";
import PropTypes from "prop-types";
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

CarouselIndicator.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClickHanlder: PropTypes.func.isRequired,
};

CarouselIndicator.defaultProps = {
  index: 0,
  activeIndex: 0,
  onClickHanlder: () => {},
};

export default CarouselIndicator;
