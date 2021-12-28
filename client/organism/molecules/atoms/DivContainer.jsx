import styled from 'styled-components';

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'black'};
  border: ${({ theme: { colors: { lightBlue }}}) => lightBlue ? `2px solid ${lightBlue}` : '2px solid black'};
  overflow-y: scroll;
`;

export default DivContainer;
