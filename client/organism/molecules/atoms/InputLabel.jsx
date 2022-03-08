import styled from 'styled-components';

const Label = styled.label`
  margin: 1rem auto;

  font-size: ${({ theme: { fontSizes: { large }}}) =>
    large ? large : '16px'
  };
  
  display: ${({ isPostGoalLabel, isSupportMessageLabel }) =>
    isPostGoalLabel || isSupportMessageLabel ? 'block' : 'none'
  }; 
  
  color: ${({ theme: { main: { colors: { softCharcoalBg }}}}) =>
    softCharcoalBg ? softCharcoalBg : 'black'
  };
`;

export default Label;
