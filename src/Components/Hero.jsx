import React from "react";
import img1 from "../assets/Group.png";

const Hero = ({ contentText }) => {
  const buttons = ["Purchase UI Kit", "Learn More"];
  return (
    <div className="hero">
      <div>
        <h2 className="hero-heading">
          Introduce Your Product Quickly & Effectively
        </h2>
        <p>{contentText}</p>
        <div className="hero-button-div">
          {buttons.map((index) => (
            <button className="hero-button">{index}</button>
          ))}
        </div>
      </div>
      <div>
        <img src={img1} className="card-images" />
      </div>
    </div>
  );
};

export default Hero;
