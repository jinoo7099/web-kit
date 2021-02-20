import React from 'react'
import styled from 'styled-components'
import { NavGlobeSvg } from '../header/NavBar.elements'
import { FacebookSVG, TwitterSVG, InstargramSVG } from '../atoms/icons/icon'

const FooterContainer = styled.div`
  padding: 24px 80px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }

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
`

const GroupTitle = styled.h1`
  padding: 10px;
  font-size: 16px;
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
  justify-content: space-between;
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
  justify-content: space-space-between;
`

const DetailRightContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
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
        <LinkText>에어비앤비 이용 방법</LinkText>
        <LinkText>뉴스룸</LinkText>
        <LinkText>투자자 정보</LinkText>
        <LinkText>에어비앤비 플러스</LinkText>
        <LinkText>에어비앤비 Luxe</LinkText>
        <LinkText>호텔투나잇</LinkText>
        <LinkText>에어비앤비 비즈니스 프로그램</LinkText>
        <LinkText>올림픽</LinkText>
        <LinkText>채용정보</LinkText>
      </GroupContainer>
      <GroupContainer>
        <GroupTitle>커뮤니티</GroupTitle>
        <LinkText>다양성 및 소속감</LinkText>
        <LinkText>접근성</LinkText>
        <LinkText>에어비앤비 어소시에이트</LinkText>
        <LinkText>구호 인력을 위한 숙소</LinkText>
        <LinkText>친구 초대하기</LinkText>
        <LinkText>Airbnb.org</LinkText>
      </GroupContainer>
      <GroupContainer>
        <GroupTitle>호스팅하기</GroupTitle>
        <LinkText>숙소 호스팅</LinkText>
        <LinkText>온라인 체험 호스팅하기</LinkText>
        <LinkText>체험 호스팅하기</LinkText>
        <LinkText>책임감 있는 호스팅</LinkText>
        <LinkText>자료센터</LinkText>
        <LinkText>커뮤니티 센터</LinkText>
      </GroupContainer>
      <GroupContainer>
        <GroupTitle>에어비앤비 지원</GroupTitle>
        <LinkText>에어비앤비의 코로나19 대응 방안</LinkText>
        <LinkText>도움말 센터</LinkText>
        <LinkText>예약 취소 옵션</LinkText>
        <LinkText>에어비앤비 이웃 민원 지원</LinkText>
        <LinkText>신뢰와 안전</LinkText>
      </GroupContainer>
    </CategoryContainer>
    <DetailContainer>
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
      <DetailCenterContainer>
        <NavGlobeSvg />
        <DetailSpan>한국어</DetailSpan>
        <DetailSpan>KRW</DetailSpan>
      </DetailCenterContainer>
      <DetailRightContainer>
        <FacebookSVG />
        <TwitterSVG />
        <InstargramSVG />
      </DetailRightContainer>
    </DetailContainer>
  </FooterContainer>
)

export default Footer
