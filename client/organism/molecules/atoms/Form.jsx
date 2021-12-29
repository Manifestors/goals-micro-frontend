import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  padding: .3rem 0rem;
  text-align: center;
  background-color: ${({ theme: { colors: { lightBlue }}}) => lightBlue ? lightBlue : 'black'};
  // border: ${({ theme: { colors: { lightBlue }}}) => lightBlue ? `2px solid ${lightBlue}` : '2px solid black'};
`;

export default Form;
