import styled from 'styled-components';

export const StyledFollowersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-decoration: none;
    color: #1a1a2e;

    .full-name {
      color: gray;
    }

    img {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;