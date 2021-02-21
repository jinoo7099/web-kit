import React from "react";
import styled from "styled-components";
import { FaAirbnb } from "react-icons/fa";
import { LargeLogo, SmallLogo } from "../atoms/logo/Logo";

const NavLeftContainer = styled.div`
  flex: 0 0 auto;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`;

const NavLeft = styled.a`
  display: inline-flex;
  height: 80px;
  color: #ff385c;
  position: relative;
  vertical-align: middle;
  align-items: center;
  text-decoration: none;
`;

const NavLogo = styled(FaAirbnb)`
  position: relative;
  top: 10px;
  font-size: 45px;
`;

const Logo = () => (
  <NavLeftContainer>
    <NavLeft href="/">
      <LargeLogo>
        <NavLogo />
        airbnb
      </LargeLogo>
      <SmallLogo>
        <NavLogo />
      </SmallLogo>
    </NavLeft>
  </NavLeftContainer>
);

export default Logo;
