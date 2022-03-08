import styled from 'styled-components';

const DivInline = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;

  ${({isGoalContainerEngage}) => {
    return isGoalContainerEngage ?
      'overflow-y: auto;' :
      null
  }}
`;

export default DivInline;
