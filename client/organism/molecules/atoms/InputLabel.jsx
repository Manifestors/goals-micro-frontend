import styled from 'styled-components';

const Label = styled.label`
  margin: 0.3rem auto 0.3rem auto;
  display: ${({ PostGoalLabel }) => PostGoalLabel ? 'block' : 'none'}; 
`;

export default Label;
