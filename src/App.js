import React from "react";
import menuSvg from "./assets/images/menu.svg";
import photo from "./assets/images/img.jpg";

export function App() {
  return (
    <div className="block_1">
      <div className="menu" id="menuButton">
        <img className="open-menu" src={menuSvg} alt="menu" />
        <div className="close-mobile-menu" id="closeMobile">
          ←
        </div>
      </div>

      <div className="header">
        <a href="#" className="header_text">
          Works
        </a>
        <a href="#" className="header_text">
          Blog
        </a>
        <a href="#" className="header_text">
          Contact
        </a>
      </div>

      <div className="mobile-menu">
        <div className="navigation">
          <a href="#" className="navigation__link">
            Works
          </a>
          <a href="#" className="navigation__link">
            Blog
          </a>
          <a href="#" className="navigation__link">
            Contact
          </a>
        </div>
      </div>

      <div className="infoblock">
        <div className="infoblock_1">
          <div>
            <h1 className="hitext">Hi, I am John, Creative Technologist</h1>
          </div>
          <div>
            <p className="descrptext">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div>
            <button className="button">Download Resume</button>
          </div>
        </div>
        <div className="infoimg">
          <img src={photo} alt="img" className="img" />
        </div>
      </div>
    </div>
  );
}
