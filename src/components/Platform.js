import React from "react";
import "./Platform.css";
import PaymentCards from "../images/Cards.png";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <section className="platform_container">
      <div className="platform-title">
        <h4>Unified Platform</h4>
        <h1>
          A <span className="span-text">fully integrated</span> suite of payments products
        </h1>
      </div>

      <div className="platform-content">
        <div className="content-left">
          <p>
            We bring together everything that’s required to build and apps that
            enable savings, investing and payments globally. Guava Technologies
            products power investing and payments for online and in-person
            retailers, banks, small businesses, subscriptions businesses,
            software platforms and marketplaces.
          </p>
          {/* <span><Link href="#">Start</Link></span> */}
        </div>
        <div className="content-right">
          We also help individual and companies beat fraud, manage business
          revenue, enhance capital allocation, issue virtual and physical cards,
          get financing and much more.
        </div>
      </div>

      <div className="platform-img">
        <img src={PaymentCards} alt="" />
      </div>
    </section>
  );
};

export default Platform;
