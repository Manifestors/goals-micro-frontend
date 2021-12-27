import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  color: ${({ lightMode }) => lightMode ? 'grey' : 'white'};
  background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
  padding-left: 1em;
  font-size: 1rem;
  border: ${({ lightMode }) => lightMode ? '2px solid black' : '2px solid white'};

  option:first-of-type {
    color: ${({ lightMode }) => lightMode ? 'white' : 'white'};
    background-color: ${({ lightMode }) => lightMode ? 'grey' : 'grey'};
    padding-left: 5px;
    font-size: 1rem;
  }

  option {
    color: ${({ lightMode }) => lightMode ? 'black' : 'white'};
    background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
    padding-left: 5px;
    font-size: 1rem;
  }
`;

export default Select;
