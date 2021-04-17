import "./style.scss";
import React, { useState } from "react";

const AccordionItem = ({ description, title }) => {
  
  const [opened, setOpened] = useState(false);

  return (
    <div
      {...{
        // className: `accordion-item, ${opened && "accordion-item--opened"}`,
        className: `accordion-item, ${!opened && "accordion-item--opened"}`,
        onClick: () => {
          setOpened(!opened);
        },
      }}
    >
      <div className="accordion-item__line flex-row">
        <div className="accordion-item__title">{title}</div>
        <div className="accordion-item__icon"/>
      </div>
      <div className="accordion-item__inner">
        <div className="accordion-item__content">
          <div className="accordion-item__paragraph">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
