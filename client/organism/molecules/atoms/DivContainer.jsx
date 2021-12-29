import styled from 'styled-components';

const DivContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  max-height: 60vh;
  background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'black'};
  // border: ${({ theme: { colors: { lightBlue }}}) => lightBlue ? `2px solid ${lightBlue}` : '2px solid black'};
  overflow-y: scroll;
`;

export default DivContainer;
