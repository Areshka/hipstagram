import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`  
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`;

export const StyledModal = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const StyledModalContent = styled.div`
  position: absolute;
  width: 80%;
  max-width: 768px;
  max-height: 80vh;
  padding: 0;
  background-color: #fefefe;
  border: 1px solid #888;
  animation: ${fadeInDown} 0.2s linear;
`;

export const StyledModalBody = styled.div`
  display: flex;
  height: 60vh;
`;

export const StyledPostImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: #000;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const StyledUserBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40%;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d4d4d4;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }

  span {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const StyledPostTitle = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  border-bottom: 1px solid #d4d4d4;
`;

export const StyledCommets = styled.div`
  flex-grow: 1;
`;

export const StyledButton = styled.button.attrs({
  type: "submit",
})`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4d88ed;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FormComment = styled.form`
  display: flex;
  align-items: center;
  padding-right: 5px 10px 5px 0;
`;

export const StyledModalClose = styled.span`
  position: absolute;
  top: -35px;
  right: -25px;
  color: rgb(141, 140, 140);
  font-size: 38px;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: rgb(54, 54, 54);
    text-decoration: none;
    cursor: pointer;
  }
`;
