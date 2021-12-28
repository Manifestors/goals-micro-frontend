import styled from 'styled-components';

const ArticleGoal = styled.article`
  margin: 10px auto;
  padding: .5rem;
  width: 85%;
  height: 15%;
  background-color: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? persianGreen : 'green'};
  color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'black'};
  cursor: zoom-in;
  display: grid;
  grid-template-columns: 1fr 11fr;
  border: ${({ theme: { colors: { lightBlue }}}) => lightBlue ? `2px solid ${lightBlue}` : 'blue'};
`;

export default ArticleGoal;
