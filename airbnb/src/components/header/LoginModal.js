import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function LoginModal({ className, visible, onClose }) {
  const [inputs, setInputs] = useState({ id: "", pwd: "" });

  const login = () => {
    const { id, pwd } = inputs;
    const data = [{ id: "123", pwd: "1234" }];
    if (data.some((x) => x.id === id && x.pwd === pwd)) {
      console.log("로그인 성공");
    }

    console.log("실패");
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <LoginHeader>
            <h3>로그인</h3>
            <CloseButton onClick={onClose}>X</CloseButton>
          </LoginHeader>
          <LoginContainer>
            <IdContainer>
              <IdInput name="id" placeholder="Id" onChange={onChange} />
            </IdContainer>
            <PwdContainer>
              <PwdInput
                name="pwd"
                placeholder="Password"
                type="password"
                onChange={onChange}
              />
            </PwdContainer>
            <LoginButton onClick={login}>계속</LoginButton>
          </LoginContainer>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

LoginModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const CloseButton = styled.button`
  background: transparent;
  border-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 550px;
  height: 650px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const IdInput = styled.input`
  width: 90%;
  height: 80%;
  border-color: transparent;
`;

const PwdInput = styled.input`
  width: 90%;
  height: 80%;
  border-color: transparent;
`;

const IdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border: 1px solid black;
  border-bottom-width: 0px;
`;

const PwdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  border: 1px solid black;
`;

const LoginContainer = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding-bottom: 20px;
`;

const LoginButton = styled.button`
  width: 80%;
  height: 48px;
  margin-top: 30px;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  color: #ffffff;
`;

const LoginHeader = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(235, 235, 235);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default LoginModal;
