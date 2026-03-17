import "./Item.scss";

const Item = ({ title, dates, children }) => {
  const content = typeof children === "string" ? <p dangerouslySetInnerHTML={{ __html: children }}></p> : children;
  return (
    <div className="Item">
      {(title || dates) && (
        <div className="Item__header">
          <h4 className="Item__title">{title}</h4>
          {dates && <h4 className="Item__dates">{dates}</h4>}
        </div>
      )}
      <div className="Item__content">{content}</div>
    </div>
  );
};

export default Item;
