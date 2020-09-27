import styled from 'styled-components';
import { device } from '../../constants/breakpoint';
import wpapFinal from '../../assets/images/wpap_final.jpg';

export const AuthWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #fff;
`;

export const AuthWrapperImgBlock = styled.div`
  width: 0;

  @media ${device.tablet} {    
    width: 40%;    
    background-image: url(${wpapFinal});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;    
  }
`;

export const AuthBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;  
  justify-content: center; 

  @media ${device.tablet}{    
    width: 60%;    
  }
`;

export const FormAuth = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 0 15px;  
`;

export const FormAuthTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
  font-weight: normal;
  font-size: 1.333rem;
  line-height: 1.167;
`;

export const AuthLink = styled.p`
  margin: 0;          
  text-align: center;

  a {
    text-decoration: none;
    color: #4d88ed;
    transition: color .2s ease;

    &:hover {
      color: #0c64fa;
    }

    &:active {
      color: #76a4f5;
    }
  }
`;