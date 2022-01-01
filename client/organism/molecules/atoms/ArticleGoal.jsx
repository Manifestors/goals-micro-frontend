import styled from 'styled-components';

const ArticleGoal = styled.article`
  margin: 1rem auto;

  padding: .5rem;

  width: 85%;
  
  display: grid;
  
  grid-template-columns: 1fr 11fr;
  
  background-color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};
  
  border-radius: 10px;

  color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};

  &:hover {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

export default ArticleGoal;
