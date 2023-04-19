import React from "react";
import GlobeImg from "../images/globe.png";
import "./Globe.css";

const Globe = () => {
  return (
        <section className="globe-container">
          <div className="globe-text">
            <h2 className="globe-text__title">
              <span className="span-text">Revolutionize</span> your finances with our cutting-edge app
            </h2>
            <p className="globe-text__content">
            Our finance-crypto app is designed to simplify your investments in cryptocurrency. With our user-friendly interface and advanced tools, you can easily trade, track, and manage your assets on the go. 
            </p>
          </div>
          <div className="globe-img">
            <img src={GlobeImg} alt="" className="globe-img__image"/>
          </div>
        </section>
  );
};

export default Globe;
