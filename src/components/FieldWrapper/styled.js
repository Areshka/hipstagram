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
      position: relative;
      width: 150px;
      height: 150px;
      margin-left: 0;
      display: inline-block;
      cursor: pointer;
      transition: 0.3s;

      img {
        width: 100%; 
        height: 100%;       
        border-radius: 50%;  
        object-fit: cover;     
      }             

      &::before {
        content: 'Change avatar';
        position: absolute;
        width: 100%;
        height: 100%;        
        font-weight: bold;
        line-height: 150px;
        color: #fff;        
        background-color: rgba(0, 0, 0, .7);
        border-radius: 50%; 
        opacity: 0;
        transition: .3s;
      }

      &:hover::before {         
        opacity: 1;
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