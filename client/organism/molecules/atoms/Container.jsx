import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ lightMode }) => lightMode ? 'white' : 'black'};
  border: ${({ lightMode }) => lightMode ? '2px solid black' : '2px solid white'};
`;

export default Container;
