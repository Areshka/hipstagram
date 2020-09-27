import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 16px 0;
  background-color: #4d88ed;
  color: #fff;
`;

export const MainHeaderInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormSearch = styled.form`
  order: 1;
  width: 100%;
  margin-top: 15px;
  text-align: center;
  
  @media ${device.mobileM} {
    order: 0;
    width: auto;
    margin-top: 0;
    margin-right: auto;
    text-align: left;
  }
`;

export const MainHeaderTitle = styled.div`
    
  @media ${device.mobileM} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const UserBlock = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
  line-height: .7;

  @media ${device.mobileM} {
    margin-left: auto;
  }

  li {
    margin-left: 20px;
    
    display: inline-block;    

    &:first-child {
      margin-left: 0;
    }    

    button {
      background: none;
      border: none;
      outline: none;
      line-height: .7;
      cursor: pointer;
      padding: 0;
      margin: 0;
    }

    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
      transition: all .6s linear;

      path {
        transition: fill .2s linear;
      }
    } 

    &:hover path {
      fill: #bed2f5;
    }

    &:active {
      transform-origin: center;
      transform: scale(.95, .95);
    }
  }
`;