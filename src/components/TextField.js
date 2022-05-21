import { withStyles } from "@material-ui/core/styles";

import { TextField as MuiTextField } from "@material-ui/core";

const TextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": { "& fieldset": { border: "2px solid black" } },
  },
})(MuiTextField);

export default TextField;
