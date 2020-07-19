import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae
          id voluptatem a dolorum quis dolore! Cumque recusandae eum, possimus
          omnis magni distinctio ut culpa assumenda, ipsam consequatur repellat
          reiciendis tenetur soluta! Laborum distinctio aliquam blanditiis animi
          nesciunt deserunt ut ad facere culpa quos? Non, dolorem fuga. Itaque,
          assumenda saepe!
        </p>
      </div>
    </div>
  );
}
