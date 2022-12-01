import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Company.css'

const Company = () => {
  return (
    <div className="companies_wrapper">
        
        <Header title="About Guava"/>
        
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
        </section>
        
        <Footer className="footer"/>
        
    </div>
  )
}

export default Company;