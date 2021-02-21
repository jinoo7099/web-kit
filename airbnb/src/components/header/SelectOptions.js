import React from "react";
import styled from "styled-components";
import VerticalLine from "../atoms/verticalLine/VerticalLine";
import { SearchSVG } from "../atoms/icons/icon";
import ContentDiv from "../atoms/contentDiv/ContentDiv";
import NavButton from "../atoms/NavButton/NavButton";

const NavCenterContainer = styled.div`
  padding: 0 24px;
  min-width: 0;
  flex: 0 1 auto;
`;

const NavCenter = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 24px;
  color: #222222;
  max-width: 100%;
  text-align: left;
  vertical-align: center;
`;

const NavSearchIconDiv = styled.div`
  background-color: #ff385c;
  border-radius: 50%;
  color: #ffffff;
  flex: 0 0 32;
  height: 32px;
  margin: 7px 7px 7px 0;
  padding: 10px;
  width: 32px;
`;

const SelectOptions = () => (
  <NavCenterContainer>
    <NavCenter>
      <NavButton>
        <ContentDiv>서울</ContentDiv>
      </NavButton>
      <VerticalLine />
      <NavButton>
        <ContentDiv>날짜 입력</ContentDiv>
      </NavButton>
      <VerticalLine />
      <NavButton>
        <ContentDiv style={{ fontWeight: "400" }}>게스트 추가</ContentDiv>
        <NavSearchIconDiv>
          <SearchSVG />
        </NavSearchIconDiv>
      </NavButton>
    </NavCenter>
  </NavCenterContainer>
);

export default SelectOptions;
