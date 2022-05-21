import { Button as MuiButton } from "@mui/material";

const Button = (props) => (
  <MuiButton
    style={{
      border: "2px solid black",
      fontWeight: "bold",
      height: 60.75,
      marginRight: 2,
      marginLeft: 2,
      borderColor: "black",
    }}
    variant="outlined"
    {...props}
  />
);

export default Button;
