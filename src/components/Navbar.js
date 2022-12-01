import React from 'react'
import Logo from '../logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className='nav_container'>
            <a href="#" className="logo">
                <img src={Logo} alt="" />
            </a>

        <nav className="nav">
            <a href="" className='nav_item'>Company</a>
            <a href="" className='nav_item'>Contact</a>
            <a href="" className='nav_item'>Faqs</a>
        </nav>
    </section>
  )
}

export default Navbar