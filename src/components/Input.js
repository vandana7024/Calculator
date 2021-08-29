import React from "react";
import "./Input.css";

const Input = ({ text, result }) => {
  return (
    <div className="input">
      <div className="result">
        <h1>{result}</h1>
      </div>
      <div className="text">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Input;
