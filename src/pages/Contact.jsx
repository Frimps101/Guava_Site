import React from 'react'
//import { useContext, useRef, useState } from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {

  //const formRef = useRef()

  //   const handleSubmit = (e) => {
  //       e.preventDefault();

  //       emailjs.sendForm('service_ij72uzf', 'template_fmqia1k', formRef.current, 'user_uN8bq0ZKKSPbC1eQZUySN')
  //       .then((result) => {
  //         console.log(result.text);
  //         setDone(true)
  //       }, (error) => {
  //         console.log(error.text);
  //       });
  // };


  return (
    <div  className='contact_header'>
      <Header title='Contact'/>
      <ContactForm className='f'/>
      {/* <Footer /> */}
    </div>
  )
}

export default Contact;