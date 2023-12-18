import React from "react";
import Switch from "@mui/material/Switch";

function MySwitch() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "1rem"}}>
      <span style={{ marginRight: ".1rem", fontSize: "11px" }}>Weight</span>
      <Switch
        checked={checked}
        onChange={handleChange}
        name="mySwitch"
        color="primary"
      />
      <span style={{ marginLeft: ".1rem", fontSize: "11px" }}>Units</span>
    </div>
  );
}

export default MySwitch;
