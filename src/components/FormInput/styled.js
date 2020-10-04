import styled from 'styled-components';
import searchIcon from '../../assets/images/icons/icon_search.svg'

export const Input = styled.input` 
  width: 100%;
  margin-bottom: ${props => props.invalid ? '6px' : '0'};
  padding: 9px 12px;
  font: normal .8rem/1.22 Roboto, sans-serif;
  background-color: #fefefe;
  border: 1px solid #c0bfbf;
  border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#c0bfbf'};
  border-radius: 10px;
  outline: none;
  transition: border-color .2s linear;

  &:focus {    
    border-color: ${props => props.invalid ? 'rgb(243, 69, 69)' : '#4d88ed'};
  }

  &.auth {
    padding: 14px 17px 13px;
    font-size: 1rem;
  }

  &.search {
    padding-left: 40px;    
    background: #fefefe url(${searchIcon}) no-repeat 12px center;
    background-size: 15px;
  }

  &.comment {
    padding: 10px;
    border: none;
  }

  &[type="file"] {
    border: none;
    padding: 0;
    border-radius: 0;
  }
`;