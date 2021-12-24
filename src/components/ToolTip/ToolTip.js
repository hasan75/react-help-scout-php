import React from "react";
import "./ToolTip.css";

function ToolTip(props) {
  const { children, to = "bottom" } = props;
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className={`tooltip ${to}`}>
        <div className="tooltip-data">
          The shared inbox designed with all the organization, collaboration,
          and automation features your team needs to do more with less and give
          customers a human, helpful experience. <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default ToolTip;
