import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBook, BiMessageDetail} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import {FaLaptopCode} from 'react-icons/fa';
import {TbStars} from 'react-icons/tb'


const Nav = ({activeNav, setActiveNav}) => {

  const handleClick = (event) => {                     
    const anchor = event.target.closest("a");                       
    setActiveNav(anchor.getAttribute('href'))
  }

  return (
    <nav aria-label="Page sections">
      <a href="#home" 
        className={activeNav === '#home' ? 'active' : ''}
        onClick={handleClick}
        aria-label="Home"
        ><AiOutlineHome aria-hidden="true" focusable="false" /></a>
      <a href="#about" 
        className={activeNav === '#about' ? 'active' : ''}
        onClick={handleClick}
        aria-label="About"
        ><AiOutlineUser aria-hidden="true" focusable="false" /></a>
      <a href="#experience" 
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={handleClick}
        aria-label="Experience"
        ><BiBook aria-hidden="true" focusable="false" /></a>
      <a href="#services" 
        className={activeNav === '#services' ? 'active' : ''}
        onClick={handleClick}
        aria-label="Services"
        ><RiServiceLine aria-hidden="true" focusable="false" /></a>
      <a href="#portfolio"  
        className={activeNav === '#portfolio' ? 'active' : ''}
        onClick={handleClick}
        aria-label="Portfolio"
        ><FaLaptopCode aria-hidden="true" focusable="false" /></a>
      <a href="#review"  
        className={activeNav === '#review' ? 'active' : ''}
        onClick={handleClick}
        aria-label="Reviews"
        ><TbStars aria-hidden="true" focusable="false" /></a>
      <a href="#contact"  
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={handleClick}
        aria-label="Contact"
        ><BiMessageDetail aria-hidden="true" focusable="false" /></a>
    </nav>
  )
}

export default Nav
