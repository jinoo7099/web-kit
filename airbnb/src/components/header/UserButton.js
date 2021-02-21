import React, { useState } from "react";
import styled from "styled-components";
import { MenuSVG, PersonSVG } from "../atoms/icons/icon";
import ContentDiv from "../atoms/contentDiv/ContentDiv";
import NavButton from "../atoms/NavButton/NavButton";
import LoginModal from "./LoginModal";

const MenuButton = styled(NavButton)`
  &:hover {
    background: #ecf0f1;
  }
`;

const UserButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <MenuButton onClick={openModal}>
        <ContentDiv>
          <MenuSVG size="20" />
        </ContentDiv>
        <ContentDiv>
          <PersonSVG size="20" />
        </ContentDiv>
      </MenuButton>
      {modalVisible && (
        <LoginModal
          visible={modalVisible}
          closable
          maskClosable
          onClose={closeModal}
        >
          <MenuButton onClick={closeModal}>종료</MenuButton>
        </LoginModal>
      )}
    </>
  );
};

export default UserButton;
