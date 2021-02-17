import styled from 'styled-components'

const Nav = styled.header`
  height: 80px;
  width: 100%;
  position: fixed;
  left: 0;
  --header-brand-color: #ff385c !important;
`

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const NavLeftContainer = styled.div`
  flex: 0 0 auto;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`
const NavLeft = styled.a`
  display: inline-flex;
  height: 80px;
  color: #ff385c;
  vertical-align: middle;
  position: relative;
  align-items: center;
  ::before {
    content: '';
    position: absolute;
    bottom: 8px;
    left: -8px;
    right: -8px;
    top: 8px;
  }
`

const NavLargeLogo = styled.div`
  display: none;
  font-size: 30px;
  font-weight: 600;
  @media (min-width: 1128px) {
    display: block;
  }
`

const NavSmallLogo = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media (min-width: 1128px) {
    display: none;
  }
`

const NavCenterContainer = styled.div`
  padding: 0 24px;
  min-width: 0;
  flex: 0 1 auto;
`

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
`

const NavRight = styled.div`
  background-color: green;
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`

// const NavRegion = styled.div``

const NavCenterButton = styled.button`
  cursor: pointer;
  height: 48px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 24px;
  display: flex;
  align-items: center;
  margin: -1px;
  flex: 0 1 auto;
  z-index: 1;

  :first-of-type {
    padding-left: 8px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
`

const NavContentDiv = styled.div`
  font-size: 14px;
  line-height: 18px;
  flex: 1 1 auto;
  min-width: 0px;
  font-weight: 600;
  text-overflow: ellipsis;
  padding: 0 16px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
`

const NavGuestDiv = styled.div`
  font-size: 14px !important;
  line-height: 18px !important;
  -webkit-flex: 1 1 auto !important;
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
  min-width: 0px !important;
  padding: 0 16px !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  color: #717171 !important;
  font-weight: 400 !important;
`

const NavSearchIcon = styled.div`
  background-color: #ff385c !important;
  border-radius: 50% !important;
  color: #ffffff !important;
  -webkit-flex: 0 0 32 !important;
  -ms-flex: 0 0 32 !important;
  flex: 0 0 32 !important;
  height: 32px !important;
  margin: 7px 7px 7px 0 !important;
  padding: 10px !important;
  width: 32px !important;
`

const VerticalSpan = styled.span`
  background-color: #dddddd;
  flex: 0 0 1px;
  height: 24px;
  width: 1px;
`
export {
  Nav,
  NavContainer,
  NavLeftContainer,
  NavLeft,
  NavLargeLogo,
  NavSmallLogo,
  NavCenterContainer,
  NavCenter,
  NavRight,
  NavCenterButton,
  NavContentDiv,
  NavGuestDiv,
  NavSearchIcon,
  VerticalSpan,
}
