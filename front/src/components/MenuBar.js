import React from "react";
import { Button } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const MenuBar = ({ toggleSidebar }) => {
  return (
    <div style={{ position: "fixed", top: "20px", left: "20px", zIndex: 1000 }}>
      <Button onClick={toggleSidebar}>
        <MenuIcon style={{ fontSize: 30, color: "#808D7C" }} />
      </Button>
    </div>
  );
};

export default MenuBar;
