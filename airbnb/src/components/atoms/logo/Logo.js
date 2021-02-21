import styled from "styled-components";

export const LargeLogo = styled.div`
  display: none;
  font-size: 30px;
  font-weight: 600;
  @media (min-width: 1128px) {
    display: block;
  }
`;

export const SmallLogo = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media (min-width: 1128px) {
    display: none;
  }
`;
