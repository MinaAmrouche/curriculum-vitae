import React from "react";
import "./ContactItem.scss";

const ContactItem = ({ picto, content }) => {
  return (
    <div className="ContactItem">
      <i className={[picto, "ContactItem__picto"].join(" ")} />
      {content}
    </div>
  );
};

export default ContactItem;
