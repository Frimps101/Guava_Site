import React from 'react'
import './Sponsors.css';
import Binance from '../images/binance.png'
import Google from '../images/google.png'
import Ethereum from '../images/ethereum.png'
import Paypal from '../images/paypal.png'

const Sponsors = () => {
  return (
    <section className="sponsors_container">
        <div className="sponsors_logo__container">
            <div className="sponsors_logo__item">
                <img src={Binance} alt="" />
                <span>Binance</span>
            </div>
            <div className="sponsors_logo__item">
                <img src={Google} alt="" />
                <span>Google</span>
            </div>
            <div className="sponsors_logo__item">
                <img src={Ethereum} alt="" />
                <span>Ethereum</span>
            </div>
            <div className="sponsors_logo__item">
                <img src={Paypal} alt="" />
                <span>Paypal</span>
            </div>
        </div>
    </section>
  )
}

export default Sponsors;