import { useState } from "react";
import "./App.css";

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

  return (
    <div>
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
                control={<Radio />}
                label={`hi ${key}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Button>–</Button>
        <TextField value={value} onChange={(e) => setValue(e.target.value)} />
        <Button>+</Button>
      </div>
    </div>
  );
}

export default App;
