import styled from 'styled-components';
import {
  device
} from '../../../constants/breakpoint';

export const UserItem = styled.article `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 8px 15px;
  background: #fff;
  border: 1px solid #C0BFBF;  
  border-radius: 10px;

   a {
    color: #1a1a2e;
    text-decoration: none;
  }  

  @media ${device.mobileM} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const UserInfo = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media ${device.mobileM} {
    width: auto;
    margin-bottom: 0;
  }
`;

export const UserAvatar = styled.div `
  width: 50px;
  height: 50px;
  margin-right: 15px;  

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media ${device.mobileM} {
    margin-right: 30px;
  }
`;

export const UserName = styled.h3 `
  margin: 0;  
  font-size: 1rem;
  font-weight: 400;
  
  @media ${device.mobileM} {
    font-size: 1.333rem;
  }
`;