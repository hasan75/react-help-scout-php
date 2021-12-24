import ToolTip from "components/ToolTip/ToolTip";
import React from "react";

function SupportCard(props) {
  return (
    <div className={` ${props.className}`} style={{ borderRadius: "50%" }}>
      <ToolTip to={props.tooltipTo}>
        <div className={`ring-outer-content `}>
          <img
            src={props.img}
            alt=""
            className="ring-outer-content-img mb-10px"
          />
          <p className="uppercase fs-10px light-blue text-center graphik-medium lh-2">
            {props.children}
          </p>
        </div>
      </ToolTip>
    </div>
  );
}

export default SupportCard;
