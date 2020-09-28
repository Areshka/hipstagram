import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const StyledButton = styled.button.attrs({
  type: 'submit'
})`
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

export const StyledFollowButton = styled(StyledButton).attrs({
  type: 'button'
})` 
  width: 100%;
  padding: 7px 30px;
  font-size: .778rem;
  ${props => props.profile && 'margin-bottom: 15px'};

  background-color:${props => props.isFollow ? " #fe7171" : '#4d88ed'};

  &:hover {
    background-color:${props => props.isFollow ? " #fc4040" : '#0c64fa'};
  }

  &:active {
    background-color:${props => props.isFollow ? " #f58c8c" : '#76a4f5'};  
  } 

  @media ${device.mobileM} {
    width: ${props => props.profile ? '100%' : '120px'};
    ${props => props.profile && 'margin-bottom: 0; font-size: 1.1rem;'};  
  }

  @media ${device.tablet} {    
    ${props => props.profile && 'font-size: 1.333rem;'};  
  }
`;