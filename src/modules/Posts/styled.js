import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const StyledPosts = styled.div`
  display: flex;
  flex-wrap: wrap;   
  margin-left: -5px;
  margin-right: -5px;

  @media ${device.mobileM} { 
    margin-left: -10px;
    margin-right: -10px;
  }
`;