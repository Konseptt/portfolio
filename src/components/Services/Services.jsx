import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <p className="section__subtitle" data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='700'>What I work on</p>
      <h2 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='900'>Services</h2>
      
      <div className="container services__container">
        <article className="service" data-aos="fade-right" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>Software engineering</h3>
          </div>
          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Apps and tools in Rust, TypeScript, Python, Java, and C++.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Compilers, CLIs, and projects where I need to understand how things work under the hood.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Open source on GitHub; most of my work is public.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Research and data tools, including PubMed search and clinical-trial lookup.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Side projects from idea to deployed product.</p>
             </li>
          </ul>
        </article>

        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>React and Next.js front ends.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Layouts that work on mobile and desktop.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>REST APIs, auth, and hooking up third-party services.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Deploy to Vercel, GitHub Pages, and custom domains.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                <p>Debug production issues when something breaks.</p>
            </li>
          </ul>
        </article>

        <article className="service" data-aos="fade-left" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
          <h3>Cybersecurity</h3>
          </div>
          <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                 <p>Web app security reviews and pen testing.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                 <p>Find misconfigs and common vulns before they hit prod.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                  <p>Password and crypto utilities (see HashPass).</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                 <p>Security-minded defaults in the apps I build.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon' aria-hidden="true" focusable="false" />
                 <p>Help teams tighten auth, headers, and deployment setup.</p>
              </li>
            </ul>
          </article>

      </div>
    </section>
  )
}

export default Services
