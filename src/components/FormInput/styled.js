import styled from 'styled-components';
import searchIcon from '../../images/icon_search.svg'

const searchStyled = {
  marginBottom: '0',
  padding: '7px',
  paddingLeft: '40px',
  fontSize: '.8rem',
  background: `#fefefe url(${searchIcon}) no-repeat 12px center`,
  backgroundSize: '15px',
  border: 'none',
}

const InputStyled = {
  padding: '14px 17px 13px',
  fontSize: '1rem',      
}

export const Input = styled.input ` 
  width: 100%;
  margin-bottom: 6px;  
  font: normal 1rem/1.22 Roboto, sans-serif;  
  background-color: #fefefe;
  border: 2px solid #c0bfbf;
  border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#c0bfbf'};
  border-radius: 10px;
  outline: none;
  transition: border-color .2s linear;

  ${props => props.search ? searchStyled : InputStyled}

  &:focus {    
    border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#4d88ed'};
  }  
`;