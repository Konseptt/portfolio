import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <article className="container header__container">
        <div className="header__content">
          <p
            className="header__greeting"
            data-aos="fade-up"
            data-aos-anchor=".header__content"
            data-aos-duration="900"
          >
            Hi, I'm
          </p>
          <h1
            data-aos="fade-up"
            data-aos-anchor=".header__content"
            data-aos-duration="700"
          >
            Ranjan Sharma
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor=".header__content"
            data-aos-duration="600"
            className="header__tagline"
          >
            I build software and security tools in Rust and TypeScript.
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor=".header__content"
            data-aos-duration="500"
            className="text-light header__roles"
          >
            Cybersecurity engineer · Software engineer · Front-end developer
          </p>
          <CTA />
        </div>

        <HeaderSocial />

        <a href="#about" className="scroll__down" aria-label="Scroll to about section">
          Scroll down
        </a>
      </article>
    </header>
  );
};

export default Header;
