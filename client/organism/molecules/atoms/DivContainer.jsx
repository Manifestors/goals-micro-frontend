import styled from 'styled-components';

const DivContainer = styled.div`
  width: 100%;
  
  min-height: 400px;

  max-height: 400px;
  
  ${({isGoalContainerEngage}) => {
    return !isGoalContainerEngage ?
      'overflow-y: auto;' :
      null
  }}

  background-color: ${({ theme: { main: { colors: { softGreyBg }}}}) => softGreyBg ? softGreyBg : 'light-grey'};

  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  display: ${({ isGoalContainerEngage }) =>
    isGoalContainerEngage ? 'grid' : 'block'
  };

  grid-template-rows: ${({ isGoalContainerEngage }) =>
    isGoalContainerEngage ? '1fr 11fr' : 'auto'
  };
`;

export default DivContainer;
