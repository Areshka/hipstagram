import styled from 'styled-components';

export const FieldWrap = styled.div`
  margin-bottom: ${props => props.mb ? '30px' : '12px'};
  width: 100%;
  max-width: 350px;
  color: #1a1a2e;

  label {
    display: block;
    margin-bottom: 7px;
    margin-left: 15px;
    font-size: .78rem;
  }
`;

export const ErrorMessage = styled.p`
    margin: 0;
    margin-left: 10px;
    font-size: .667rem;
    color: #ff3535;
`;