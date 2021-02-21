import React from "react";
import styled from "styled-components";
import { GlobeSVG } from "../atoms/icons/icon";
import ContentDiv from "../atoms/contentDiv/ContentDiv";
import NavButton from "../atoms/NavButton/NavButton";
import UserButton from "./UserButton";

const NavRightContainer = styled.div`
  background-color: #ffffff;
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`;

const MenuButton = styled(NavButton)`
  &:hover {
    background: #ecf0f1;
  }
`;

const RightNav = () => (
  <NavRightContainer>
    <MenuButton>
      <ContentDiv>호스트 되기</ContentDiv>
    </MenuButton>

    <MenuButton>
      <ContentDiv>
        <GlobeSVG />
      </ContentDiv>
    </MenuButton>
    <UserButton />
  </NavRightContainer>
);

export default RightNav;
