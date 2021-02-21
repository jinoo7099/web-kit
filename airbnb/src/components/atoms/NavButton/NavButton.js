import styled from "styled-components";

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
`;

export default NavButton;
