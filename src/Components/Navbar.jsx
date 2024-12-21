import React from "react";

export const Navbar = ({ commonHeadings }) => {
  const links = ["Home", "About", "Contact"];
  return (
    <div className="navbar">
      <ul className="nav-list">
        {links.map((link, index) => (
          <li>{link}</li>
        ))}
      </ul>
      <span className="headings">{commonHeadings}</span>
      <button className=" nav-button ">Buy Now</button>
    </div>
  );
};
