import React from "react";
import styled from "styled-components";
import { NextSvg, PreviousSVG } from "../atoms/icons/icon";

export const MainFooter = styled.div`
  width: 100%;
  height: 200px;
`;

export const FooterContainer = styled.div`
  margin: 32px;
  height: 100%;
  text-align: center;
`;

export const NumberSelect = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NumberButton = styled.button`
  background: transparent;
  width: 40px;
  height: 30px;
  border: 0px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background: #ecf0f1;
  }
`;

export const FooterLabel = styled.div``;

const Footer = () => (
  <MainFooter>
    <FooterContainer>
      <NumberSelect>
        {[
          <PreviousSVG />,
          "1",
          "2",
          "3",
          "4",
          "5",
          "...",
          "15",
          <NextSvg />,
        ].map((item) => (
          <NumberButton>{item}</NumberButton>
        ))}
      </NumberSelect>
      <FooterLabel style={{ fontWeight: "700", marginBottom: "50px" }}>
        숙소 300개 이상 중 1-20
      </FooterLabel>
      <FooterLabel>
        전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될
        수 있습니다.
      </FooterLabel>
    </FooterContainer>
  </MainFooter>
);

export default Footer;
