import React, { useState } from "react";
import Header from "./Header/Header";
import HeaderLinks from "./Header/HeaderLink"
import SideBar from "./SideBar";
import { isMobile } from "react-device-detect";

const MenuBar = () => {
  const [open, setOpen] = useState(isMobile ? false : true);

  const onChange = value => {
    setOpen(value);
  };

  return (
    <div>
      <Header
        brand="Marketing online"
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
      />
      {/* <SideBar open={open} onChange={onChange} /> */}
    </div>
  );
};

export default MenuBar;
