import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'
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
} from './Main.element'
import Room from './Room'
import roomData from '../../assets/mockdata/rooms.json'

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
    </MainIntrd>

    <MainSection>
      <MainSectionLabelContainer>
        <MainSectionLabel>
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.
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

    <MainFooter>
      <FooterContainer>
        <NumberSelect>ads</NumberSelect>
        <FooterLabel>ddd</FooterLabel>
      </FooterContainer>
    </MainFooter>
  </MainContainer>
)

export default Main
