import styled from 'styled-components';
import { device } from '../../constants/breakpoint';

export const StyledSettings = styled.div`
  @media ${device.mobileM} {
    display: flex;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  padding-bottom: 15px;
  list-style: none;
  border-bottom: 1px solid #c2c2c2;

  li {
    margin-left: 15px;
    
    &:first-child {
      margin-left: 0;
    }

    a {    
      font-size: .9rem;
      text-decoration: none;
      color: #1a1a2e;

      &.active {
        font-weight: bold;        
      }
    }
  }

  @media ${device.mobileM} {
    flex-direction: column;
    width: 25%;
    margin-right: 30px;
    margin-bottom: 0;
    padding: 10px;
    border-bottom: none;
    border-right: 1px solid #c2c2c2;

    li {
      margin-left: 0;
      margin-bottom: 15px;
    }
  }
`;

export const StyledSettingsContent = styled.div`
  @media ${device.mobileM} {
    flex-grow: 1;
  }
`;

