import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import data from "../store/data";
import { observer } from "mobx-react-lite";

const ThirdStep = observer(({ toFinishStep, toPrevStep, lightTheme }) => {
  const setNotifications = (e) => {
    data.setNotifications(e.target.value);
  };

  return (
    <div className="third-step">
      <FormControl>
        <RadioGroup
          id="radio-group"
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          value={data.store.notifications}
          name="radio-buttons-group"
          sx={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
          onChange={setNotifications}
        >
          <FormControlLabel value="day" control={<Radio />} label="Every day" />
          <FormControlLabel
            value="week"
            control={<Radio />}
            label="Once a week"
          />
          <FormControlLabel
            value="month"
            control={<Radio />}
            label="Once a month"
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="I don't need notifications"
          />
        </RadioGroup>
      </FormControl>
      <div className="btns-block">
        <button
          className="btn"
          onClick={toPrevStep}
          style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
        >
          BACK
        </button>
        <button
          className="btn"
          onClick={toFinishStep}
          style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
});
export default ThirdStep;
