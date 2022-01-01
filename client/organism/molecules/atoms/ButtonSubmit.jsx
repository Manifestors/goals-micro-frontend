import styled from 'styled-components';

const ButtonSubmit = styled.button`
  margin: 1rem auto;

  padding: .5rem 1.4rem;

  background-color: ${({isPostGoalFormBtn, isPostGoalBtn, theme: { main: { colors: { softSweetYellow }}}}) =>
  isPostGoalFormBtn || isPostGoalBtn ? softSweetYellow : 'yellow'};

  border: none;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export default ButtonSubmit;
