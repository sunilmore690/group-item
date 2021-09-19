import React, { useState } from "react";

export default function SelectGroup({ options = [] }) {
  const [activeItem, setActiveItem] = useState("");
  function handleSelection(option) {
    setActiveItem(option.label);
  }
  return (
    <div class="select-group">
      {options.map((option) => (
        <div
          onClick={(e) => handleSelection(option)}
          className={
            "select-group-item " + (activeItem === option.label ? "active" : "")
          }
        >
          <div
            class="select-group-item-top"
            style={{ backgroundColor: option.color }}
          >
            {activeItem === option.label ? option.label : null}
          </div>
          {activeItem !== option.label ? <div>{option.label}</div> : null}
          <div class="select-group-item-body">{option.value}</div>
        </div>
      ))}
    </div>
  );
}
