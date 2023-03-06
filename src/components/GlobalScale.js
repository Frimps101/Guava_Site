import React from 'react'
import './GlobalScale.css';

const GlobalScale = () => {
  return (
    <section className="reason_container scale_container">
        <div className="scale_container__contents">
            <h4>Global Scale</h4>
            <h1>The backbone for internet business.</h1>
        </div>

        <div className="reason-content scale_container__contents">
            <div className="content-item scale_container__item">
                <h5>250M+</h5>
                <p className="content-text">
                    API requests per day, peaking at 13,000 requests a second  
                </p>
            </div>
            <div className="content-item scale_container__item">
                <h5>90%</h5>
                <p className="content-text">
                    of Ghanaian adults have bought from businesses using Stripe.  
                </p>
            </div>
            <div className="content-item scale_container__item">
                <h5>135+</h5>
                <p className="content-text">
                currencies and payment methods supported.  
                </p>
            </div>
            <div className="content-item scale_container__item">
                <h5>35+</h5>
                <p className="content-text">
                    countries with local acquiring, optimizing acceptance rates. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default GlobalScale