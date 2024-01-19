import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, '2mhTvYiNWZ-t3VT6q')
      .then((result) => {
          toast.success("Message sent to Ranjan");
      }, (error) => {
          toast.error("Oops something went wrong");
      })

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5 data-aos="fade-up" data-aos-anchor="#contact"  data-aos-duration='700'>Reach out to me</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#contact"  data-aos-duration='900'>Contact Me</h2>
      <ToastContainer/>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email  */}
          <article className="contact__option" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1600'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hello@ranjansharma.info.np</h5>
            <a href="mailto:hello@ranjansharma.info.np" target='_blank'  rel="noreferrer">Email me</a>
          </article>

          {/* Linkedin  */}
          <article className="contact__option" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1300'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Ranjan Sharma</h5>
            <a href="https://www.linkedin.com/in/konseptt/" target='_blank'  rel="noreferrer">Let's connect</a>
          </article>

          {/* Instagram  */}
          <article className="contact__option" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1000'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>konseptt</h5>
            <a href="https://github.com/konseptt" target='_blank'  rel="noreferrer">Send a DM</a>
          </article>

          
        </div>
        
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail} >
           <input type="text" name='user_name' placeholder='Full Name' data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='800' required/>
           <input type="email" name='user_email' placeholder='Email' data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='950' required/>
           <textarea name="message" placeholder='Message' rows="7" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1200' required></textarea>
           <button type='submit' className='btn btn-primary form__button' data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1400'>Send Message <FaTelegramPlane className='send__message-icon'/></button>
        </form>
        
      </div>
    </section >
  )
}

export default Contact
