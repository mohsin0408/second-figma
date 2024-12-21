import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import img3 from "../assets/Happy.png";
import img4 from "../assets/Social.png";
import img5 from "../assets/Undraw.png";
import Login from "./Login";
import Price from "./Price";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const commonHeading = <h2>Landing</h2>;

const contentHeading = <span>Light, Fast & Powerful</span>;

const contentText = (
  <span className="card-content">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus.
    <br />
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
    consequat massa quis enim.
  </span>
);

const contentButton = <button className="button">Purchase Now</button>;

const childTitle = <span>Title Goes Here</span>;

const childText = (
  <span>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor.
  </span>
);

const footerHeading = <span>A Price To Suit Everyone</span>;

const footerContent = (
  <span>
    <p className="dollor">$40</p>
    <p className="footer-content">UI Design Kit</p>
    <p className="footer-content">See, One price. Simple.</p>
  </span>
);

function MainContent() {
  const imageArr = [img3, img4, img5];
  return (
    <div>
      <Navbar commonHeadings={commonHeading} />
      <Hero contentText={contentText} />
      <Login
        contents={contentText}
        heading={contentHeading}
        childTitles={childTitle}
        childTexts={childText}
      />
      {imageArr.map((img, index) => (
        <Card
          image={img}
          index={index}
          content={contentText}
          heading={contentHeading}
          btn={index === 2 ? contentButton : null}
        />
      ))}
      <Price
        heading={footerHeading}
        lastContent={contentText}
        content={footerContent}
        btn={contentButton}
        commonHeadings={commonHeading}
      />
      <Footer commonHeadings={commonHeading} btn={contentButton} />
    </div>
  );
}

export default MainContent;
