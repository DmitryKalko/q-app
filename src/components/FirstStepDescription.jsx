import React from "react";
import firstStep from "./svg/first-step.svg";

const FirstStepDescription = ({ lightTheme }) => {
  return (
    <div className="step">
      <p style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}>Hey!</p>
      <p style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}>
        What is your name?
      </p>
      <img src={firstStep} alt="firstStep" />
      <p>dh</p>
    </div>
  );
};
export default FirstStepDescription;
