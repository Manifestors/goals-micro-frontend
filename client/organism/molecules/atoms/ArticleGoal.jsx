import styled from 'styled-components';

const ArticleGoal = styled.article`
  margin: ${({ isGoalContainerEngage }) => isGoalContainerEngage ? '0' :'1rem auto'};

  padding: ${({ isGoalContainerEngage }) => isGoalContainerEngage ? '0' :'5px'};

  width: ${({ isGoalContainerEngage }) => isGoalContainerEngage ? '100%' :'93%'};

  display: grid;

  position: relative;
  
  grid-template-columns: 2fr 10fr;

  background-color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};
  
  border-radius: ${({ isGoalContainerEngage }) => isGoalContainerEngage ? '0px' :'7px'};

  color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};

  ${({ isGoalContainerEngage }) => {
    !isGoalContainerEngage ?
      `&: hover {
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      }` : null
  }}
`;

export default ArticleGoal;
