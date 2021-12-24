import React from "react";
import "./LinkBtn.css";

function LinkBtn(props) {
  const { className = "fs-15px", wrapperClassName } = props;
  return (
    <div className={`link-btn fs-15px ${wrapperClassName}`}>
      <p className={`${className}`}>{props.title}</p>
    </div>
  );
}

export default LinkBtn;
