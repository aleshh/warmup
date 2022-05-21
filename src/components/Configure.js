import { Settings as Icon } from "react-feather";

const style = {};

const buttonStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  padding: 10,
  background: "none",
  border: "none",
};

export default function Configure(props) {
  return (
    <div style={style} {...props}>
      <button style={buttonStyle}>
        <Icon />
      </button>
    </div>
  );
}
