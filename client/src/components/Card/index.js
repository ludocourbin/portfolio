import React from "react";
import { Card } from "semantic-ui-react";
import ReactPlayer from "react-player/lazy";

import "./style.scss";

const CardExampleCardProps = ({ name, description }) => (
  <Card className="card-">
    <div className="card--video-container" style={{ width: "500px" }}>
      <ReactPlayer url="https://streamable.com/kh8yxz" />
      <section className="card--content">
        <h1>{name}</h1>
        <p>{description}</p>
      </section>
    </div>
  </Card>
);

export default CardExampleCardProps;
