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
    <>
      <header className="nav-header">
        <div className="nav-header__left">
          <div className="">
            <img src={Logo} alt="" className="logo-img" />
          </div>

          <div className="header-dropdowns">
            <div class="dropdown">
              <button class="dropbtn">Product</button>
              <div class="dropdown-content">
                <a href="#">Guava app</a>
                <a href="#">Guava wallet</a>
                <a href="#">Card</a>
                <a href="#">Guava Wealth</a>
              </div>
            </div>
          </div>

          <div className="header-dropdowns">
            <div class="dropdown">
              <button class="dropbtn">Business</button>
              <div class="dropdown-content">
                <a href="#">Brokerage firms</a>
                <a href="#">Banks</a>
                <a href="#">SMEs</a>
                <a href="#">Global Business</a>
                <a href="#">Pricing</a>
              </div>
            </div>
          </div>

          <div className="header-dropdowns">
            <div class="dropdown">
              <button class="dropbtn">Developers</button>
              <div class="dropdown-content">
                <a href="#">Documentation</a>
                <a href="#">Wallet SDK</a>
                <a href="#">Payments</a>
                <a href="#">Exchange API</a>
                <a href="#">Power Automated Trading</a>
                <a href="#">Integrate your Blockchain</a>
                <a href="#">Plugins</a>
              </div>
            </div>
          </div>

          <div className="header-dropdowns">
            <div class="dropdown">
              <button class="dropbtn">Company</button>
              <div class="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Support</a>
                <a href="#">Blog</a>
                <a href="#">Security</a>
              </div>
            </div>
          </div>

        </div>

        <div className="nav-header__right">
          <div className="nav-header__right">
            Pricing
          </div>
          <div className="nav-header__right">
            Sign In
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
