import React from "react";
import heroImg from "../../assets/images/Maisha Mir_LI.jpg";
import arrow from "/icons/arrow button circle.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../../assets/Maisha Mir - Resume.pdf"
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      <div className="hero__content">
        {/* <img src={heroImg} className="hero__img" alt="img of maisha mir" /> */}
        <div className="hero__text">
          <h1 className="hero__title">Hey! I'm <span className="hero__title-italic">Maisha</span></h1>
          <p className="hero__blurb">I'm a fullstack developer based in Victoria, BC.</p>
          <a href={resume} target="_blank" className="hero__resume">Resume</a>
        </div>
          </div>
          
          <div className="hero__arrow bounce">
              <a href="#projects"><i className="fa-solid fa-circle-arrow-down fa-2x" style={{color: "#fbf6e0"}} /></a>
      </div>
    </main>
  );
}

export default Hero;