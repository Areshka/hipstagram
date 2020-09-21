import styled from 'styled-components';

export const Input = styled.input` 
  width: 100%;
  margin-bottom: 6px;
  padding: 14px 17px 13px;
  font: normal 1rem/1.22 Roboto, sans-serif;
  background-color: #fefefe;
  border: 2px solid #c0bfbf;
  border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#c0bfbf'};
  border-radius: 10px;
  outline: none;
  transition: border-color .2s linear;

  &:focus {    
    border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#4d88ed'};
  }
`;