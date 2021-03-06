import React from "react";

import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import SideBar from "./SideBar/SideBar";

function HeaderNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HeaderNavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default HeaderNav;
