import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./style.scss";

export default class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="nav">
        <ul className="nav-items">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ludoviccourbin/"
              className="sns-btn sns-btn--linkedin"
            >
              <FaLinkedinIn className="sns-btn__icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/ludocourbin"
              className="sns-btn sns-btn--github"
            >
              <FaGithub className="sns-btn__icon" />
            </a>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Qui suis-je ?
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
