import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a data-aos="fade-down" data-aos-duration="1500" href="https://www.linkedin.com/in/konseptt/" target="_blank" rel="noreferrer" aria-label="Ranjan Sharma on LinkedIn"><BsLinkedin aria-hidden="true" focusable="false" /></a>
        <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/konseptt" target="_blank" rel="noreferrer" aria-label="Ranjan Sharma on GitHub"><FaGithub aria-hidden="true" focusable="false" /></a>
        <a data-aos-duration="900" data-aos="fade-down" data-aos-anchor=".header__socials" href="https://www.codewars.com/users/konseptt" target="_blank" rel="noreferrer" aria-label="Ranjan Sharma on Codewars"><SiCodewars aria-hidden="true" focusable="false" /></a>
    </div>
    )
}

export default HeaderSocials
