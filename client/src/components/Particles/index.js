import React from "react";
import Particles from "react-particles-js";

import "./style.scss";
const Particle = () => (
  <Particles
    className="particle"
    params={{
      polygon: {
        enable: true,
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
          },
        },
        size: {
          value: 10,
          random: true,
        },
        move: {
          direction: "bottom",
          out_mode: "out",
        },
        line_linked: {
          enable: true,
        },
      },
      interactivity: {
        modes: {
          remove: {
            particles_nb: 100,
          },
        },
      },
    }}
  />
);

export default Particle;
