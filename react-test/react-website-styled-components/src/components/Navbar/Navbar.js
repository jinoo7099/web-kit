import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from "./Navbar.element";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick="{handleClick}">{click ? <FaTimes /> : <FaBars />}</MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
