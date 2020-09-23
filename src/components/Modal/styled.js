import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, .4);  
`;

export const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 20px;
  text-align: center;
  background-color: #fefefe;
  border: 1px solid #888;  
  transform: translate(-50%, -50%);
`;

export const StyledModalClose = styled.span.attrs({
  type: "button"
})`
  position: absolute;
  top: -5px;
  right: 5px;
  color: rgb(141, 140, 140);
  font-size: 28px;
  font-weight: bold;
  transition: color .2s ease;

  &:hover,
  &:focus {
    color: rgb(54, 54, 54);
    text-decoration: none;
    cursor: pointer;
  }
`;