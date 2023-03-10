import React from "react";
import Logo from "../logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav_container section">
      <Link to="#" className="logo">
        <img src={Logo} alt="" />
      </Link>

      <nav className="nav">
        <Link to="" className="nav_item">
          Company
        </Link>
        <Link to="" className="nav_item">
          Enterprise
        </Link>
        <Link to="" className="nav_item">
          Contact
        </Link>
        <Link to="" className="nav_item">
          Faqs
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
