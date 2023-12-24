import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='700'>The things i can do for you</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='900'>My Services</h2>
      
      <div className="container services__container">
        <article className="service" data-aos="fade-right" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>
          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon'/>
                <p>well-versed in programming languages such as Java, Python, and C++.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing user personas and user journeys to represent target audience.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>very familiar with software development tools such as Git, Eclipse, and IntelliJ.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing the layout, navigation, and visual elements of the user interface.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>Continuously testing and iterating on the design to improve usability and effectiveness.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>Continuously testing and iterating on the design to improve usability.</p>
             </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing and building websites and web applications using best practices.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing responsive, mobile-friendly websites that work on various devices.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Implementing features and functionality using server-side languages</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Setting up and configuring servers and hosting environments</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Testing and debugging websites and applications to ensure functionality</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Providing technical support and assistance to website users and clients.</p>
            </li>
          </ul>
        </article>

        {/* End of web development  */}


        <article className="service" data-aos="fade-left" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>Cyber Security</h3>
          </div>
          <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>solid understanding of cyber security principles and best practices.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>completed online courses in network security, cryptography, and ethical hacking.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p> working on it</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p> working on it</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p> working on it</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>working on it</p> 
              </li>
            </ul>
          </article>

          {}



      </div>
    </section>
  )
}

export default Services