import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledWrapperContent = styled.div`
  min-height: 100vh;  
  width: 100%;
  max-width: 768px;
  margin: 0 auto;  
  padding: 130px 30px 50px;
  background-color: #fff; 

  @media ${device.mobileM} {
    padding-top: 100px;  
  }
`;