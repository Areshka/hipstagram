import styled from 'styled-components';

export const StyledFeedPost = styled.article`
  margin-bottom: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    vertical-align: top;
    width: 100%;    
    object-fit: cover;      
  }
`;

export const StyledFeedPostTitle = styled.div`
  padding: 10px;
  font-size: .7rem; 
  
  .login {
    margin-right: 15px;
  }
`;