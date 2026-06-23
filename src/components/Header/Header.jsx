import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <article className="container header__container">
        <p
          className="header__greeting"
          data-aos="fade-up"
          data-aos-anchor=".header__container"
          data-aos-duration="1200"
        >
          Hello I'm
        </p>
        <h1
          data-aos="fade-up"
          data-aos-anchor=".header__container"
          data-aos-duration="1000"
        >
          Ranjan Sharma
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor=".header__container"
          data-aos-duration="900"
          className="text-light header__roles"
        >
          CYBERSECURITY ENGINEER · SOFTWARE ENGINEER · FRONT-END DEVELOPER
        </p>
        <CTA />

        <HeaderSocial />

        <div className="logo">
          <img
            className="logo-image"
            data-aos="slide-up"
            data-aos-anchor=".logo"
            data-aos-duration="1400"
            src="/e.webp"
            alt="Ranjan Sharma - cybersecurity and software engineer portrait"
            width="840"
            height="840"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <a href="#contact" className="scroll__down" aria-label="Contact Ranjan Sharma">
          Scroll Down {">>"}{" "}
        </a>
      </article>
    </header>
  );
};

export default Header;
