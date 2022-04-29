import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import data from "../store/data";
import { observer } from "mobx-react-lite";

import useIsMobile from "../hooks/useIsMobile";

const SecondStep = observer(({ toNextStep, toPrevStep, lightTheme }) => {
  const isMobile = useIsMobile();

  const setGender = (e) => {
    data.setGender(e.target.value);
  };
  const setPolicyAgree = (e) => {
    data.setPolicyAgree(e.target.checked);
  };

  return (
    <div className="second-step">
      <Box sx={isMobile ? { width: 100 } : { width: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.store.gender}
            label="Gender"
            onChange={setGender}
            sx={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              id="checkbox-agree"
              sx={{ color: "#50c2b7" }}
              onChange={setPolicyAgree}
              checked={data.store.policyAgree}
            />
          }
          label="I agree with the site policy"
          sx={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
        />
      </FormGroup>
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
          onClick={toNextStep}
          style={lightTheme ? { color: "white" } : { color: "#6d6d6d" }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
});

export default SecondStep;
