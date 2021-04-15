import "./style.scss";
import React from "react";
import PropTypes from "prop-types";
import AccordionItem from "../AccordionItem";

const ProductDescription = ({ description }) => {
  const data = [
    {
      title: "Description",
      description,
    },
  ];
  const content = data.map((data, key) => {
    return (
      <li {...{ className: "accordion-list__item", key }}>
        <AccordionItem {...data} />
      </li>
    );
  });

  return (
    <div className="accordion-wrapper">
      <ul className="accordion-list">{content}</ul>
    </div>
  );
};

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

ProductDescription.defaultProps = {
  description: "",
};

export default ProductDescription;
