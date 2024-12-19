import React from "react";
import "./App.css";

const colors = [
  "button_green",
  "button_blue",
  "button_orange",
  "button_red",
  "button_yellow",
];

const Button = ({ value, selectedTopics, colorIndex, handleClick }) => {
  const index = selectedTopics.indexOf(value);
  let className;
  if (index !== -1) {
    const colourpick = colorIndex[index] % 5;
    className = colors[colourpick];
  } else {
    className = "button_default";
  }
  
  return (
    <button
      className={`${className} button`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
