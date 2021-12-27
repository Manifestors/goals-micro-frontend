import styled from 'styled-components';

const Form = styled.form`
  background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
  padding: 1em;
  border: ${({ lightMode }) => lightMode ? '2px solid black' : '2px solid white'};
`;

export default Form;
