import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  padding: 1rem 0rem;
  text-align: center;
  background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
  border: ${({ lightMode }) => lightMode ? '2px solid black' : '2px solid white'};
`;

export default Form;
