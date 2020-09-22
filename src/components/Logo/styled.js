import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const StyledLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 30px;

  svg {
    width: 70px;
    height: 70px;
    margin-right: 9px;
  }

  @media ${device.tablet} {
    svg {
      width: 100px;
      height: 100px;
    }
  }
`;

export const StyledLogoTitle = styled.span`
  font-size: 2rem;
  line-height: 1.167;
  font-weight: 700;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.laptop} {
    font-size: 4rem;
  }
`;