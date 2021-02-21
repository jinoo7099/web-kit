import React from "react";
import styled from "styled-components";

const MobileIntrdButtonWrapper = styled.div`
  display: none;
  @media (max-width: 744px) {
    display: flex;
    padding-top: 30px;
  }
`;

export const MainIntrd = styled.div`
  max-width: 1760px;
  height: 180px;
  max-width: 1080px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    margin: 0 auto;
    position: relative;
    max-width: 1760px;
    padding-right: 80px;
    padding-left: 80px;
  }
`;

export const MainTitleWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  @media (max-width: 744px) {
    padding-top: 30px;
  }
`;

export const MainTitleLabel = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #222222;
  padding-bottom: 8px;
`;

export const MainTitle = styled.h1`
  font-size: 26;
  line-height: 30px;

  @media (min-width: 744px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const MainIntrdButtonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  padding-top: 20px;

  @media (max-width: 744px) {
    display: none;
  }
`;

export const MainIntrdButton = styled.button`
  height: 36px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 30px;
  border: 1px solid #b0b0b0;
  padding: 8px 16px;
  margin-right: 10px;
  color: #222222;
  cursor: pointer;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
  background-color: #ffffff;

  &:hover {
    border-color: black;
  }
`;

export const MainIntrdSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const Intrd = () => (
  <MainIntrd>
    <MainTitleWrapper>
      <MainTitleLabel>300개 이상의 숙소</MainTitleLabel>
      <MainTitle>서울의 숙소</MainTitle>
    </MainTitleWrapper>
    <MainIntrdButtonWrapper>
      {["숙소유형", "요금", "즉시 예약", "필터 추가하기"].map((item) => (
        <MainIntrdButton>
          <MainIntrdSpan>{item}</MainIntrdSpan>
        </MainIntrdButton>
      ))}
    </MainIntrdButtonWrapper>
    <MobileIntrdButtonWrapper>
      <MainIntrdButton>
        <MainIntrdSpan>필터</MainIntrdSpan>
      </MainIntrdButton>
    </MobileIntrdButtonWrapper>
  </MainIntrd>
);

export default Intrd;
