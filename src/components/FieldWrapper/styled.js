import styled from 'styled-components';

export const FieldWrap = styled.div`
  margin-bottom: ${props => props.mb ? '30px' : '12px'};
  width: 100%;  
  color: #1a1a2e;  

  label {
    display: block;
    margin-bottom: 7px;
    margin-left: 15px;
    font-size: .78rem;
  }

  &.edit label {
    font-size: .8rem;
    font-weight: bold;
  }

  &.edit-avatar {
    text-align: center;

    label {
      width: 150px;
      height: 150px;
      margin-left: 0;
      display: inline-block;
      cursor: pointer;

      img {
        width: 100%; 
        border-radius: 50%;       
      }
    }

    input {
      display: none;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: .667rem;
  color: #ff3535;
`;