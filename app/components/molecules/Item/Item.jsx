import "./Item.scss";

const Item = ({ title, dates, children }) => {
  return (
    <div className="Item">
      <div className="Item__header">
        <h4 className="Item__title">{title}</h4>
        {dates && <h4 className="Item__dates">{dates}</h4>}
      </div>
      <div className="Item__content">{children}</div>
    </div>
  );
};

export default Item;
