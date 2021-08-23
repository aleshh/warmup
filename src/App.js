import { useState } from "react";
import { createTheme } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";

const roundDownFive = (val) => {
  return Math.floor(val / 5) * 5;
};

const plates = [45, 45, 45, 35, 25, 10, 5, 5, 2.5];
const plateHeights = {
  45: 45,
  35: 40,
  25: 35,
  10: 30,
  5: 25,
  2.5: 20,
};

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
  squat: [0, 0.4, 0.6, 0.8, 1],
  "bench press": [0, 0.5, 0.7, 0.9, 1],
  deadlift: [0.4, 0.6, 0.85, 1],
  "standing press": [0, 0.55, 0.7, 0.85, 1],
};

const calculateWeight = (weight, multiplier) => {
  let result = weight * multiplier;
  result /= 5;
  result = Math.floor(result);
  result *= 5;
  return result < 45 ? 45 : result;
};

function App() {
  const [warmup, setWarmup] = useState("squat");
  const [value, setValue] = useState("130");

  const sets = multipliers[warmup].map((m) => calculateWeight(value, m));

  const handleSetValue = (e) => {
    const value = roundDownFive(e.targe.value);
    setValue(value);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          fontFamily: '"Share Tech", sans-serif',
          fontWeightRegular: "bold",
        },
        palette: {
          primary: {
            main: "#000000",
          },
        },
        shape: {
          borderRadius: 0,
        },
      })}
    >
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
              className={undefined}
              aria-label="warmup"
              name="warmup"
              value={warmup}
              onChange={(e) => setWarmup(e.target.value)}
              row
            >
              {Object.keys(multipliers).map((key, i) => (
                <FormControlLabel
                  className={undefined}
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
          <Button
            style={{ height: 60.75, marginRight: 10, borderColor: "black" }}
            variant="outlined"
            // color="default"
            onClick={() => setValue(parseInt(value) - 5)}
          >
            –
          </Button>
          <TextField
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
            }}
            style={{
              width: 90,
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            style={{ height: 60.75, marginLeft: 10, borderColor: "black" }}
            variant="outlined"
            color="default"
            onClick={() => setValue(parseInt(value) + 5)}
          >
            +
          </Button>
        </div>
        <div>
          {sets.map((m) => (
            <div style={{ margin: 20, fontWeight: "bold" }}>
              {m} lbs.{" "}
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                <div style={{ background: "black", height: 8, width: 60 }} />
                {calculatePlates(m).map((plate) => (
                  <div
                    style={{
                      background: "black",
                      color: "rgb(255, 196, 0)",
                      borderRight: "1px solid rgb(255, 196, 0)",
                      width: 25,
                      height: plateHeights[plate] * 1.5,
                      lineHeight: `${plateHeights[plate] * 1.5}px`,
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
