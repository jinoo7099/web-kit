import React from "react";
import styled from "styled-components";
import Intrd from "../main/Main.Intrd";
import Section from "../main/Main.Section";
import Footer from "../main/Main.Footer";
import MainMobile from "../main/Main.mobile";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Main = () => (
  <MainContainer>
    <Intrd />
    <Section />
    <Footer />
    <MainMobile />
  </MainContainer>
);

export default Main;
