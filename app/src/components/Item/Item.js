import React from "react";
import "./Item.scss";

const Item = ({ title, dates, children }) => {
  return (
    <div className="Item">
      <div className="Item__title">
        <h3>{title}</h3>
        <h3 className="Item__dates">{dates}</h3>
      </div>
      {children}
    </div>
  );
};

export default Item;
