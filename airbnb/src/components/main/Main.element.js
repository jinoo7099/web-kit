import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`

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
`

export const MainTitleWrapper = styled.div`
  width: 100%;
  height: 70%;
  padding-top: 50px;
`

export const MainTitleLabel = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #222222;
  padding-bottom: 8px;
`

export const MainTitle = styled.h1`
  font-size: 26;
  line-height: 30px;

  @media (min-width: 744px) {
    font-size: 32px;
    line-height: 36px;
  }
`

export const MainIntrdButtonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  padding-top: 20px;
`

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
`

export const MainIntrdSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`
export const MainSection = styled.section`
  width: 100%;
  min-height: 400px;
`

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
`

export const MainSectionLabelContainer = styled.div`
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
    padding-right: 88px;
    padding-left: 88px;
  }
`
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
`

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
`

export const RoomImage = styled.div`
  margin-bottom: 10px;
  border-radius: 8px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const MainFooter = styled.div`
  width: 100%;
  height: 200px;
`

export const FooterContainer = styled.div`
  margin: 32px;
  height: 100%;
  text-align: center;
`

export const NumberSelect = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

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
`

export const FooterLabel = styled.div``
