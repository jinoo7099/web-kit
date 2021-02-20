import React from "react";
import {
  MainContainer,
  MainIntrd,
  MainTitleWrapper,
  MainIntrdButtonWrapper,
  MainIntrdButton,
  MainIntrdSpan,
  MainTitleLabel,
  MainTitle,
  MainSection,
  MainSectionLabel,
  RoomWrapper,
  RoomContainer,
  MainSectionLabelContainer,
  MainFooter,
  FooterContainer,
  NumberSelect,
  FooterLabel,
  NumberButton,
} from "./Main.element";
import { MobileIntrdButtonWrapper } from "./Main.mobile.element";
import { NextSvg, PreviousSVG } from "../atoms/icons/icon";
import Room from "./Room";
import roomData from "../../assets/mockdata/rooms.json";

const Main = () => (
  <MainContainer>
    <MainIntrd>
      <MainTitleWrapper>
        <MainTitleLabel>300개 이상의 숙소</MainTitleLabel>
        <MainTitle>서울의 숙소</MainTitle>
      </MainTitleWrapper>
      <MainIntrdButtonWrapper>
        <MainIntrdButton>
          <MainIntrdSpan>숙소유형</MainIntrdSpan>
        </MainIntrdButton>
        <MainIntrdButton>
          <MainIntrdSpan>요금</MainIntrdSpan>
        </MainIntrdButton>
        <MainIntrdButton>
          <MainIntrdSpan>즉시 예약</MainIntrdSpan>
        </MainIntrdButton>
        <MainIntrdButton>
          <MainIntrdSpan>필터 추가하기</MainIntrdSpan>
        </MainIntrdButton>
      </MainIntrdButtonWrapper>
      <MobileIntrdButtonWrapper>
        <MainIntrdButton>
          <MainIntrdSpan>필터</MainIntrdSpan>
        </MainIntrdButton>
      </MobileIntrdButtonWrapper>
    </MainIntrd>

    <MainSection>
      <MainSectionLabelContainer>
        <MainSectionLabel>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</MainSectionLabel>
      </MainSectionLabelContainer>

      <RoomContainer>
        {roomData.rooms.map((item) => (
          <RoomWrapper>
            <Room address={item.address} grade={item.grade} type={item.type} description={item.description} images={item.images} />
          </RoomWrapper>
        ))}
      </RoomContainer>
    </MainSection>

    <MainFooter>
      <FooterContainer>
        <NumberSelect>
          <NumberButton>
            <PreviousSVG />
          </NumberButton>
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>...</NumberButton>
          <NumberButton>15</NumberButton>
          <NumberButton>
            <NextSvg />
          </NumberButton>
        </NumberSelect>
        <FooterLabel style={{ fontWeight: "700", marginBottom: "50px" }}>숙소 300개 이상 중 1-20</FooterLabel>
        <FooterLabel>전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다.</FooterLabel>
      </FooterContainer>
    </MainFooter>
  </MainContainer>
);

export default Main;
