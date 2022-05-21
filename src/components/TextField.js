import withStyles from "@mui/styles/withStyles";

import { TextField as MuiTextField } from "@mui/material";

const TextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": { "& fieldset": { border: "2px solid black" } },
  },
})(MuiTextField);

export default TextField;
