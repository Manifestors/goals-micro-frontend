import styled from 'styled-components';

const ButtonSubmit = styled.button`
  margin: 1rem auto;

  padding: .5rem 1.4rem;

  color: ${({isCancelBtn}) =>
    isCancelBtn ? 'white': 'black'
  };

  background-color: ${({isPostGoalFormBtn, isPostGoalBtn, isCancelBtn, theme: { main: { colors: { softSweetYellow, softRed }}}}) =>
    isPostGoalFormBtn || isPostGoalBtn ? softSweetYellow :
    isCancelBtn ? softRed : 'yellow'
  };

  border: none;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export default ButtonSubmit;
