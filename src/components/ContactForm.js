import React from 'react'
//import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom";
import Email from '../images/email2.png';
import Phone from '../images/call2.png';
import Location from '../images/location.png';
import LinkedIn from '../images/linkedin.png';
import Facebook from '../images/fb.png';
import Twitter from '../images/twitter.png';
import Instagram from '../images/instagram.png';
import './ContactForm.css';


const ContactForm = () => {
  return (
    <section className="c">
            <div className="c-wrapper">
                <div className="c-left">
                <div className="c-org_info">
                <h2>Contact Us</h2>
                <div className="social_icons">
                    <Link to="" className='fb'>
                        <img src={Facebook} alt="" />
                    </Link>
                    <Link to="" className='insta'>
                        <img src={Instagram} alt="" />
                    </Link>
                    <Link to="" className='twitter'>
                        <img src={Twitter} alt="" />
                    </Link>
                    <Link to="" className='linkedin'>
                        <img src={LinkedIn} alt="" />
                    </Link>
                </div>
                <div className="c-org_details">
                    <div className="c-org_icon__text">
                    <i class="fa-solid fa-envelope"></i>
                        <p>guavatechnologiesafrica@gmail.com</p>
                    </div>
                    <div className="c-org_icon__text">
                        <i class="fa-solid fa-phone"></i>
                        <p>+233209146163</p>
                    </div>
                    <div className="c-org_icon__text">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <p>Coastal, Spintex.</p>
                    </div>
                </div>
            </div>
                </div>
                <div className="c-right">
                    <div className="c-right__text">
                        <h2>Get in touch.</h2>
                        <p className="c-desc">
                            We'll be with you each step of the way.
                        </p>
                    </div>
                    <form onSubmit="{}">
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea name="message" rows="5 " placeholder="Message"></textarea>
                        <button>Submit</button>
                        <p className="c-thanks">Thank you.</p>
                    </form>
                </div>
            </div>

            
        </section>
    )
}

export default ContactForm