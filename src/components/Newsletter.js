import React from "react";
import Hand from "../images/Hand.png";
import "./Newsletter.css";

const Newsletter = () => {
  return (
        <section className="newsletter">
            <div className="newsletter-form">
                <h2 className="newsletter-form__title">
                    <span className="span-text">Sign Up</span> for our newsletter:
                </h2>
                {/* <div className="newsletter-form__input">
                    <input type="email" placeholder="Email"/>
                    <input type="button" className="newsletter-form__btn">
                        <i class="fa-sharp fa-solid fa-paper-plane"></i>
                    </input>
                </div> */}

                <div class="newsletter-form__input">
                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                    <input type="email" placeholder="Enter email..." />
                </div>
            </div>
            <div className="newsletter-img">
                <img src={Hand} alt="" className="newsletter-img__image"/>
            </div>
        </section>
  );
};

export default Newsletter;
