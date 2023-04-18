import React from 'react';
import './GetStarted.css';
import Rocket from "../images/rocket.png";


const GetStarted = () => {
  return (
    <section className="started">
        <div className="started-ready__content">
            <div className="started_img">
                <img src={Rocket} alt=""/>
            </div>
            <div className="started-ready__text">
                <h3>Ready to get started?</h3>
                <p>
                    Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.
                </p>
            </div>
        </div>
    </section>
  )
}

export default GetStarted