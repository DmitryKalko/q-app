import React from "react";

import data from "../store/data";
import { observer } from "mobx-react-lite";

const FirstStep = observer(({ toNextStep, lightTheme }) => {
  const setFirstName = (e) => {
    data.setFirstName(e.target.value);
  };
  const setLastName = (e) => {
    data.setLastName(e.target.value);
  };

  return (
    <div className="first-step">
      <input
        type={"text"}
        placeholder="first name"
        style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
        onChange={setFirstName}
        value={data.store.firstName}
      />
      <input
        type={"text"}
        placeholder="second name"
        style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
        onChange={setLastName}
        value={data.store.lastName}
      />
      <button
        className="btn"
        onClick={toNextStep}
        style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
      >
        NEXT
      </button>
    </div>
  );
});

export default FirstStep;
