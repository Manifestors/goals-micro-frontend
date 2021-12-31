import styled from 'styled-components';

const ArticleGoal = styled.article`
  margin: 1rem auto;
  padding: .5rem;
  width: 85%;
  background-color: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? persianGreen : 'green'};
  color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'black'};
  display: grid;
  grid-template-columns: 1fr 11fr;
  // border: ${({ theme: { colors: { onyx }}}) => onyx ? `1px solid ${onyx}` : '1px solid black'};
  border-radius: 10px;

  &:hover {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

export default ArticleGoal;
