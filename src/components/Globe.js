import React from "react";
import GlobeImg from "../images/globe.png";
import "./Globe.css";

const Globe = () => {
  return (
        <section className="globe-container">
          <div className="globe-text">
            <h2 className="globe-text__title">
              Where the world builds software
            </h2>
            <p className="globe-text__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex placeat, aliquam nesciunt at libero laboriosam odio reprehenderit. Nam, officia.
            </p>
          </div>
          <div className="globe-img">
            <img src={GlobeImg} alt="" className="globe-img__image"/>
          </div>
        </section>
  );
};

export default Globe;
