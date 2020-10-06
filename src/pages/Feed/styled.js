import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const FeedContainer = styled.div`
  width: 100%;

  @media ${device.mobileM} {
    width: 60%;
    margin: 0 auto;
  }
`;