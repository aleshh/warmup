import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import ThemeProvider from "./components/ThemeProvider";
import Button from "./components/Button";
import TextField from "./components/TextField";
import "./App.css";

const roundDownFive = (val) => {
  return Math.floor(val / 5) * 5;
};

const plates = [45, 45, 45, 35, 25, 10, 5, 5, 2.5];

const getPlateHeight = (weight) =>
  ({ 45: 6, 35: 5, 25: 4, 10: 3, 5: 2, 2.5: 1 }[weight] * 10 + 40);

const calculatePlates = (targetWeight) => {
  const weightPerSide = (targetWeight - 45) / 2;

  const result = plates.reduce(
    (acc, current) => {
      const potentialWeight = acc.total + current;
      if (potentialWeight <= weightPerSide) {
        return { total: potentialWeight, arr: [...acc.arr, current] };
      }

      return acc;
    },
    { total: 0, arr: [] }
  );

  return result.arr;
};

const multipliers = {
  bench: [0, 0.5, 0.7, 0.9, 1],
  deadlift: [0.4, 0.6, 0.85, 1],
  press: [0, 0.55, 0.7, 0.85, 1],
  squat: [0, 0.4, 0.6, 0.8, 1],
};

const calculateWeight = (weight, multiplier) => {
  let result = weight * multiplier;
  result /= 5;
  result = Math.floor(result);
  result *= 5;
  return result < 45 ? 45 : result;
};

function App() {
  const [warmup, setWarmup] = useState("bench");
  const [value, setValue] = useState("150");

  const sets = multipliers[warmup].map((m) => calculateWeight(value, m));

  const handleBlur = () => {
    const newValue = roundDownFive(value);
    if (value !== newValue) {
      setValue(newValue);
    }
  };

  return (
    <ThemeProvider>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="warmup"
              name="warmup"
              value={warmup}
              onChange={(e) => setWarmup(e.target.value)}
              row
            >
              {Object.keys(multipliers).map((key, i) => (
                <FormControlLabel
                  value={key}
                  key={key}
                  control={<Radio style={{ color: "black" }} />}
                  label={key}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button onClick={() => setValue(parseInt(value) - 50)}>–50</Button>
          <Button onClick={() => setValue(parseInt(value) - 5)}>–5</Button>
          <TextField
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
            }}
            style={{
              width: 96,
              marginRight: 2,
              marginLeft: 2,
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
          />
          <Button onClick={() => setValue(parseInt(value) + 5)}>+5</Button>
          <Button onClick={() => setValue(parseInt(value) + 50)}>+50</Button>
        </div>
        <div>
          {sets.map((m) => (
            <div key={m} style={{ margin: 20, fontWeight: "bold" }}>
              {m} lbs.{" "}
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                <div style={{ background: "black", height: 8, width: 60 }} />
                {calculatePlates(m).map((plate, i) => (
                  <div
                    key={i}
                    style={{
                      background: "black",
                      color: "rgb(255, 196, 0)",
                      borderRight: "1px solid rgb(255, 196, 0)",
                      width: 25,
                      height: getPlateHeight(plate),
                      lineHeight: `${getPlateHeight(plate)}px`,
                      textAlign: "center",
                    }}
                  >
                    {plate === 2.5 ? (
                      <>
                        2<span style={{ fontSize: ".7rem" }}>½</span>
                      </>
                    ) : (
                      plate
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
