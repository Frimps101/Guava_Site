import React from 'react'
//import { useContext, useRef, useState } from "react"
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
                    <h1 className="c-title">Let's discuss your project</h1>
                    <p className='c-body'>
                    Thank you for your interest in Crypto Finance. Our team is dedicated to providing the best possible experience for our users, and we're always happy to hear from you.
                    If you have any questions or feedback about our app, please don't hesitate to contact us. 
                    </p>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch.</b> We'll be with you each step of the way.
                    </p>
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

            <div className="c-org_info">
                <h2>Contact Us</h2>
                <div className="social_icons">
                    <a href="" className='fb'>
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="" className='insta'>
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="" className='twitter'>
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="" className='linkedin'>
                        <img src={LinkedIn} alt="" />
                    </a>
                </div>
                <div className="c-org_details">
                    <div className="c-org_icon__text">
                        <img src={Email} alt="" />
                        <p>info@guavatechnologies.com</p>
                    </div>
                    <div className="c-org_icon__text">
                        <img src={Phone} alt="" />
                        <p>info@guavatechnologies.com</p>
                    </div>
                    <div className="c-org_icon__text">
                        <img src={Location} alt="" />
                        <p>info@guavatechnologies.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm