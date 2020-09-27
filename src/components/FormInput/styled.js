import styled from 'styled-components';
import searchIcon from '../../assets/images/icons/icon_search.svg'

const primaryInputStyles = {
  marginBottom: '0',
  padding: '7px',
  fontSize: '.8rem',
}

const defaultInputStyles = {
  padding: '14px 17px 13px',
  fontSize: '1rem',
}

export const Input = styled.input` 
  width: 100%;
  margin-bottom: 6px;  
  font: normal 1rem/1.22 Roboto, sans-serif;  
  background-color: #fefefe;
  border: 2px solid #c0bfbf;
  border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#c0bfbf'};
  border-radius: 10px;
  outline: none;
  transition: border-color .2s linear;
  
  &.search {
    padding-left: 40px;    
    background: #fefefe url(${searchIcon}) no-repeat 12px center;
    background-size: 15px;
  }
  
  ${props => props.primary ? primaryInputStyles : defaultInputStyles};

  &:focus {    
    border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#4d88ed'};
  }  
`;