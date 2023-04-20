import React from "react";
import Logo from "../logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="nav_container section">
      <Link to="/" className="logo">
        <img src={Logo} alt="" className="logo-img"/>
      </Link>

      {/* <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div> */}

      <nav className={click ? "nav-menu active" : "nav-menu"}>
        <Link to="/company" className="nav_item">
          Company
        </Link>
        <Link to="/enterprise" className="nav_item">
          Enterprise
        </Link>
        <Link to="/guava" className="nav_item">
          Guava App
        </Link>
        <Link to="/contact" className="nav_item">
          Contact
        </Link>
        <Link to="/faqs" className="nav_item">
          FAQ
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
