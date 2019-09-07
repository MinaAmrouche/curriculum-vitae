import React from "react";
import "./Item.scss";

const Item = ({ title, dates, children }) => {
  return (
    <div className="Item">
      <div className="Item__header">
        <h3 className="Item__title">{title}</h3>
        <h3 className="Item__dates">{dates}</h3>
      </div>
      <p className="Item__content">{children}</p>
    </div>
  );
};

export default Item;
