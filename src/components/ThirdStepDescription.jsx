import React from "react";
import thirdStep from "./svg/third-step.svg";

const ThirdStepDescription = ({ lightTheme }) => {
  return (
    <div className="step">
      <p style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}>
        How do you want to receive notifications?
      </p>
      <img src={thirdStep} alt="firstStep" />
    </div>
  );
};
export default ThirdStepDescription;
