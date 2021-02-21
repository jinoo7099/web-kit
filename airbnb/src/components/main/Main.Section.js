import React from "react";
import styled from "styled-components";
import Room from "./Room";
import roomData from "../../assets/mockdata/rooms.json";

export const MainSection = styled.section`
  width: 100%;
  min-height: 400px;
`;

export const MainSectionLabel = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  font-size: 14px;
  line-height: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
  font-weight: 400;
  border-bottom: 1px solid #dddddd;
  color: #717171;
`;

export const MainSectionLabelContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
  max-width: 1600px;

  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    margin: 0 auto;
    position: relative;
    max-width: 1760px;
    padding-right: 88px;
    padding-left: 88px;
  }
`;
export const RoomWrapper = styled.div`
  width: 100%;
  display: inline-block;
  padding-top: 8px;
  padding-right: 8px;

  @media (min-width: 744px) {
    width: 50%;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (min-width: 1128px) {
    width: 25%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
`;

export const RoomContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1600px;
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

const Section = () => (
  <MainSection>
    <MainSectionLabelContainer>
      <MainSectionLabel>
        여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.
      </MainSectionLabel>
    </MainSectionLabelContainer>

    <RoomContainer>
      {roomData.rooms.map((item) => (
        <RoomWrapper>
          <Room
            address={item.address}
            grade={item.grade}
            type={item.type}
            description={item.description}
            images={item.images}
          />
        </RoomWrapper>
      ))}
    </RoomContainer>
  </MainSection>
);

export default Section;
