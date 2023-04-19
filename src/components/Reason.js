import React from 'react'
import './Reason.css';
import FastImage from '../images/fast.png'
import OptimizationImage from '../images/optimization.png'
import ReliabilityImage from '../images/reliability.png'
import IntegragionImage from '../images/integration.png'

const Reason = () => {
  return (
    <section className="reason_container">
        <div className="">
            <h4>Why Guava? </h4>
            <h1>A <span className='span-text'>technology first</span> approach to financial investments infrastructure</h1>
        </div>

        <div className="reason-content">
            <div className="content-item">
                <div className="content-icon">
                    <img src={IntegragionImage} alt="" />
                </div>
                <h5>Direct Integration</h5>
                <p className="content-text">
                From direct integration with card Networks and banks to checkout flows.  
                </p>
            </div>
            <div className="content-item">
                <div className="content-icon">
                    <img src={FastImage} alt="" />
                </div>
                <h5>Fastest improving platform</h5>
                <p className="content-text">
                We Update our stacks and APIs frequently to help you stay ahead of industry shifts.  
                </p>
            </div>
            <div className="content-item">
                <div className="content-icon">
                    <img src={ReliabilityImage} alt="" />
                </div>
                <h5>Free -Bugs reliability</h5>
                <p className="content-text">
                Our system operates with the highest  uptime with a high level of of scalability and robustness. Guava is certified to the highest compliance standards  
                </p>
            </div>
            <div className="content-item">
                <div className="content-icon">
                    <img src={OptimizationImage} alt="" />
                </div>
                <h5>Intelligent portfolio optimization</h5>
                <p className="content-text">
                Our machine learning models train on millions of data points and help balance risk to rewards on investments, increase returns and enhance securities appreciation. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Reason