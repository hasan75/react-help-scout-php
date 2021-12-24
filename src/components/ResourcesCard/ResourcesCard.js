import React from "react";
import "./ResourcesCard.css";

function ResourcesCard(props) {
  return (
    <a href="#" className="resources-card">
      <div className="radius-4px resources-card-img mb-20px">
        <img src={props.img} className="" alt="" />
      </div>
      <p className="overline graphik-medium">{props.headline}</p>
      <p className="darkest-blue fs-18px graphik-semibold">{props.title}</p>
    </a>
  );
}

export default ResourcesCard;
