import styled from 'styled-components';

const Select = styled.select`
  margin: 0px auto;
  width: 50%;
  padding-left: 1rem;
  font-size: 1rem;
  border: ${({ lightMode }) => lightMode ? '2px solid black' : '2px solid white'};
  background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
  color: ${({ lightMode }) => lightMode ? 'grey' : 'white'};

  option:first-of-type {
    color: ${({ lightMode }) => lightMode ? 'white' : 'white'};
    background-color: ${({ lightMode }) => lightMode ? 'grey' : 'grey'};
    padding-left: 1rem;
    font-size: 1rem;
  }

  option {
    color: ${({ lightMode }) => lightMode ? 'black' : 'white'};
    background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
    padding-left: 1rem;
    font-size: 1rem;
  }
`;

export default Select;
