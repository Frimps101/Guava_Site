import React from 'react'
import './Header.css';
import Logo from '../images/Logo.png'; 

const Header = ({title}) => {
  return (
    <>
      <div id="stripes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className='nav_container pages-nav'>
            <a href="#" className="logo">
                <img src={Logo} alt="" />
            </a>

        <nav className="nav">
            <a href="" className='nav_item'>Company</a>
            <a href="" className='nav_item'>Contact</a>
            <a href="" className='nav_item'>Faqs</a>
        </nav>
      </div>

      <div className="title">
        <h1>{ title } </h1>
      </div>
    </>
  )
}

export default Header