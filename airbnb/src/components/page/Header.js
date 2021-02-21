import React from "react";
import styled from "styled-components";
import NavbarMobile from "../header/Header.mobile";
import Logo from "../header/Logo";
import SelectOptions from "../header/SelectOptions";
import RightNav from "../header/RightNav";

const NavContainer = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  left: 0;
  --header-brand-color: #ff385c;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: none;
  z-index: 999;
  background: #ffffff;
  @media (min-width: 744px) {
    display: block;
  }
`;

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 80px;
`;

const NavBar = () => (
  <Header>
    <NavbarMobile />
    <NavContainer>
      <Nav>
        <Logo />
        <SelectOptions />
        <RightNav />
      </Nav>
    </NavContainer>
  </Header>
);

export default NavBar;
