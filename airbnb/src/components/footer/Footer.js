import React from 'react'
import styled from 'styled-components'
import { NavGlobeSvg } from '../header/NavBar.elements'
import { FacebookSVG, TwitterSVG, InstargramSVG } from '../atoms/icons/icon'

const FooterContainer = styled.div`
  padding:0 24px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;


  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`

const GroupContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 20px;
  @media (max-width: 744px) {
    border-bottom: 1px solid #dddddd;
  }
`

const LinkText = styled.a`
  padding: 10px;
  font-size: 14px;
  @media (max-width:744px){
    padding: 5px;
  }
`

const GroupTitle = styled.h1`
  padding: 10px;
  font-size: 16px;
  @media (max-width:744px){
    padding: 5px;
  }
`

const CategoryContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dddddd;

  @media (max-width: 744px) {
    flex-flow: column nowrap;
  }
`

const DetailContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;

  @media (max-width: 1128px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`

const DetailLink = styled.a``

const DetailLeftContainer = styled.div`
  flex: 1 1 auto;
  margin-right: 20px;
`

const DetailCenterContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  @media (max-width: 744px) {
   justify-content: flex-start;
  }
`

const DetailRightContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media (max-width: 744px) {
    display: none;
  }
`

const DetailSpan = styled.div`
  position: relative;
  font-weight: 600;
  text-decoration: underline;
`


const Footer = () => (
  <FooterContainer>
    <CategoryContainer>
      <GroupContainer>
        <GroupTitle>소개</GroupTitle>
        {["에어비앤비 이용 방법", "뉴스룸", "투자자 정보",
          "에어비앤비 플러스", "에어비앤비 Luxe", "호텔투나잇",
          "에어비앤비 비즈니스 프로그램", "올림픽", "채용정보"]
          .map((item) => (<LinkText>{item}</LinkText>))}
      </GroupContainer>
      <GroupContainer>
        <GroupTitle>커뮤니티</GroupTitle>
        {["다양성 및 소속감", "접근성", "에어비앤비 어소시에이트",
          "구호 인력을 위한 숙소", "친구 초대하기", "Airbnb.org"]
          .map((item) => (<LinkText>{item}</LinkText>))}
      </GroupContainer>
      <GroupContainer>
        <GroupTitle>호스팅하기</GroupTitle>
        {["숙소 호스팅", "온라인 체험 호스팅하기", "체험 호스팅하기",
          "책임감 있는 호스팅", "자료센터", "커뮤니티 센터"]
          .map((item) => (<LinkText>{item}</LinkText>))}
      </GroupContainer>
      <GroupContainer>
        <GroupTitle>에어비앤비 지원</GroupTitle>
        {["에어비앤비의 코로나19 대응 방안", "도움말 센터", "예약 취소 옵션",
          "에어비앤비 이웃 민원 지원", "신뢰와 안전"]
          .map((item) => (<LinkText>{item}</LinkText>))}
      </GroupContainer>
    </CategoryContainer>
    <DetailContainer>
      <DetailRightContainer>
        <FacebookSVG />
        <TwitterSVG />
        <InstargramSVG />
      </DetailRightContainer>

      <DetailCenterContainer>
        <div style={{ display: 'flex', marginRight: '20px' }}>
          <NavGlobeSvg style={{ marginRight: '10px' }} />
          <DetailSpan>한국어</DetailSpan>
        </div>

        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '10px' }}>\</span>
          <DetailSpan>KRW</DetailSpan>

        </div>
      </DetailCenterContainer>

      <DetailLeftContainer>
        <div style={{ display: 'inline-block' }}>
          @ 2021 Airbnb, Inc. All rights reserved
        </div>
        <div style={{ display: 'inline-block' }}>
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

  </FooterContainer>
)

export default Footer
