import React from "react";
import styled from "styled-components";
import Category from "../footer/Category";
import Detail from "../footer/Detail";

const FooterContainer = styled.div`
  padding: 0 24px;
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
`;

const Footer = () => (
  <FooterContainer>
    <Category />
    <Detail />
  </FooterContainer>
);

export default Footer;
