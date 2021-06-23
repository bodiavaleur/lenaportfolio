import React from "react";
import "./styles.css";
import photo from "../../assets/images/img.jpg";

function MyInfo() {
  return (
    <div className="infoblock">
      <div className="infoblock_1">
        <div>
          <h1 className="hitext">Hi, I am John, Creative Technologist</h1>
        </div>
        <div>
          <p className="descrptext">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
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
  );
}

export default MyInfo;
