import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 11px 59px;  
  font-weight: 400;
  font-size: 1.333rem;
  line-height: 1.167;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #4d88ed;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;  
  transition: background-color .2s ease;

  &:hover {
    background-color: #0c64fa;
  }

  &:active {
    background-color: #76a4f5;
  }

  &.btn {
    padding: 11px 20px;  
    font-size: .8rem;
  }
`;

export const StyledDefaultButton = styled(StyledButton)`  
  padding: 7px 30px;
  font-size: .778rem;  
 
  background-color:${props => props.isFollow ? " #fe7171" : '#4d88ed'};

  &:hover {
    background-color:${props => props.isFollow ? " #fc4040" : '#0c64fa'};
  }

  &:active {
    background-color:${props => props.isFollow ? " #f58c8c" : '#76a4f5'};  
  } 

  &.btn-follow {
    padding-left: 0;
    padding-right: 0;
    width: 120px;
  }

  &.btn-profile {
    width: 100%;
  }

  @media ${device.mobileM} {
    font-size: .878rem; 
   
    &.btn-profile {
      font-size: 1.1rem;
    }    
  }

  @media ${device.tablet} { 
    font-size: .978rem;   

     &.btn-profile {
      font-size: 1.333rem;
    }       
  }
`;