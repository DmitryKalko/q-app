import React, { useState, useEffect } from "react";

import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FirstStepDescription from "./FirstStepDescription";
import SecondStepDescription from "./SecondStepDescription";
import ThirdStepDescription from "./ThirdStepDescription";
import CustomizedSwitches from "./ThemeSwitcher";

import "./App.css";

import data from "../store/data";

const App = () => {
  const [step, setStep] = useState(1);
  const [lightTheme, setLightTheme] = useState(true);
  const [stateData, setStateData] = useState({});

  useEffect(() => {
    setStateData(data.store);
  }, []);

  const switchTheme = () => {
    setLightTheme(!lightTheme);
  };

  const toSecondStep = () => {
    if (stateData.firstName && stateData.lastName) {
      setStep(step + 1);
    } else {
      validationAlert();
    }
  };

  const toThirdStep = () => {
    if (stateData.gender && stateData.policyAgree) {
      setStep(step + 1);
    } else {
      validationAlert();
    }
  };

  const toPrevStep = () => {
    setStep(step - 1);
  };

  const validationAlert = () => {
    alert("Please fill in all fields");
  };

  const showAlert = () => {
    if (stateData.notifications) {
      alert("You have successfully completed all the steps!");
      alert(JSON.stringify(data));
      location.reload();
    } else {
      validationAlert();
    }
  };

  return (
    <div className="main">
      <div className="form">
        <div className="left-part">
          {step === 1 && <FirstStepDescription lightTheme={lightTheme} />}
          {step === 2 && <SecondStepDescription lightTheme={lightTheme} />}
          {step === 3 && <ThirdStepDescription lightTheme={lightTheme} />}
        </div>

        <div className="right-part">
          <div className="changeTheme">
            <CustomizedSwitches switchTheme={switchTheme} />
          </div>
          <div className="component">
            {step === 1 && (
              <FirstStep toNextStep={toSecondStep} lightTheme={lightTheme} />
            )}
            {step === 2 && (
              <SecondStep
                toNextStep={toThirdStep}
                toPrevStep={toPrevStep}
                lightTheme={lightTheme}
              />
            )}
            {step === 3 && (
              <ThirdStep
                toFinishStep={showAlert}
                toPrevStep={toPrevStep}
                lightTheme={lightTheme}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
