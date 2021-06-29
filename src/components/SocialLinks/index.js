import React from "react";
import "./styles.css";
import ig_logo from "../../assets/images/ig.svg";
import fb_logo from "../../assets/images/fb.svg";
import tw_logo from "../../assets/images/tw.svg";
import in_logo from "../../assets/images/in.svg";

function SocialLinks(props) {
  return (
    <footer className="social-footer">
      <div className="logo-link">
        <img src={fb_logo} alt="Designing Dashboards" className="social-logo" />
        <img src={ig_logo} alt="Designing Dashboards" className="social-logo" />
        <img src={tw_logo} alt="Designing Dashboards" className="social-logo" />
        <img src={in_logo} alt="Designing Dashboards" className="social-logo" />
      </div>
      <div className="copy-box">
        <p className="copyright">Copyright ©2020 All rights reserved </p>
      </div>
    </footer>
  );
}

export default SocialLinks;
