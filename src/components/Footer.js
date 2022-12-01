import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section>
        <div className="footer">
            <div className="first">
                <ul>
                    <li>
                        <a href="" className='logo'>Guava</a>
                        <a href="">Ghana</a>
                        <a href="">English</a>
                    </li>
                </ul>
            </div>
            <div className="first">
                <ul>
                <h4>Products</h4>
                    <li>
                        <a href="">Guava app</a>
                        <a href="">Payments</a>
                        <a href="">Cards</a>
                        <a href="">Enterprise(for institutions)</a>
                        <a href="">Pricing</a>
                        <a href="">Payments</a>
                    </li>
                </ul>
            </div>
            <div className="first">
                <ul>
                <h4>Developers</h4>
                    <li>
                        <a href="">Documentation</a>
                        <a href="">API reference</a>
                        <a href="">APi status</a>
                    </li>
                </ul>
            </div>
            <div className="first">
                <ul>
                <h4>Use Cases</h4>
                    <li>
                        <a href="">Global businesses</a>
                        <a href="">Saas</a>
                        <a href="">Banks</a>
                        <a href="">E-commerce</a>
                        <a href="">Hedgefunds</a>
                        <a href="">NGO</a>
                        <a href="">Startups</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer