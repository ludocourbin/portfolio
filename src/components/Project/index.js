import React from "react";
import ReactPlayer from "react-player/lazy";

import Data from "./project";

import "./styles.scss";

const Project = ({ id }) => (
  <div id={id} className="project">
    <h1 className="project-title">Projets</h1>
    <div className="project-content">
      {Data.map(({ name, description }, index) => (
        <div key={index} className="project--card">
          <div className="project--card-video">
            <ReactPlayer url="https://streamable.com/kh8yxz" />
          </div>
          <div className="project--card-content">
            <div className="project--card-content-title">{name}</div>
            <div className="project--card-content-description">
              {description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
