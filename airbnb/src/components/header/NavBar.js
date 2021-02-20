import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
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
  NavLogo,
  NavGlobeSvg,
  Header,
} from './NavBar.elements'
import { MobileHeader, MobileHeaderContainer, MobileNavSpan, MobileNavButton, MobileContainer } from './Navbar.mobile.el'
import { PreviousSVG, CategorySVG } from '../atoms/icons/icon'

const NavBar = () => (
  <Header>
    <MobileHeader>
      <MobileHeaderContainer>
        <MobileContainer>
          <MobileNavButton>
            <PreviousSVG />
          </MobileNavButton>
          <MobileNavSpan>서울</MobileNavSpan>
        </MobileContainer>
        <MobileContainer>
          <MobileNavSpan>날짜 입력</MobileNavSpan>
          <VerticalSpan />
          <MobileContainer style={{ marginTop: '4px', marginLeft: "10px" }}>
            <CategorySVG />
          </MobileContainer>
        </MobileContainer>
      </MobileHeaderContainer>
    </MobileHeader>

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
              <NavContentDiv>서울</NavContentDiv>
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
              <NavGlobeSvg />
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
  </Header>
)

export default NavBar
