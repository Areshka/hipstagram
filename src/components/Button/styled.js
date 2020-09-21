import styled from 'styled-components';

export const StyledButton = styled.button.attrs({
  type: 'submit'
})`
  display: inline-block;
  padding: 11px 59px;  
  font-weight: 400;
  font-size: 1.333rem;
  line-height: 1.167;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #4d88ed;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;  
  transition: background-color .2s ease;

  &:hover {
    background-color: #0c64fa;
  }

  &:active {
    background-color: #76a4f5;
  }

 
`;

export const StyledFollowButton = styled(StyledButton).attrs({
  type: 'button'
})` 
${props => console.log(props)}
  width: 120px;
  margin: 0 auto;
  padding: 7px 30px;
  font-size: .778rem;

  background-color:${props => props.isFollow ? " #fe7171" : '#4d88ed'};

  &:hover {
    background-color:${props => props.isFollow ? " #fc4040" : '#0c64fa'};
  }

  &:active {
    background-color:${props => props.isFollow ? " #f58c8c" : '#76a4f5'};  
  } 
`;