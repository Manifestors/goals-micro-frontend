import styled from 'styled-components';

const ArticleGoal = styled.article`
  margin: 10px auto;
  padding: .5rem;
  width: 85%;
  background-color: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? persianGreen : 'green'};
  color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'black'};
  cursor: zoom-in;
  display: grid;
  grid-template-columns: 1fr 11fr;
  border: ${({ theme: { colors: { onyx }}}) => onyx ? `1px solid ${onyx}` : '1px solid black'};
`;

export default ArticleGoal;
