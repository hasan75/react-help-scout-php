import React from "react";

function DropdownItem(props) {
  return (
    <a href="#" className="dropdown-item">
      {props.img ? (
        <img
          src={props.img}
          alt="Icon: Shared Inbox"
          role="img"
          class="NavItemOption__NavItemOptionIMG-sc-1kimpxw-1 eNNTqO"
        />
      ) : (
        ""
      )}
      <div className="dropdown-item-content">
        <p className="fs-15px darkest-blue graphik-medium ">{props.title}</p>
        <p className="fs-13px light-blue graphik-light">{props.subtitle}</p>
      </div>
    </a>
  );
}

export default DropdownItem;
