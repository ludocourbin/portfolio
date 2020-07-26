import React from "react";

import Creepyface from "react-creepyface";

import serious from "../../assets/creepyface/img/serious.jpeg";
import hover from "../../assets/creepyface/img/hover.jpeg";
import img0 from "../../assets/creepyface/img/0.jpeg";
import img45 from "../../assets/creepyface/img/45.jpeg";
import img90 from "../../assets/creepyface/img/90.jpeg";
import img135 from "../../assets/creepyface/img/135.jpeg";
import img180 from "../../assets/creepyface/img/180.jpeg";
import img225 from "../../assets/creepyface/img/225.jpeg";
import img270 from "../../assets/creepyface/img/270.jpeg";
import img315 from "../../assets/creepyface/img/315.jpeg";

import { FaHeart, FaStar, FaHandsHelping } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

// Styles
import "./styles.scss";
//hello
const About = ({ id }) => (
  <div id={id} className="about">
    <div className="about--image">
      <h1 className="about--title">
        On connaît réelement quelqu'un seulement quand on le connaît sur toutes
        ses facettes :)
      </h1>
      <Creepyface
        src={serious}
        options={{
          hover: `${hover}`,
          looks: [
            { angle: 0, src: `${img0}` },
            { angle: 45, src: `${img45}` },
            { angle: 90, src: `${img90}` },
            { angle: 135, src: `${img135}` },
            { angle: 180, src: `${img180}` },
            { angle: 225, src: `${img225}` },
            { angle: 270, src: `${img270}` },
            { angle: 315, src: `${img315}` },
          ],
        }}
      />
      ,
    </div>
    <div className="about--content">
      <h1 className="about--title">Qui suis-je ?</h1>
      <section className="about--content-p">
        <p>
          <span className="about--content-span">
            <FaHeart />{" "}
          </span>{" "}
          Après un parcours varié mais ayant toujours été attiré par le monde
          numérique j’ai décidé de me reconvertir professionnellement.
        </p>

        <p>
          <span className="about--content-span">
            <FaStar />
          </span>
          Je suis actuellement une formation chez O’Clock de 5 mois ou nous
          apprenons HTML, CSS, SQL, JS, Node.JS, Express dont un mois dédié à se
          spécialiser sur React.
        </p>

        <p>
          <span className="about--content-span">
            <FaHandsHelping />
          </span>
          À partir de Septembre à la fin de la formation, je serai à la
          recherche d'une opportunité dans ce domaine, en région toulousaine ou
          dans d’autres régions de France (tout est permis).
        </p>
        <p>
          <span className="about--content-span">
            <GrContact />{" "}
          </span>
          Pour me contacter ? &nbsp; Rien de plus simple :
          ludovic.courbin@gmail.com ou en privé sur &nbsp;
          <a target="_blank" href="https://www.linkedin.com/in/ludoviccourbin/">
            Linkedin &nbsp;
          </a>
        </p>
      </section>
    </div>
  </div>
);

export default About;
