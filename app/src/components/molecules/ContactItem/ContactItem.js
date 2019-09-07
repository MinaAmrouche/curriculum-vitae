import React from "react";
import "./ContactItem.scss";

const ContactItem = ({ picto, content, link }) => {
  return (
    <div className="ContactItem">
      <i className={[picto, "ContactItem__picto"].join(" ")} />
      {link ? (
        <a
          className="ContactItem__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default ContactItem;
