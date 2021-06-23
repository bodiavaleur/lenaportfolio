import React, { useState } from "react";
import { GrClose, HiMenu } from "react-icons/all";
import "./styles.css";
import MobileMenu from "../MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="header">
        <div className="navigation-links-block">
          <a href="#" className="navigation-link">
            Works
          </a>
          <a href="#" className="navigation-link">
            Blog
          </a>
          <a href="#" className="navigation-link">
            Contact
          </a>
        </div>

        <div
          className={isMenuOpen ? "burger-menu-open" : "burger-menu"}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <GrClose /> : <HiMenu />}
        </div>
      </div>

      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </>
  );
}

export default Header;
