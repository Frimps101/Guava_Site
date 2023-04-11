import React from 'react'
import './Company.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Company = () => {
  return (
    <div className="companies_wrapper">
        
        <Navbar />
        
        <section className="companies_content">
            Guava Technologies is a financial asset manager and investing
            infrastructure platform leveraging cutting edge technologies
            for individuals and businesses.
            Millions in the world can use guava;
            <ul>
              <li>To invest in the international securities market</li>
              <li>Enhance international cross border and local payments</li>
              <li>Store high decentralized digital assets</li>
              <li>Grow their revenue to enhance more business opportunities</li>
            </ul>

            <div className="enterprise">
              <div className="enterprise-head">
                <h2> Guava Enterprise</h2>
                <p>
                Enterprise is an operating system for investment professionals that powers every aspect of the investment process
                </p>
              </div>

              <ul>
                <li>The end to end portfolio management software combines sophisticated risk analytics with comprehensive portfolio management tools , trading , operations, compliance and accounting tools on a single platform
                </li>
                <li>
                with a single standardized data set , Enterprise brings clarity , efficiency, scalability & cost saving to the entire investment cycle
                </li>
                <li>
                Enterprise drives collective intelligence by powering tools to help your organisation communicate effectively, address problems quickly and make informed decisions at every step of the investment process
                </li>
                <li>
                Enterprise supports business process design and implementation, 3rd party data sources and middle level operations, data management and system configuration services
                </li>
            </ul>
            </div>
        </section>
        
        <Footer />
        
    </div>
  )
}

export default Company;