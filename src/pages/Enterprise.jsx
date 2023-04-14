import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img from "../images/virtual_card.png";
import Question from "../images/question.png";
import "./Enterprise.css";

const Enterprise = () => {
  return (
    <>
        <Navbar />
        <div className="section">

        <div className="enterprise">
            <div className="enterprise-img">
                <img src={Img} alt="" />
            </div>
            <div className="enterprise-text">
                <h2>What is Guava technologies Solutions for Business Enterprise </h2>
                <p>
                    Guava Technology Solutions for Business ENTERPRISE
                    Guava Technology Solutions Enterprise is an operating system for investment professionals that powers every aspect of the investment process.
                    This end-to-end portfolio management software combines sophisticated risk analytics with comprehensive portfolio management tools, trading, operations, compliance and accounting tools on a single platform.
                    With a single, standardized data set, Guava Technology Solutions brings clarity, efficiency, scalability, and cost savings to the entire investment lifecycle. Guava technologies Solutions native risk analysis makes Guava Technology Solutions a truly end-to-end platform.
                </p>
            </div>
        </div>

        <div className="securities">
            <div className="enterprise-text">
                <h2>What types of securities does Guava Technology Solutions analyze? </h2>
                <p>
                    Guava Technology Solutions is a multi-asset class platform that supports risk analytics and the full investment process across equity, fixed income, FX, bank loans, derivatives and alternatives such as real estate, commodities, and private equity.
                </p>
            </div>

            <div className="securities-img">
                <img src={Question} alt="" />
            </div>
        </div>

        <div className="business">
            <h2>How Guava Technologies for BUSINESS ENTERPRISE works </h2>
            <p>
            Guava Technology Solutions for BUSINESS ENTERPRISE  drives Collective Intelligence by providing tools to help your organization communicate effectively, address problems quickly, and make informed decisions at every step of the investment process.
            Embedded in our platform is :
            Risk Management tools which provides tools to help you understand portfolio risk and performance across asset classes to support informed investment decisions. Our flexible user-configurable reports and interactive what-if analysis tools seek to meet the needs of risk managers, portfolio managers, compliance officers, executives, investment committees and boards.
            As an end-to-end investment platform, Guava Technologies  is:
            Guava Technologies and Guava app platform are relied on by approximately 2k+ investment professionals around the world.
            Powered by a handful of collectively 96+ years of investing and developers experience , focused on continuous enhancements that are made available to all clients.
            Delivered as a hosted service, including the Guava Technology Solutions technical infrastructure, system administration and interfacing with data providers and industry utilities. Guava technologies operates a data and analytics with professionals focused on creating and quality controlling data and analyses for clients.
            Guava technologies supports business process design & implementation, third party data sources and middle office operations, data management and system configuration services.
            A flexible solution for the entire investment process across all asset classes, including alternatives.
            </p>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Enterprise