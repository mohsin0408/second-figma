import React from "react";

const Price = ({ heading, content, btn, lastContent }) => {
  return (
    <div>
      <div className="price">
        <span className="headings">{heading}</span>
        <span>{lastContent}</span>
        <span>{content}</span>
        <span>{btn}</span>
      </div>
    </div>
  );
};

export default Price;
