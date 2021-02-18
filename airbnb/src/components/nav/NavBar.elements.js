import styled from 'styled-components'
import { FaAirbnb } from 'react-icons/fa'

const NavLogo = styled(FaAirbnb)`
  position: relative;
  top: 10px;
  font-size: 45px;
`

const NavContainer = styled.header`
  height: 80px;
  width: 100%;
  position: fixed;
  left: 0;
  --header-brand-color: #ff385c;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: none;

  @media (min-width: 744px){
    display: block;
  }
`

const Nav = styled.div`
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
  position: relative;
  vertical-align: middle;
  align-items: center;
  text-decoration:none;
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



const NavButton = styled.button`
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
  width: ${(props) => props.width};

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
  padding: 0 16px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const NavGuestDiv = styled.div`
  font-size: 14px;
  line-height: 18px;
  flex: 1 1 auto;
  min-width: 0px;
  padding: 0 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #717171;
  font-weight: 400;
`

const NavSearchIcon = styled.div`
  background-color: #ff385c;
  border-radius: 50%;
  color: #ffffff;
  flex: 0 0 32;
  height: 32px;
  margin: 7px 7px 7px 0;
  padding: 10px;
  width: 32px;
`

const VerticalSpan = styled.span`
  background-color: #dddddd;
  height: 24px;
  width: 1px;
`
const NavRightContainer = styled.div`
  background-color: #ffffff;
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`
const MenuButton = styled.button`
  display: inline-flex;
  margin: 0px;
  background: transparent;
  border-color: #ffffff;
  height: 42px;
  position: relative;
  vertical-align: middle;
  border-radius: 21px;
  border: 0px solid transparent;
  cursor: pointer;
  width : ${props => props.width};

  &:hover {
    background: #ecf0f1;
  }
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
  NavRightContainer,
  NavButton,
  NavContentDiv,
  NavGuestDiv,
  NavSearchIcon,
  VerticalSpan,
  MenuButton,
  NavLogo
}
