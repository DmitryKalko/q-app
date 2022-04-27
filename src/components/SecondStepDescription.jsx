import React from "react";
import secondStep from "./svg/second-step.svg";

const SecondStepDescription = ({ lightTheme }) => {
  return (
    <div className="step">
      <p style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}>
        Please fill in additional information
      </p>
      <img src={secondStep} alt="firstStep" />
    </div>
  );
};
export default SecondStepDescription;
