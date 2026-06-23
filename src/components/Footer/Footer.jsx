import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si'

const Footer = () => {
  return (
   <footer className="footer__container">

    <ul className="permalinks" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1400'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#review">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1600'>
      <a href="https://www.linkedin.com/in/konseptt/" target="_blank" rel="noreferrer" aria-label="Ranjan Sharma on LinkedIn"><BsLinkedin aria-hidden="true" focusable="false" /></a>
      <a href="https://www.instagram.com/snow_burnt/" target="_blank" rel="noreferrer" aria-label="Ranjan Sharma on Instagram"><BsInstagram aria-hidden="true" focusable="false" /></a>
      <a href="https://www.codewars.com/users/konseptt" target="_blank" rel="noreferrer" aria-label="Ranjan Sharma on Codewars"><SiCodewars aria-hidden="true" focusable="false" /></a>
    </div>

    <div className="footer__copyright" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1800'>
      <small>&copy; Ranjan Sharma. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer
