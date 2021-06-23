import React from "react";
import "./styles.css";

function MobileMenu({ onClose }) {
  return (
    <>
      <div className="shadow" onClick={onClose} />
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
    </>
  );
}

export default MobileMenu;
