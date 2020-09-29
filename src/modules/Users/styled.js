import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const NoUsersBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -130px -30px -50px;
  background: #f2f2f2;

  svg {
    width: 200px;
    height: 195px;
  }

  p {
    margin: 0;
    font-size: 1.667rem;
    font-weight: bold;
    color: #2db6f0;
    text-align: center;
  }

  @media ${device.mobileM} {
    margin-top: -100px;
  }

  @media ${device.tablet} {
    svg {
      width: 256px;
      height: 249px;
    }
  
    p {      
      font-size: 2.667rem;      
    }
  }
`;