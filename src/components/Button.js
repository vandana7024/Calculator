import React from "react";
import "./Button.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div>
      <div
        className="button"
        style={{ backgroundColor: color }}
        onClick={() => handleClick(symbol)}
      >
        {symbol}
      </div>
    </div>
  );
};

export default Button;
