import styled from 'styled-components';
import { device } from '../../../constants/breakpoint';

export const StyledPostsItem = styled.div`  
  width: 50%;   
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;  

  @media ${device.mobileM} {
    width: 33.33333%;   
    max-height: 250px; 
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;    
    cursor: pointer;  
  }
`;