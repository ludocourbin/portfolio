import React from "react";
import { Card as CardSemantic } from "semantic-ui-react";
import ReactPlayer from "react-player/lazy";

import "./style.scss";

const Card = ({ name, description, url }) => (
  <CardSemantic className="card-">
    <div className="card--video-container" style={{ width: "500px" }}>
      <ReactPlayer url={url} />
      <section className="card--content">
        <h1>{name}</h1>
        <p>{description}</p>
      </section>
    </div>
  </CardSemantic>
);

export default Card;
