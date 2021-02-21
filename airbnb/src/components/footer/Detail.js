import React from "react";
import styled from "styled-components";
import {
  FacebookSVG,
  TwitterSVG,
  InstargramSVG,
  GlobeSVG,
} from "../atoms/icons/icon";

const DetailContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;

  @media (max-width: 1128px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const DetailLink = styled.a``;

const DetailLeftContainer = styled.div`
  flex: 1 1 auto;
  margin-right: 20px;
`;

const DetailCenterContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  @media (max-width: 744px) {
    justify-content: flex-start;
  }
`;

const DetailRightContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media (max-width: 744px) {
    display: none;
  }
`;

const DetailSpan = styled.div`
  position: relative;
  font-weight: 600;
  text-decoration: underline;
`;

const Detail = () => (
  <DetailContainer>
    <DetailRightContainer>
      <FacebookSVG />
      <TwitterSVG />
      <InstargramSVG />
    </DetailRightContainer>

    <DetailCenterContainer>
      <div style={{ display: "flex", marginRight: "20px" }}>
        <GlobeSVG style={{ marginRight: "10px" }} />
        <DetailSpan>한국어</DetailSpan>
      </div>

      <div style={{ display: "flex" }}>
        <span style={{ marginRight: "10px" }}>\</span>
        <DetailSpan>KRW</DetailSpan>
      </div>
    </DetailCenterContainer>

    <DetailLeftContainer>
      <div style={{ display: "inline-block" }}>
        @ 2021 Airbnb, Inc. All rights reserved
      </div>
      <div style={{ display: "inline-block" }}>
        <DetailLink>개인정보 처리방침</DetailLink>
        <span> · </span>
        <DetailLink>이용약관</DetailLink>
        <span> · </span>
        <DetailLink>사이트맵</DetailLink>
        <span> · </span>
        <DetailLink>한국의 변경된 환불 정책</DetailLink>
        <span> · </span>
        <DetailLink>회사 세부정보</DetailLink>
      </div>
    </DetailLeftContainer>
  </DetailContainer>
);

export default Detail;
