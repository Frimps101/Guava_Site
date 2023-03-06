import React from "react";
import "./Hero.css";
import Toggle from "./Toggle";
import Screen1 from "../images/phone2.png";
// import Navbar from './Navbar';
import Logo from "../images/Logo.png";
import { Outlet, Link } from "react-router-dom";
import { motion, useSpring } from "framer-motion";

const navVariants = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "spring" },
  },
};

const Hero = () => {
  return (
    <div className="wrapper">
      {/* <Toggle/> */}
      <section className="hero_container">
        <div className="nav">
          <a href="#" className="logo">
            <img src={Logo} alt="" />
          </a>

          <motion.nav
            className="nav"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/company" className="nav_item">
              Company
            </Link>
            <Link to="/team" className="nav_item">
              Team
            </Link>
            <Link to="/pricing" className="nav_item">
              Pricing
            </Link>
            <Link to="/contact" className="nav_item">
              Contact
            </Link>
          </motion.nav>
          <Outlet />
        </div>

        <div className="content">
          <motion.div
            className="content_text"
            initial={{ x: -650, opacity: 0 }}
            animate={{ x: -10, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <h1>Payments Infrastructure for the internet</h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
          </motion.div>
          <div className="content_imgs">
            <div className="img">
              <motion.img
                src={Screen1}
                alt=""
                initial={{ x: 250 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
