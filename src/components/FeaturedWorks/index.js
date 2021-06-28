import React from "react";
import "./styles.css";
import photo1 from "../../assets/images/Designing Dashboards.jpg";
import photo2 from "../../assets/images/Vibrant Portraits.jpg";
import photo3 from "../../assets/images/36 Days.jpg";

function FeaturedWorks(props) {
  return (
    <div className="block_3">
      <div className="fwhead_box">
        <h2 className="fwhead">Featured works</h2>
      </div>
      <div className="featuredworks">
        <div className="fwbox_1">
          <div className="featureimg">
            <img
              src={photo1}
              alt="Designing Dashboards"
              className="imgDesign"
            />
          </div>
          <div className="Designing_Dashboards">
            <h2 className="fwheader">Designing Dashboards</h2>
            <p className="fwname">
              <span className="fwdate">2020</span> Dashboard
            </p>
            <p className="fwtext">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="fwbox_2">
          <div className="featureimg">
            <img src={photo2} alt="Vibrant Portraits" className="imgDesign" />
          </div>
          <div className="Vibrant_Portraits">
            <h2 className="fwheader">Vibrant Portraits of 2020</h2>
            <p className="fwname">
              <span className="fwdate">2018</span> Illustration
            </p>
            <p className="fwtext">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="fwbox_3">
          <div className="featureimg">
            <img src={photo3} alt="36 Days" className="imgDesign" />
          </div>
          <div className="Days">
            <h2 className="fwheader">36 Days of Malayalam type</h2>
            <p className="fwname">
              <span className="fwdate">2018</span> Typography
            </p>
            <p className="fwtext">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWorks;
