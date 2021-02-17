import React from 'react'
import { FaSearch, FaAirbnb } from 'react-icons/fa'
import {
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
} from './NavBar.elements'

const NavBar = () => (
  <Nav>
    <NavContainer>
      <NavLeftContainer>
        <NavLeft>
          <NavLargeLogo>
            <FaAirbnb />
            airbnb
          </NavLargeLogo>
          <NavSmallLogo>
            <FaAirbnb />
          </NavSmallLogo>
        </NavLeft>
      </NavLeftContainer>

      <NavCenterContainer>
        <NavCenter>
          <NavCenterButton>
            <NavContentDiv>서울</NavContentDiv>
          </NavCenterButton>
          <VerticalSpan />
          <NavCenterButton>
            <NavContentDiv>날짜 입력</NavContentDiv>
          </NavCenterButton>
          <VerticalSpan />
          <NavCenterButton>
            <NavGuestDiv>게스트 추가</NavGuestDiv>
            <NavSearchIcon>
              <FaSearch />
            </NavSearchIcon>
          </NavCenterButton>
        </NavCenter>
      </NavCenterContainer>

      <NavRight>asd</NavRight>
    </NavContainer>
  </Nav>
)

export default NavBar
