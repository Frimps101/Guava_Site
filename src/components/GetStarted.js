import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="started_container">
        <div className="started_first">
            <h3>Ready to get started?</h3>
            <p>
                Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.
            </p>
            {/* <div className="btn">
                <input type="text" />
                <input type="text" />
            </div> */}
        </div>

        <div className="started_second">
            <div className="icon">

            </div>
            <div className="started_text">
                <p className='started_text_head'>Always know what you pay
                </p>
                <p>Integrated per-transaction pricing with no hidden fees.
                </p>
                <div className="btn">Pricing details</div>
            </div>
        </div>

        <div className="started_third">
            <div className="icon">

            </div>
            <div className="started_text">
                <p className='started_text_head'>Always know what you pay
                </p>
                <p>Integrated per-transaction pricing with no hidden fees.
                </p>
                <div className="btn">Pricing details</div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted