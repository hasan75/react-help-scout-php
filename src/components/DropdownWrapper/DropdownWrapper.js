import React from "react";

function DropdownWrapper(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default DropdownWrapper;
