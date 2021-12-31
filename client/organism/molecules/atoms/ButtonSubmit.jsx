import styled from 'styled-components';

const ButtonSubmit = styled.button`
  margin: 1rem auto;

  padding: .5rem 1.4rem;

  background-color: ${({isPostGoalFormBtn, isPostGoalBtn, theme: { colors: { lightningYellow }}}) =>
  isPostGoalFormBtn || isPostGoalBtn ? lightningYellow : 'green'};

  // border: ${({theme: { colors: { onyx }}}) => onyx ? `1px solid ${onyx}` : '1px solid black'};
  border: none;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export default ButtonSubmit;
