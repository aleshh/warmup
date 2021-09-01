import { Button as MuiButton } from "@material-ui/core";

const Button = (props) => (
  <MuiButton
    style={{
      border: "2px solid black",
      fontWeight: "bold",
      height: 60.75,
      marginRight: 5,
      marginLeft: 5,
      borderColor: "black",
    }}
    variant="outlined"
    {...props}
  />
);

export default Button;
