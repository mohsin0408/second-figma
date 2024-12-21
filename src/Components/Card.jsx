import React from "react";

const Card = ({ content, image, heading, btn }) => {
  return (
    <div className="card-items">
      <div>
        <img src={image} className="card-images" />
      </div>
      <div className="card-content">
        <h1>{heading}</h1>
        <p>{content}</p>
        {btn && <span>{btn}</span>}
      </div>
    </div>
  );
};

export default Card;
