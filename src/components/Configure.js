import { useState } from "react";
import { Drawer } from "@material-ui/core";
import { Settings as SettingsIcon, X as CloseIcon } from "react-feather";

const drawerStyle = {
  width: "calc(100vw )",
};

const buttonStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  padding: 16,
  background: "none",
  border: "none",
  "&: hover": {
    background: "red",
  },
};

export default function Configure(props) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button onClick={toggleOpen} style={buttonStyle}>
        <SettingsIcon />
      </button>
      <Drawer anchor="right" open={open} onClose={toggleOpen}>
        <button onClick={toggleOpen} style={buttonStyle}>
          <CloseIcon />
        </button>
        <div style={drawerStyle}>Drawer!</div>
      </Drawer>
    </>
  );
}
