import React from "react";
import img2 from "../assets/Login.png";
import { FaPen } from "react-icons/fa";

const Login = ({ contents, heading, childTitles, childTexts }) => {
  const dualContent = [1, 2];
  return (
    <div className="login">
      <div>
        <div>
          <h2>{heading}</h2>
          <p>{contents}</p>
        </div>
        <div className="cardChild">
          {dualContent.map((_, index) => (
            <div key={index}>
              <FaPen className="icon" />
              <p className="child-heading">{childTitles}</p>
              <p className="child-para" >{childTexts}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={img2} className="card-images" />
      </div>
    </div>
  );
};

export default Login;
