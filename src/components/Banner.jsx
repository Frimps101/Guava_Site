import React from "react";
import phone from "../images/phone2.png";
import "./Banner.css";
import Navbar from "../components/Navbar";

const Banner = () => {
  return (
    <>
      <Navbar />
      <div className="b section">
        <div className="b-left">
          <div className="b-left--upper">
            <h2>Invest with confidence and trust.</h2>
            <p>
              Get access to the tools and resources needed to build and secure
              your financial future.
            </p>
          </div>
          <div className="b-left--lower">
            <div className="lower-item--left">
              <h4 className="lower-left--title">Potential for Growth</h4>
              <p className="lower-left--text">
                Get the opportunity for your money to grow over time,
                potentially earning higher returns than other savings options.
              </p>
            </div>
            <div className="lower-item--right">
              <h4 className="lower-right--title">Achieving Financial Goals</h4>
              <p className="lower-right--text">
                Achieve your financial goals, whether that's saving for a down
                payment on a house, funding your retirement, or simply building
                your wealth.
              </p>
            </div>
          </div>
        </div>
        <div className="b-right">
          <img src={phone} alt="" className="b-right--img" />
        </div>
      </div>
    </>
  );
};

export default Banner;
