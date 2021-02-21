import React from "react";
import styled from "styled-components";
import { GlassSVG, HeartSVG, UserSVG } from "../atoms/icons/icon";

export const MobileNav = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  height: 65px;
  overflow: hidden;
  z-index: 100;
  display: none;
  @media (max-width: 744px) {
    display: block;
  }
`;

export const MobileNavContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 560px;
`;

export const MobileNavLink = styled.a`
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  max-width: 20%;
  min-width: 0px;
  padding: 0 2px;
  text-align: center;
  color: #222222;
`;

export const MobileNavContent = styled.div`
  font-size: 10px;
  line-height: 12px;
  max-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

export const MobileNavSVG = styled.div`
  height: 30px;
  margin-bottom: 2px;
  padding: 3px;
  width: 30px;
  color: #ff385c;
`;

const MainMobile = () => (
  <MobileNav>
    <MobileNavContainer>
      <MobileNavLink>
        <MobileNavSVG>
          <GlassSVG />
        </MobileNavSVG>
        <MobileNavContent>둘러보기</MobileNavContent>
      </MobileNavLink>
      <MobileNavLink>
        <MobileNavSVG>
          <HeartSVG />
        </MobileNavSVG>
        <MobileNavContent>저장 목록</MobileNavContent>
      </MobileNavLink>
      <MobileNavLink>
        <MobileNavSVG>
          <UserSVG />
        </MobileNavSVG>
        <MobileNavContent>로그인</MobileNavContent>
      </MobileNavLink>
    </MobileNavContainer>
  </MobileNav>
);
export default MainMobile;
