import styled from 'styled-components'
import {
  device
} from '../../constants/breakpoint';

export const ProfileAccount = styled.div`
  margin-bottom: 40px;

  @media ${device.mobileM} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProfileAvatar = styled.div`
  margin-bottom: 15px;
  text-align: center;    
  
  img {        
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;    
  }

  @media ${device.mobileM} {
    margin-bottom: 0;
    margin-right: 50px;    
  }
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
  font-size: .889rem; 

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.1rem;
  }

  @media ${device.tablet} {   
    font-size: 1.333rem;
  }
`;

export const ProfileNumbers = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px; 
  margin-top: 0;

  a {
    text-decoration: none;
    color: #1a1a2e;
  }

  @media ${device.mobileM} {
    margin-bottom: 0;  
  }
`;

export const ProfileText = styled.p`
  font-size: .9rem;
  margin-top: 15px;  

  @media ${device.mobileM} {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1rem;
  }
`;

export const StyledAddPostBtn = styled.div`
  margin-bottom: 20px;

  a {     
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    
    font-size: 0rem;
    border: 1px solid #777;
    border-radius: 50%;
    transition: .3s;

    &::before,
    &::after {
      content: '';
      position: absolute;      
      top: 50%;
      left: 50%;
      width: 30px;
      height: 2px;
      background-color: #777;
      transform: translate(-50%, -50%); 
      transition: .3s; 
    }

    &::after {      
      transform: translate(-50%, -50%) rotate(90deg);      
    } 

    &:hover {
      border-color: #444;

      &::before, 
      &::after {
        background-color: #444;
      }
    }   

    &:active {
      border-color: #777;

      &::before, 
      &::after {
        background-color: #777;
      }
    }   
  }
`;