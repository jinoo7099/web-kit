import React from "react";
import styled from "styled-components";
import { PreviousSVG, CategorySVG } from "../atoms/icons/icon";
import VerticalSpan from "../atoms/verticalLine/VerticalLine";
import NavButton from "../atoms/NavButton/NavButton";
import ContentDiv from "../atoms/contentDiv/ContentDiv";

const MobileHeader = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 999;
  background: #ffffff;
  display: none;
  @media (max-width: 744px) {
    display: block;
  }
`;

const MobileHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarMobile = () => (
  <MobileHeader>
    <MobileHeaderContainer>
      <MobileContainer>
        <NavButton>
          <PreviousSVG />
        </NavButton>
        <ContentDiv>서울</ContentDiv>
      </MobileContainer>
      <MobileContainer>
        <ContentDiv>날짜 입력</ContentDiv>
        <VerticalSpan />
        <MobileContainer style={{ marginTop: "4px", marginLeft: "15px" }}>
          <CategorySVG />
        </MobileContainer>
      </MobileContainer>
    </MobileHeaderContainer>
  </MobileHeader>
);

export default NavbarMobile;
