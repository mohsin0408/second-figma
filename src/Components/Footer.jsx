import React from "react";
import img7 from "../assets/Insta.png";
import img8 from "../assets/Path.png";
import img9 from "../assets/Linkedin.png";

const Footer = ({ commonHeadings, btn }) => {
  const links = ["Home", "About", "Contact"];
  const imgArr = [img7, img8, img9];
  return (
    <div>
      <div className="footer">
        <p>2023 Yourcompany</p>
        <span className="headings">{commonHeadings} </span>
        <span>{btn}</span>
      </div>
      <div className="last-footer" >
        <div>
          <ul className="nav-list">
            {links.map((link, index) => (
              <li>{link}</li>
            ))}
          </ul>
        </div>
        <div className="footer-image" >
          {imgArr.map((index) => (
            <img src={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
