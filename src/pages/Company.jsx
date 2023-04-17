import React from 'react'
import './Company.css'
import CompanyImg from "../images/Company.png";
import People from "../images/people.png";
import MoneyTree from "../images/money_tree.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Company = () => {
  return (
    <div className="companies">

      <Navbar />

      <section className="companies-content">
        <div className="companies-intro">
          <p className="companies-intro__text">
            Guava Technologies is a financial asset manager and investing
            infrastructure platform leveraging cutting edge technologies
            for individuals and businesses.
          </p>
          <div className="companies-intro__img">
            <img src={CompanyImg} alt="" />
          </div>
        </div>

        <div className="companies-people">
          <div className="companies-people-img">
            <img src={People} alt="" />
          </div>
          <div className="companies-people-content">
            <h2 className="companies-people__title">Millions in the world can use <span>Guava</span>:</h2>
            <ul className="companies-people__reasons">
              <li className="companies-people__item"><i class="fa-solid fa-arrow-right"></i>To invest in the international securities market</li>
              <li className="companies-people__item"><i class="fa-solid fa-arrow-right"></i>Enhance international cross border and local payments</li>
              <li className="companies-people__item"><i class="fa-solid fa-arrow-right"></i>Store high decentralized digital assets</li>
              <li className="companies-people__item"><i class="fa-solid fa-arrow-right"></i>Grow their revenue to enhance more business opportunities</li>
            </ul>
          </div>
        </div>

        <div className="companies-enterprise">
          <div className="companies-enterprise__head">
            <h2> Guava Enterprise</h2>
            <img src={MoneyTree} alt="" />
            <p>
              Enterprise is an operating system for investment professionals that powers every aspect of the investment process
            </p>
          </div>

          <div className="companies-enterprise-list">
            <ul>
              <li><i class="fa-solid fa-arrows-spin"></i>The end to end portfolio management software combines sophisticated risk analytics with comprehensive portfolio management tools , trading , operations, compliance and accounting tools on a single platformwith a single standardized data set. 
              </li>
              <li>
              <i class="fa-solid fa-arrows-spin"></i>Enterprise brings clarity , efficiency, scalability & cost saving to the entire investment cycle
              </li>
              <li>
                <i class="fa-solid fa-arrows-spin"></i>Enterprise drives collective intelligence by powering tools to help your organisation communicate effectively, address problems quickly and make informed decisions at every step of the investment process
              </li>
              <li>
                <i class="fa-solid fa-arrows-spin"></i>Enterprise supports business process design and implementation, 3rd party data sources and middle level operations, data management and system configuration services
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Company;