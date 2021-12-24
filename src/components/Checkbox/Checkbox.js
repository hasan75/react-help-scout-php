import React from "react";
import "./Checkbox.css";

function Checkbox({ label, value, onChange }) {
  return (
    <div class="checkbox">
      <input
        id="my-check"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label for="my-check" className="fs-14px dark-blue graphik-light">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
