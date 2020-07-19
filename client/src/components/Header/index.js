import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import Particles from "../Particles";

import Navbar from "../Navbar";

import "./styles.scss";
// <Particles />

const Header = ({ id }) => (
  <div id={id} className="header">
    <Navbar />
    <div className="header--content">
      <h1 className="header--content-title">
        Hello ! Je suis Ludovic Courbin 💻 ⚡️
      </h1>
      <h2 className="header--content-subtitle">
        Développeur web full stack JS
      </h2>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className="header--content-button">
          Regarder mes projets:)
        </button>
      </Link>
    </div>
  </div>
);

export default Header;
