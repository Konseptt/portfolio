import React from 'react'
import './about.scss'
import { FaAward, FaTelegramPlane } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck } from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <section id='about'>
      <p className="section__subtitle" data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='900'>Background</p>
      <h2 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='700'>About me</h2>

      <div className="container about__container">
      <div className="stage-cube-cont" data-aos="fade-right" data-aos-anchor=".about__container"  data-aos-duration="500">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" aria-hidden="true" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" aria-hidden="true" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" aria-hidden="true" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" aria-hidden="true" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" aria-hidden="true" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="500">
                <FaAward className='about__icon' aria-hidden="true" focusable="false" />
                <h3>Experience</h3>
                <small>4+ years coding</small>
            </article>

            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="700">
                <FiUsers className='about__icon' aria-hidden="true" focusable="false" />
                <h3>Collaborators</h3>
                <small>30+ worldwide</small>
            </article>

            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="900">
                <BsClipboardCheck className='about__icon' aria-hidden="true" focusable="false" />
                <h3>Repositories</h3>
                <small>55+ on GitHub</small>
            </article>
          </div>

           <p  data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000">
               I'm Ranjan Sharma. Online most people know me as Konsept. I'm based in the USA and work as a cybersecurity and software engineer.
              <br /><br />
               Lately I've been building in Rust and TypeScript: a Nepali-syntax language called LyangLang, research tools like Synapse and Clinical Trial Matcher, and smaller web apps I ship under ranjansharma.info.np. I like chess, astronomy, and hiking when I'm not at a keyboard.
           </p>

           <a href='#contact' className='btn btn-primary' aria-label="Contact Ranjan Sharma" data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">Let's chat <FaTelegramPlane aria-hidden="true" focusable="false" /></a>
        </div>
      </div>
    </section>
  )
}

export default About
