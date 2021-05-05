import "./style.scss";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const SimilarProducts = ({ similarProductsMap }) => {
  const ref = React.createRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="similar-products__container flex-column full-width">
      <div className="carousel full-width">
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={() => scroll(-100)}
        >
          <FaChevronLeft />
        </button>

        <div className="similar-products-list flex-row full-width" ref={ref}>
          {similarProductsMap}
        </div>
        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={() => scroll(100)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SimilarProducts;
