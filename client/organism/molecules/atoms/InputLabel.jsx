import styled from 'styled-components';

const Label = styled.label`
  margin: 1rem auto;

  font-size: 1rem;
  
  display: ${({ isPostGoalLabel }) => isPostGoalLabel ? 'block' : 'none'}; 
  
  color: ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg : 'red'};
`;

export default Label;
