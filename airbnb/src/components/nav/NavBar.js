import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiBasketball } from 'react-icons/bi'
import {
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
} from './NavBar.elements'

const NavBar = () => (
  <NavContainer>
    <Nav>
      <NavLeftContainer>
        <NavLeft href="/">
          <NavLargeLogo>
            <NavLogo />
            airbnb
          </NavLargeLogo>
          <NavSmallLogo>
            <NavLogo />
          </NavSmallLogo>
        </NavLeft>
      </NavLeftContainer>

      <NavCenterContainer>
        <NavCenter>
          <NavButton>
            <NavContentDiv>근처 추천 장소</NavContentDiv>
          </NavButton>
          <VerticalSpan />
          <NavButton>
            <NavContentDiv>날짜 입력</NavContentDiv>
          </NavButton>
          <VerticalSpan />
          <NavButton>
            <NavGuestDiv>게스트 추가</NavGuestDiv>
            <NavSearchIcon>
              <FaSearch />
            </NavSearchIcon>
          </NavButton>
        </NavCenter>
      </NavCenterContainer>

      <NavRightContainer>
        <MenuButton>
          <NavContentDiv>호스트 되기</NavContentDiv>
        </MenuButton>
        <MenuButton>
          <NavContentDiv>
            <BiBasketball size="20" />
          </NavContentDiv>
        </MenuButton>
        <MenuButton>
          <NavContentDiv>
            <FiMenu size="20" />
          </NavContentDiv>
          <NavContentDiv>
            <BsFillPersonFill size="20" />
          </NavContentDiv>
        </MenuButton>
      </NavRightContainer>
    </Nav>
  </NavContainer>
)

export default NavBar
