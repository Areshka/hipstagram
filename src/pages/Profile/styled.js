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

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;   
  margin-left: -5px;
  margin-right: -5px;

  @media ${device.mobileM} { 
    margin-left: -10px;
    margin-right: -10px;
  }
`;

export const PostsItem = styled.div`  
  width: 50%;   
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;  

  @media ${device.mobileM} {
    width: 33.33333%;    
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  img {
    display: block;
    width: 100%;
    cursor: pointer;  
  }
`;